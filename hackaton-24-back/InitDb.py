from pyspark.sql import SparkSession
import pandas as pd
from sqlalchemy import create_engine

spark = SparkSession.builder \
    .appName("ImportDataToMySQL") \
    .getOrCreate()

db_url = 'mysql+pymysql://freedb_hackaton:cMgX2ygMsNFK#z8@sql.freedb.tech/freedb_hackaton'

engine = create_engine(db_url)

csv_files = {
    'cleaned_athletes.csv': 'athletes',
    'cleaned_host.csv': 'host',
    'cleaned_medal.csv': 'medal',
    'cleaned_result.csv': 'result'
}

folder_path = 'Clean_Data/'

for file_name, table_name in csv_files.items():
    file_path = folder_path + file_name
    df_spark = spark.read.option("header", "true").csv(file_path)
    df_pandas = df_spark.toPandas()
    
    df_pandas.to_sql(name=table_name, con=engine, if_exists='replace', index=False)
    print(f"Table {table_name} créée avec succès dans la base de données.")

spark.stop()
