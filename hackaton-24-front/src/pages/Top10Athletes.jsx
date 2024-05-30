import React from "react";

import Top10AthletesComponent from "../components/Top10AthletesComponent";
const Top10Athletes = () => {
    return (
        <>
<div className="bg-gray-50 min-h-screen py-8">
<div className="container mx-auto p-4">
                <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">Jeux Olympiques de Paris</h1>
                <p className="mb-8 text-lg text-gray-700 text-center max-w-3xl mx-auto">
                    Bienvenue sur notre site dédié aux Jeux Olympiques de Paris ! Ce projet vise à fournir des visualisations interactives et informatives sur les performances des pays participants aux Jeux Olympiques depuis 1896. Explorez l'historique des médailles, les tendances, et les moments marquants des Jeux Olympiques à travers nos visualisations de données.
                </p>
                <Top10AthletesComponent />
            </div>
            </div> 
        </>
        
    );
}

export default Top10Athletes;
