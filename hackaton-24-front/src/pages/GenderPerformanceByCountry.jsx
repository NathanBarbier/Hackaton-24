import React from "react";

import GenderPerformanceByCountryComponent from "../components/GenderPerformanceByCountryComponent";
const GenderPerformanceByCountry = () => {
    return (
        <>
            <div className="bg-gray-50 min-h-screen py-8">
                <div className="container mx-auto p-4">
                    <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">Comparaison des Performances des Athlètes Féminines et Masculines par Pays</h1>
                    <p className="mb-8 text-lg text-gray-700 text-center max-w-3xl mx-auto">
                    Cette analyse compare les performances des athlètes féminines et masculines de différents pays aux Jeux Olympiques. Elle met en lumière les pays où les athlètes de chaque genre ont particulièrement excellé et permet de voir les contributions respectives des hommes et des femmes aux succès olympiques de leurs nations.                    </p>
                    <GenderPerformanceByCountryComponent />
                </div>
            </div>
        </>

    );
}

export default GenderPerformanceByCountry;
