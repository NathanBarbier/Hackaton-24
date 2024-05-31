import React from "react";
import PredictionByCountryComponent from "../components/PredictionByCountryComponent";
import PredictionComponent from "../components/PredictionComponent";
import PredictionTopComponent from "../components/PredictionTopComponent";
const Prediction = () => {
    return (
        <>
            <div className="bg-gray-50 min-h-screen py-8">
            <div className="container mx-auto p-4">
                    <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">Prédictions des médailles remportés pour le pays de votre choix aux Jeux Olympiques</h1>
                    <p className="mb-8 text-lg text-gray-700 text-center max-w-3xl mx-auto">
                    Prédictions des médailles remportés pour le pays de votre choix aux Jeux Olympiques</p>
                    <PredictionByCountryComponent />
                </div>
                <div className="container mx-auto p-4">
                    <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">Prédictions des médailles remportés pour chaque pays aux Jeux Olympiques</h1>
                    <p className="mb-8 text-lg text-gray-700 text-center max-w-3xl mx-auto">
                    Prédictions des médailles remportés pour tous les pays aux Jeux Olympiques</p>
                    <PredictionComponent />
                </div>
                <div className="container mx-auto p-4">
                    <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">Top prédictions des médailles remportés pour chaque pays aux Jeux Olympiques</h1>
                    <p className="mb-8 text-lg text-gray-700 text-center max-w-3xl mx-auto">
                    Top prédictions des médailles remportés pour tous les pays aux Jeux Olympiques</p>
                    <PredictionTopComponent />
                </div>
            </div>
        </>

    );
}

export default Prediction;
