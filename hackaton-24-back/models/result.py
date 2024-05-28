from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Result(db.Model):
    __tablename__ = 'result'
    country_3_letter_code = db.Column(db.String(100))
    discipline_title = db.Column(db.String(100))
    event_title = db.Column(db.String(100))
    game_slug = db.Column(db.String(100))
    medal_type = db.Column(db.String(100))
    medal_type_encoded = db.Column(db.String(100))
    participant_type = db.Column(db.String(100))
    rank_position = db.Column(db.String(100))

