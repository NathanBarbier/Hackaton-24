import os
from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import text
import pandas as pd
import plotly.express as px
from flask_cors import CORS
from flask import jsonify


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
    sql_query_countries = text("SELECT DISTINCT country_3_letter_code AS Country FROM medals")
    sql_query_years = text("SELECT DISTINCT SUBSTRING_INDEX(game_slug, '-', -1) AS Year FROM medals")
    
    countries_result = db.session.execute(sql_query_countries)
    years_result = db.session.execute(sql_query_years)
    
    countries = [row.Country for row in countries_result]
    years = [row.Year for row in years_result]
    
    combinations = pd.DataFrame([(country, year) for country in countries for year in years], columns=['Country', 'Year'])
    
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
    
    df = pd.merge(combinations, df_medals, on=['Country', 'Year'], how='left').fillna(0)
    
    df['Medal'] = df['Medal'].astype(int)
    
    fig = px.line(df, x='Year', y='Medal', color='Country')

    return fig.to_html()

# Route pour les performances d'un pays en fonction de si il a oui ou non accueilli les jeux
@app.route('/api/hostPerformance', methods=['GET'])

def get_host_performance():
    country_code = request.args.get('country_code', 'FRA')
    sql_query = text("""
       SELECT d.country_3_letter_code AS country, 
       d.country_name AS country_name, 
       COUNT(d.m_total) AS medal_count, 
       d.game_year,
       CASE WHEN h.game_location IS NOT NULL THEN 'Oui' ELSE 'Non' END AS is_host
FROM `datasets` d
LEFT JOIN `hosts` h 
       ON d.game_year = h.game_year 
       AND LEFT(d.country_name, 13) = LEFT(h.game_location, 13) 
       AND h.game_season = 'Summer'
WHERE d.country_3_letter_code = :country_code
GROUP BY d.country_3_letter_code, d.country_name, d.game_year, is_host
ORDER BY d.game_year;
    """)

    result = db.session.execute(sql_query, {'country_code': country_code})
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
    
    # Vérifie s'il y a des données et obtient le nom du pays
    if data:
        country_name = data[0]['Country Name']
    else:
        country_name = "Unknown Country"

    df = pd.DataFrame(data)
    df['Medal Count'] = df['Medal Count'].astype(int)

    fig = px.bar(df, x='Game Year', y='Medal Count', color='Is Host', 
                 title=f'Nombre de médailles par années en {country_name} '  ,
                 labels={'Game Year': 'Année', 'Medal Count': 'Nombre de médailles', 'Is Host': 'Hôte'},
                 color_discrete_map={'Oui': 'green', 'Non': 'blue'})

    fig.update_layout(
        xaxis=dict(
            dtick=4  # Affiche toutes les 4 années
        )
    )

    return fig.to_html()





# Route Graphe nombre de Médailles par Discipline par Pays 
@app.route('/api/medalByDisciplineByCountry', methods=['GET'])
def get_medal_by_discipline_by_country():
    country = request.args.get('country')

    sql_query = text("""
        SELECT discipline_title, count(medal_type) as Medals, country_name 
        FROM datasets 
        WHERE medal_type <> '0' AND country_3_letter_code = :country
        GROUP BY discipline_title;
    """)

    result = db.session.execute(sql_query, {'country': country})
    data = [{'Discipline': row.discipline_title, 'Country': row.country_name, 'Medals': row.Medals} for row in result]

    df = pd.DataFrame(data)

    # Simplifier les données
    if len(df) > 20 :
        small_disciplines = df[df['Medals'] < 10]
        other_medals = small_disciplines['Medals'].sum()

        other_entry = pd.DataFrame([{'Discipline': 'Others', 'Country': country, 'Medals': other_medals}])
        
        df = df[df['Medals'] >= 10]._append(other_entry, ignore_index=True)

    fig = px.pie(df, names='Discipline', values='Medals', labels={'Medals': 'Number of Medals'}, title='Nombre de médailles par discipline')
    fig.update_traces(textinfo='value')
    fig.update_layout(
        xaxis=dict(
            tickangle=45  
        ),
        height=1000 
    )

    return fig.to_html()

# Route Graphe nombre de Médailles par Année par Pays 
@app.route('/api/averageAgeByDiscipline', methods=['GET'])
def get_average_age_by_discipline():
    sql_query = text("""
        SELECT 
            m.athlete_full_name as athletes, 
            m.event_title as discipline,  
            CAST(RIGHT(m.game_slug, 4) AS UNSIGNED) - a.athlete_year_birth as age_winning
        FROM `medals` m
        JOIN `athletes` a
        ON m.athlete_full_name = a.athlete_full_name
        WHERE CAST(RIGHT(m.game_slug, 4) AS UNSIGNED) - a.athlete_year_birth BETWEEN 14 AND 60
    """)

    result = db.session.execute(sql_query)
    data = [
        {
            'Athlete': row.athletes,
            'Discipline': row.discipline,
            'Age': row.age_winning
        }
        for row in result
    ]
    df = pd.DataFrame(data)

    fig = px.box(df, x='Discipline', y='Age', color='Discipline', 
                 title='Age moyen des médaillées par discipline',
                 labels={'Discipline': 'Discipline', 'Age': 'Age '},
                 points="all")  # Affiche tous les points

    fig.update_layout(
        xaxis=dict(
            tickangle=45  # Rotation des étiquettes de l'axe x pour une meilleure lisibilité
        ),
        height=1000  # Définir la hauteur du graphique
    )

    return fig.to_html()


# Route Graphe nombre de Médailles par Année par Pays 
@app.route('/api/genderPerformanceByCountry', methods=['GET'])
def get_gender_performance_by_country():
    country_code = request.args.get('country_code', 'FRA')
    sql_query = text("""
        SELECT m.event_gender AS genders,COUNT(m.medal_type) AS total_medals,m.country_3_letter_code AS country,CAST(RIGHT(m.game_slug, 4) AS UNSIGNED)as years FROM `medals`m
LEFT JOIN `hosts` h 
ON h.game_slug = m.game_slug
WHERE m.country_3_letter_code = :country_code AND h.game_season = 'Summer'
GROUP BY m.event_gender,m.country_3_letter_code,CAST(RIGHT(m.game_slug, 4) AS UNSIGNED);
    """)
    
    result = db.session.execute(sql_query, {'country_code': country_code})
    
    data = [
        {'Genders': row.genders, 'Medal': row.total_medals, 'Country': row.country, 'Years': row.years}
        for row in result
    ]

    df = pd.DataFrame(data)

    color_discrete_map = {
        'Men': '#636efa',
        'Woman': '#ef553b   ',
        'Mixed': '#ab63fa',
        'Open': '#fecb52',
    }

    fig = px.bar(df, x="Years", y="Medal", color="Genders", 
                color_discrete_map=color_discrete_map, 
                title="Nombre de médailles par genre et par pays à travers les années",
                labels={'Years': 'Année', 'Medal': 'Nombre de médailles', 'Genders' : "Genre"},
                )
    fig.update_layout(
        xaxis=dict(
            dtick=4  # Affiche toutes les 4 années
        )
    )

    return fig.to_html()


# Route Graphe nombre de Médailles par Année par Pays 
@app.route('/api/top10Athletes', methods=['GET'])
def get_top_10_atheletes():
    sql_query = text("""SELECT athlete_full_name AS athletes, SUM(total_medals) AS total_medals
                        FROM `athletes`
                        WHERE total_medals > 9
                        GROUP BY athlete_full_name
                        ORDER BY total_medals DESC                       
                    """)
    result = db.session.execute(sql_query)
    data = [{'Athlete': row.athletes, 'Medal': row.total_medals} for row in result]
    df = pd.DataFrame(data)

    fig = px.bar(df, x="Athlete", y="Medal",color="Athlete",title=f' Top des athlètes avec au moins 10 médailles',labels={'Athlete': 'Top Athlètes', 'Medal Count': 'Nombre de médailles', 'color': 'Top Athlètes'})

    return fig.to_html()

@app.route('/api/hosts', methods=['GET'])

def get_hosts():
    sql_query = text("""
        SELECT d.country_3_letter_code AS country, 
               d.country_name AS country_name             
        FROM `datasets` d
        LEFT JOIN `hosts` h       
               ON LEFT(d.country_name, 13) = LEFT(h.game_location, 13) 
               AND h.game_season = 'Summer'
        GROUP BY d.country_3_letter_code 
        ORDER BY d.country_name ASC
    """)
    result = db.session.execute(sql_query)
    data = [{'country_code': row.country, 'country_name': row.country_name} for row in result]

    return jsonify(data)

# Récupérer les pays
@app.route('/api/getCountries', methods=['GET'])
def get_countries():
    sql_query = text("SELECT DISTINCT(country_name) AS countries, country_3_letter_code FROM datasets ORDER BY country_name;")
    result = db.session.execute(sql_query)
    data = {row.country_3_letter_code: row.countries for row in result}
    return jsonify(data)

# RUN APP
if __name__ == '__main__':
    port = int(os.environ.get('PORT', 8080))
    app.run(debug=True, host='0.0.0.0', port=port)
