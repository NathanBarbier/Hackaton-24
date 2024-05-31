import React from "react";

import Top10AthletesComponent from "../components/Top10AthletesComponent";
const Top10Athletes = () => {
    return (
        <>
            <div className="bg-gray-50 min-h-screen py-8">
                <div className="container mx-auto p-4">
                    <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">Athlètes ayant obtenus plus de 10 médailles</h1>
                    <p className="mb-8 text-lg text-gray-700 text-center max-w-3xl mx-auto">
                    Cette analyse se concentre sur les athlètes qui ont réussi à remporter plus de 10 médailles au cours de leur carrière olympique. Elle met en lumière les disciplines dans lesquelles ces athlètes ont excellé.                    </p>
                    <Top10AthletesComponent />
                </div>
            </div>
        </>

    );
}

export default Top10Athletes;
