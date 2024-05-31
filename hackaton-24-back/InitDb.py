import pandas as pd
from sqlalchemy import create_engine

db_url = 'mysql://freedb_Charly_hackaton:7E$YQzt!U&vRU#k@sql.freedb.tech/freedb_Charly_Hackaton24'
# db_url = 'mysql+pymysql://admin123:Hackaton123@hackaton.mysql.database.azure.com:3306/hackaton'
engine = create_engine(db_url)

csv_files = {
    'athlete_cleaned.csv': 'athletes',
    'host_cleaned.csv': 'hosts',
    'medal_cleaned.csv': 'medals',
    'Dataset.csv': 'datasets',
    'result_cleaned.csv': 'results',
    'paris_2024_predictions3.csv': 'predictions'
}

folder_path = 'Clean_Data/'

for file_name, table_name in csv_files.items():
    file_path = folder_path + file_name
    df = pd.read_csv(file_path)
    df.to_sql(name=table_name, con=engine, if_exists='replace', index=False)
    print(f"Table {table_name} créée avec succès dans la base de données.")
