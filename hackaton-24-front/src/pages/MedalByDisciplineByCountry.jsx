import React from "react";

import MedalByDisciplineByCountryComponent from "../components/MedalByDisciplineByCountryComponent";
const MedalByDisciplineByCountry = () => {
    return (
        <>
            <div className="bg-gray-50 min-h-screen py-8">
                <div className="container mx-auto p-4">
                    <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">Répartition des Médailles par Discipline pour un Pays Spécifique</h1>
                    <p className="mb-8 text-lg text-gray-700 text-center max-w-3xl mx-auto">
                    Cette analyse examine la proportion de médailles remportées par un pays spécifique dans différentes disciplines sportives aux Jeux Olympiques. Elle permet de mettre en évidence les disciplines où le pays excelle et celles où il est moins performant.                    </p>
                    <MedalByDisciplineByCountryComponent />
                </div>
            </div>
        </>

    );
}

export default MedalByDisciplineByCountry;
