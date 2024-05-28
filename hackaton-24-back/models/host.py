from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Host(db.Model):
    __tablename__ = 'host'
    game_end_date = db.Column(db.String(100))
    game_location = db.Column(db.String(100))
    game_name = db.Column(db.String(100))
    game_season = db.Column(db.String(100))
    game_slug = db.Column(db.String(100))
    game_start_date = db.Column(db.String(100))
    game_year = db.Column(db.String(100))
