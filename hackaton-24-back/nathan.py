from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import text
import pandas as pd
import plotly.express as px
from flask_cors import CORS


app = Flask(__name__)
CORS(app)

app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://freedb_Charly:Q2J!yaNZMNV!eAw@sql.freedb.tech/freedb_hackaton24'
db = SQLAlchemy(app)


# Route Graphe nombre de Médailles par Pays 
@app.route('/api/medalByCountries', methods=['GET'])
def get_medal_by_countries():
    sql_query = text("SELECT m.country_3_letter_code as country, m.medal_type as type, count(m.medal_type) as medal FROM medal m group by m.country_3_letter_code, m.medal_type order by country_3_letter_code, medal_type;")
    result = db.session.execute(sql_query)
    data = [{'Country': row.country, 'Type': row.type, 'Medal': row.medal} for row in result]
    df = pd.DataFrame(data)

    color_discrete_map = {
        'GOLD': 'gold',
        'SILVER': 'silver',
        'BRONZE': '#cd7f32'
    }

    fig = px.bar(df, x="Country", y="Medal", color="Type", color_discrete_map=color_discrete_map)

    return fig.to_html()


@app.route('/api/medalByCountriesByYear', methods=['GET'])
def get_medal_by_countries_by_year():
    # Step 1: Extract countries and years
    sql_query_countries = text("SELECT DISTINCT country_3_letter_code AS Country FROM medal")
    sql_query_years = text("SELECT DISTINCT SUBSTRING_INDEX(game_slug, '-', -1) AS Year FROM medal")
    
    countries_result = db.session.execute(sql_query_countries)
    years_result = db.session.execute(sql_query_years)
    
    countries = [row.Country for row in countries_result]
    years = [row.Year for row in years_result]
    
    # Create a DataFrame with all combinations of countries and years
    combinations = pd.DataFrame([(country, year) for country in countries for year in years], columns=['Country', 'Year'])
    
    # Step 2: Get actual medal data
    sql_query_medals = text("""
        SELECT 
            m.country_3_letter_code AS Country, 
            SUBSTRING_INDEX(m.game_slug, '-', -1) AS Year, 
            COUNT(m.medal_type) AS Medal 
        FROM 
            medal m 
        GROUP BY 
            Year, m.country_3_letter_code 
        ORDER BY 
            Year ASC, Country ASC
    """)
    result = db.session.execute(sql_query_medals)
    medal_data = [{'Year': row.Year, 'Country': row.Country, 'Medal': row.Medal} for row in result]
    df_medals = pd.DataFrame(medal_data)
    
    # Step 3: Perform outer join to include missing combinations
    df = pd.merge(combinations, df_medals, on=['Country', 'Year'], how='left').fillna(0)
    
    # Convert Medal column to integer
    df['Medal'] = df['Medal'].astype(int)
    
    # Create the plotly figure
    fig = px.line(df, x='Year', y='Medal', color='Country')

    return fig.to_html()


