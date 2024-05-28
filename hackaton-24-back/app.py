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


class Data(db.Model):
    __tablename__ = 'test'
    id = db.Column(db.Integer, primary_key=True)
    test = db.Column(db.String(500))


# RUN APP
if __name__ == '__main__':
    app.run(port=8080)
