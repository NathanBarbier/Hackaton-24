import React from "react";

const Home = () => {
    
    return (
        <div className="bg-gray-50 min-h-screen py-8">
            <div className="container mx-auto p-4">
                <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">Jeux Olympiques de Paris</h1>
                <p className="mb-8 text-lg text-gray-700 text-center max-w-3xl mx-auto">
                    Bienvenue sur notre site dédié aux Jeux Olympiques de Paris ! Ce projet vise à fournir des visualisations interactives et informatives sur les performances des pays participants aux Jeux Olympiques depuis 1896. Explorez l'historique des médailles, les tendances, et les moments marquants des Jeux Olympiques à travers nos visualisations de données.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Visualization 1 */}
                    <div className="bg-white shadow-md border border-gray-200 p-6 rounded-lg transition-transform transform hover:scale-105">
                        <h2 className="text-xl font-semibold mb-2 text-gray-800">Visualisation 1</h2>
                        <p className="text-gray-600">This is a placeholder for the first data visualization.</p>
                    </div>

                    {/* Visualization 2 */}
                    <div className="bg-white shadow-md border border-gray-200 p-6 rounded-lg transition-transform transform hover:scale-105">
                        <h2 className="text-xl font-semibold mb-2 text-gray-800">Visualisation 2</h2>
                        <p className="text-gray-600">This is a placeholder for the second data visualization.</p>
                    </div>

                    {/* Visualization 3 */}
                    <div className="bg-white shadow-md border border-gray-200 p-6 rounded-lg transition-transform transform hover:scale-105">
                        <h2 className="text-xl font-semibold mb-2 text-gray-800">Visualisation 3</h2>
                        <p className="text-gray-600">This is a placeholder for the third data visualization.</p>
                    </div>

                    {/* Visualization 4 */}
                    <div className="bg-white shadow-md border border-gray-200 p-6 rounded-lg transition-transform transform hover:scale-105">
                        <h2 className="text-xl font-semibold mb-2 text-gray-800">Visualisation 4</h2>
                        <p className="text-gray-600">This is a placeholder for the fourth data visualization.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
