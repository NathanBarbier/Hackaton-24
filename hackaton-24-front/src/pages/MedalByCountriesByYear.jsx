import React from "react";

import MedalByCountriesByYearComponent from "../components/MedalByCountriesByYearComponent";
const MedalByCountriesByYear = () => {
    return (
        <>
            <div className="bg-gray-50 min-h-screen py-8">
                <div className="container mx-auto p-4">
                    <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">Évolution des Médailles Olympiques par Pays au Fil des Années </h1>
                    <p className="mb-8 text-lg text-gray-700 text-center max-w-3xl mx-auto">
                        L'analyse de l'évolution du nombre de médailles par pays au fil du temps vise à visualiser les performances des pays aux Jeux Olympiques à travers les différentes éditions. En traçant le nombre de médailles remportées par chaque pays pour chaque année olympique, cette analyse permet de détecter les tendances et les changements dans les performances sportives nationales.                </p>
                    <MedalByCountriesByYearComponent />
                </div>
                <div>
                    <p className="mb-8 text-lg text-gray-700 text-center max-w-3xl mx-auto"> </p>
                </div>
            </div>
        </>

    );
}

export default MedalByCountriesByYear;
