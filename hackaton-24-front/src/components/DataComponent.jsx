import React, { useState, useEffect } from "react";

const DataComponent = () => {
    // Créer un state pour stocker les données récupérées
    const [data, setData] = useState(null);

    // Utiliser useEffect pour effectuer la requête lorsque le composant est monté
    useEffect(() => {
        // Fonction asynchrone pour effectuer la requête
        const fetchData = async () => {
            try {
                // Effectuer la requête GET vers l'API
                const response = await fetch("URL_DE_TON_API");
                // Vérifier si la réponse est OK (200)
                if (response.ok) {
                    // Extraire les données JSON de la réponse
                    const jsonData = await response.json();
                    // Mettre à jour le state avec les données récupérées
                    setData(jsonData);
                } else {
                    // Gérer les cas où la requête échoue
                    console.error("Erreur lors de la récupération des données:", response.status);
                }
            } catch (error) {
                // Gérer les erreurs liées à la requête
                console.error("Erreur lors de la requête:", error);
            }
        };

        // Appeler la fonction fetchData pour récupérer les données
        fetchData();

        // Clean-up function pour éviter les fuites de mémoire
        return () => {
            // Optional: Effectuer des actions de nettoyage si nécessaire
        };
    }, []); // Passer un tableau vide en dépendance pour que cela soit exécuté une seule fois

    return (
        <div>
            {/* Afficher les données dans le composant */}
            {data ? (
                <div>
                    {/* Afficher les données ici */}
                </div>
            ) : (
                <div>Chargement...</div>
            )}
        </div>
    );
};

export default DataComponent;
