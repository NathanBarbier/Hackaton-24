from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import text
import pandas as pd
import plotly.express as px
from flask_cors import CORS


app = Flask(__name__)
CORS(app)

app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://freedb_hackaton:cMgX2ygMsNFK#z8@sql.freedb.tech/freedb_hackaton'
db = SQLAlchemy(app)


# Route Graphe nombre de Médailles par Année par Pays 
@app.route('/api/medalByCountries', methods=['GET'])
def get_countries():
    sql_query = text("SELECT m.country_3_letter_code as country, m.medal_type as type, count(m.medal_type) as medal FROM medal m group by m.country_3_letter_code, m.medal_type order by country_3_letter_code, medal_type;")
    result = db.session.execute(sql_query)
    data = [{'Country': row.country, 'Type': row.type, 'Medal': row.medal} for row in result]
    df = pd.DataFrame(data)
    fig = px.bar(df, x="Country", y="Medal", color="Type")

    return fig.to_html()



@app.route('/api/medalByCountriesByYear', methods=['GET'])
def get_countries():
    sql_query = text("SELECT m.country_3_letter_code as Country, m.game_slug as Year, count(m.medal_type) as Medal FROM medal m GROUP BY m.game_slug , m.country_3_letter_code ORDER BY  medal, game_slug, country_3_letter_code ")
    result = db.session.execute(sql_query)
    data = [{'Year': row.Year, 'Country': row.Country, 'Medal': row.Medal} for row in result]
    df = pd.DataFrame(data)
    fig = px.line(df, x='Year', y='Medal', color='Country')

    return fig.to_html()
