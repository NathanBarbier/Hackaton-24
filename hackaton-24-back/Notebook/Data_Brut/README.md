# Hackaton-24

![Capture d’écran 2024-05-31 à 10 56 33](https://github.com/NathanBarbier/Hackaton-24/assets/93190978/a4b1071a-344e-4d7e-9fcb-85445e86c368)


# Partie Jupyter PySpark

Ce projet utilise une image Docker pour exécuter Jupyter Notebook avec PySpark. L'image inclut un notebook et des données brutes. Suivez les instructions ci-dessous pour construire et exécuter l'image Docker.

## Prérequis

- Docker installé sur votre machine. Vous pouvez télécharger Docker [ici](https://www.docker.com/products/docker-desktop).

## Contenu

- `Data_explor.ipynb`: Notebook Jupyter pour l'exploration des données.
- `Data_Brut`: Répertoire contenant les données brutes.
- `Dockerfile`: Fichier de configuration Docker pour construire l'image.

## Instructions

### 1. Cloner le dépôt (ou copier les fichiers)

Assurez-vous d'avoir tous les fichiers nécessaires dans un répertoire local.

### 2. Construire l'image Docker

Ouvrez un terminal, naviguez jusqu'au répertoire contenant votre `Dockerfile` et exécutez la commande suivante :

```sh
docker build -t my-jupyter-pyspark-image .
```

Cette commande construit l'image Docker et la tague avec le nom `my-jupyter-pyspark-image`.

### 3. Lancer le conteneur

Une fois l'image construite, lancez un conteneur à partir de cette image en exécutant la commande suivante :

```sh
docker run -p 8888:8888 my-jupyter-pyspark-image
```

Cette commande démarre le conteneur et mappe le port 8888 du conteneur au port 8888 de votre machine hôte, permettant ainsi l'accès à Jupyter Notebook via un navigateur web.

### 4. Accéder à Jupyter Notebook

Ouvrez votre navigateur web et accédez à l'URL suivante :

```
http://localhost:8888
```

Vous devriez voir l'interface de Jupyter Notebook. Le répertoire de travail contiendra :

- Le fichier `Data_explor.ipynb`
- Le répertoire `Data_Brut`
- Le répertoire `Data` (créé lors de la construction de l'image)

### 5. Utiliser le Notebook

Cliquez sur le fichier `Data_explor.ipynb` pour ouvrir et exécuter le notebook.

## Aide

Si vous rencontrez des problèmes, vérifiez que Docker est correctement installé et que vous avez suivi toutes les étapes correctement. Consultez la [documentation Docker](https://docs.docker.com/) pour plus d'informations.
