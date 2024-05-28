from pyspark.sql import SparkSession
import pandas as pd
from sqlalchemy import create_engine

# Initialisation de la session Spark
spark = SparkSession.builder \
    .appName("ImportDataToMySQL") \
    .getOrCreate()

# Utilisation de PyMySQL
db_url = 'mysql+pymysql://freedb_hackaton:cMgX2ygMsNFK#z8@sql.freedb.tech/freedb_hackaton'

# Création de l'objet engine pour la connexion à la base de données
engine = create_engine(db_url)

# Liste des fichiers à importer avec les noms de table correspondants
csv_files = {
    'cleaned_athletes.csv': 'athletes',
    'cleaned_host.csv': 'host',
    'cleaned_medal.csv': 'medal',
    'cleaned_result.csv': 'result'
}

# Chemin du dossier contenant les fichiers CSV Spark
folder_path = 'Clean_Data/'

# Boucle pour lire chaque fichier CSV Spark et l'enregistrer dans la base de données
for file_name, table_name in csv_files.items():
    file_path = folder_path + file_name
    df_spark = spark.read.option("header", "true").csv(file_path)
    df_pandas = df_spark.toPandas()  # Convertir en DataFrame Pandas
    
    # Enregistrer le DataFrame Pandas dans la base de données
    df_pandas.to_sql(name=table_name, con=engine, if_exists='replace', index=False)
    print(f"Table {table_name} créée avec succès dans la base de données.")

# Arrêter la session Spark
spark.stop()
