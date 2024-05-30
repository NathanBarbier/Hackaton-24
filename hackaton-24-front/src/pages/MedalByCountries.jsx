import React from "react";

import MedalByCoutriesComponent from "../components/MedalByCountriesComponent";
const MedalByCountries = () => {
    return (
        <>
            <div className="bg-gray-50 min-h-screen py-8">
                <div className="container mx-auto p-4">
                    <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">Répartition du Nombre Total de Médailles par Pays</h1>
                    <p className="mb-8 text-lg text-gray-700 text-center max-w-3xl mx-auto">
                    Cette analyse examine la répartition du nombre total de médailles remportées par chaque pays au cours des différentes éditions des Jeux Olympiques. Elle permet de mettre en évidence les pays les plus performants et de comprendre la distribution globale des succès olympiques.</p>
                    <MedalByCoutriesComponent />
                </div>
            </div>
        </>

    );
}

export default MedalByCountries;
