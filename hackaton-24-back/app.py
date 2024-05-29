import os
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
def get_medal_by_countries():
    return 'Test Concluant'

# Route Graphe nombre de Médailles par Année par Pays 
@app.route('/api/medalByCountriesByYear', methods=['GET'])
def get_medal_by_countries_by_year():
    return 'Test Concluant'

# Route Graphe nombre de Médailles par Année par Pays 
@app.route('/api/hostPerformance', methods=['GET'])
def get_host_performance():
    return 'Test Concluant'

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
