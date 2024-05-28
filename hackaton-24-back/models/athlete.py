from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Athlete(db.Model):
    __tablename__ = 'athletes'
    athlete_full_name = db.Column(db.String(100))
    athlete_url = db.Column(db.String(100))
    athlete_year_birth = db.Column(db.String(100))
    first_game = db.Column(db.String(100))
    games_participations = db.Column(db.String(100))
    M_bronze = db.Column(db.String(100))
    M_gold = db.Column(db.String(100))
    M_silver = db.Column(db.String(100))
    total_medals = db.Column(db.String(100))
