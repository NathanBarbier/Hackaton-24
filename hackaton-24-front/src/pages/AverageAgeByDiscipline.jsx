import React from "react";

import AverageAgeByDisciplineComponent from "../components/AverageAgeByDisciplineComponent";
const AverageAgeByDiscipline = () => {
    return (
        <>
            <div className="bg-gray-50 min-h-screen py-8">
                <div className="container mx-auto p-4">
                    <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">Âge Moyen des Médaillés par Discipline aux Jeux Olympiques</h1>
                    <p className="mb-8 text-lg text-gray-700 text-center max-w-3xl mx-auto">
                    Cette analyse examine l'âge moyen des athlètes médaillés dans différentes disciplines sportives aux Jeux Olympiques. Elle permet de mettre en lumière les variations d'âge parmi les disciplines et d'identifier les sports où les athlètes sont généralement plus jeunes ou plus âgés lorsqu'ils remportent des médailles.                    </p>
                    <AverageAgeByDisciplineComponent />
                </div>

            </div>
        </>

    );
}

export default AverageAgeByDiscipline;
