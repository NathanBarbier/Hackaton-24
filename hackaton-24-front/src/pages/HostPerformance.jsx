import React from "react";

import HostPerformanceComponent from "../components/HostPerformanceComponent";
const HostPerformance = () => {
    return (
        <>
            <div className="bg-gray-50 min-h-screen py-8">
                <div className="container mx-auto p-4">
                    <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">Impact de l'Organisation des Jeux Olympiques sur la Performance des Pays Hôtes</h1>
                    <p className="mb-8 text-lg text-gray-700 text-center max-w-3xl mx-auto">
                    Cette analyse explore comment l'organisation des Jeux Olympiques influence la performance des pays hôtes en termes de médailles remportées. Elle examine si le fait d'accueillir les Jeux offre un avantage significatif en termes de succès sportif.</p>
                    <HostPerformanceComponent />
                </div>
            </div>
        </>

    );
}

export default HostPerformance;
