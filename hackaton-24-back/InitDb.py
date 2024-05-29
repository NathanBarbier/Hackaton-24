import pandas as pd
from sqlalchemy import create_engine

db_url = 'mysql://freedb_hackaton:cMgX2ygMsNFK#z8@sql.freedb.tech/freedb_hackaton'

engine = create_engine(db_url)

csv_files = {
    'athlete_cleaned.csv': 'athletes',
    'host_cleaned.csv': 'hosts',
    'medal_cleaned.csv': 'medals',
    'result_cleaned.csv': 'results',
    'Dataset.csv': 'Datasets',
}

folder_path = 'Clean_Data/'

for file_name, table_name in csv_files.items():
    file_path = folder_path + file_name
    df = pd.read_csv(file_path)
    df.to_sql(name=table_name, con=engine, if_exists='replace', index=False)
    print(f"Table {table_name} créée avec succès dans la base de données.")
