import os
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

# Route Graphe nombre de Médailles par Année par Pays 
@app.route('/api/medalByCountries', methods=['GET'])
def get_medal_by_countries():
    sql_query = text("SELECT m.country_3_letter_code as country, m.medal_type as type, count(m.medal_type) as medal FROM medals m group by m.country_3_letter_code, m.medal_type order by country_3_letter_code, medal_type;")
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

# Route Graphe nombre de Médailles par Année par Pays 
@app.route('/api/medalByCountriesByYear', methods=['GET'])
def get_medal_by_countries_by_year():
     # Step 1: Extract countries and years
    sql_query_countries = text("SELECT DISTINCT country_3_letter_code AS Country FROM medals")
    sql_query_years = text("SELECT DISTINCT SUBSTRING_INDEX(game_slug, '-', -1) AS Year FROM medals")
    
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
            medals m 
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

# Route pour les performances d'un pays en fonction de si il a oui ou non accueilli les jeux
@app.route('/api/hostPerformance', methods=['GET'])
def get_host_performance():
    country_code = request.args.get('country_code', 'USA')
    sql_query = text("""
       SELECT d.country_3_letter_code AS country, 
       d.country_name AS country_name, 
       COUNT(d.m_total) AS medal_count, 
       d.game_year,
       CASE WHEN h.game_location IS NOT NULL THEN 'Yes' ELSE 'No' END AS is_host
FROM `Datasets` d
LEFT JOIN `hosts` h 
       ON d.game_year = h.game_year 
       AND LEFT(d.country_name, 13) = LEFT(h.game_location, 13) 
       AND h.game_season = 'Summer'
WHERE d.country_3_letter_code LIKE :country_code
GROUP BY d.country_3_letter_code, d.country_name, d.game_year, is_host
ORDER BY d.game_year;

    """)
    result = db.session.execute(sql_query, {'country_code': f'%{country_code}'})
# POur construire le jeux de data
    data = [
        {
            'Country': row.country,
            'Country Name': row.country_name,
            'Medal Count': row.medal_count,
            'Game Year': row.game_year,
            'Is Host': row.is_host
        }
        for row in result
    ]
    df = pd.DataFrame(data)
    df['Medal Count'] = df['Medal Count'].astype(int)
    
    # Graphique en bar
    fig = px.bar(df, x='Game Year', y='Medal Count', color='Is Host', 
                title=f'Medal Count by Year for {country_code} (Summer Games)',
                 labels={'Game Year': 'Year', 'Medal Count': 'Medal Count', 'Is Host': 'Host Status'},
                 color_discrete_map={'Yes': 'green', 'No': 'blue'})
    # tous les 4 ans à partir du premier
    fig.update_layout(
        xaxis=dict(
        dtick=4  # Affiche toutes les 4 années
        )
    )

    # Retourne le graphique en HTML
    return fig.to_html()


# Route Graphe nombre de Médailles par Année par Pays 
@app.route('/api/medalByDisciplineByCountry', methods=['GET'])
def get_medal_by_discipline_by_country():
    return 'Test Concluant'

# Route Graphe nombre de Médailles par Année par Pays 
@app.route('/api/averageAgeByDiscipline', methods=['GET'])
def get_average_age_by_discipline():
    return 'Test Concluant'

# Route Graphe nombre de Médailles par Année par Pays 
@app.route('/api/genderPerformanceByCountry', methods=['GET'])
def get_gender_performance_by_country():
    return 'Test Concluant'

# Route Graphe nombre de Médailles par Année par Pays 
@app.route('/api/top10Athletes', methods=['GET'])
def get_top_10_atheletes():
    return 'Test Concluant'

# RUN APP
if __name__ == '__main__':
    port = int(os.environ.get('PORT', 8080))
    app.run(host='0.0.0.0', port=port)
