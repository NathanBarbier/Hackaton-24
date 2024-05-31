import React from "react";
import { Link } from 'react-router-dom';
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
                    <Link to="/Prediction" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium" >
                        <div className="bg-white shadow-md border border-gray-200 p-6 rounded-lg transition-transform transform hover:scale-105">
                            <h2 className="text-xl font-semibold mb-2 text-gray-800">Predictions 2024</h2>
                            <p className="text-gray-600">Les predictions pour les jeux olympiques 2024</p>
                            <img src="/assets/Prédicition.png" alt="Description de l'image" className="w-full h-auto rounded-lg" />
                        </div>
                    </Link>

                    {/* Visualization 2 */}
                    <Link to="/AverageAgeByDiscipline" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"  >
                        <div className="bg-white shadow-md border border-gray-200 p-6 rounded-lg transition-transform transform hover:scale-105">
                            <h2 className="text-xl font-semibold mb-2 text-gray-800">Âge moyen par discipline</h2>
                            <p className="text-gray-600">L'Âge moyen par discipline des participants tout jeux olympiques confondus depuis 1896</p>
                            <img src="/assets/AverageAgeByDiscipline.png" alt="Description de l'image" className="w-full h-auto rounded-lg" />
                        </div>
                    </Link>

                    {/* Visualization 3 */}
                    <Link to="/GenderPerformanceByCountry" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"  >
                        <div className="bg-white shadow-md border border-gray-200 p-6 rounded-lg transition-transform transform hover:scale-105">
                            <h2 className="text-xl font-semibold mb-2 text-gray-800">Performance par genre et par pays</h2>
                            <p className="text-gray-600">Les performance par genre et par pays tout jeux olympiques confondus depuis 1896</p>
                            <img src="/assets/GenderPerformance.png" alt="Description de l'image" className="w-full h-auto rounded-lg" />
                        </div>
                    </Link>

                    {/* Visualization 4 */}
                    <Link to="/HostPerformance" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium" >
                        <div className="bg-white shadow-md border border-gray-200 p-6 rounded-lg transition-transform transform hover:scale-105">
                            <h2 className="text-xl font-semibold mb-2 text-gray-800">Performance des pays hôtes</h2>
                            <p className="text-gray-600">Les performance des pays hôtes tout jeux olympiques confondus depuis 1896</p>
                            <img src="/assets/HostPerformance.png" alt="Description de l'image" className="w-full h-auto rounded-lg" />
                        </div>
                    </Link>
                    {/* Visualization 5 */}
                    <Link to="/MedalByCoutries" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium" >
                        <div className="bg-white shadow-md border border-gray-200 p-6 rounded-lg transition-transform transform hover:scale-105">
                            <h2 className="text-xl font-semibold mb-2 text-gray-800">Médailles par pays</h2>
                            <p className="text-gray-600">Les médailles par pays tout jeux olympiques confondus depuis 1896</p>

                            <img src="/assets/MedalByCountry.png" alt="Description de l'image" className="w-full h-auto rounded-lg" />
                        </div>
                    </Link>
                    {/* Visualization 6 */}
                    <Link to="/MedalByCountriesByYear" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium" >
                        <div className="bg-white shadow-md border border-gray-200 p-6 rounded-lg transition-transform transform hover:scale-105">
                            <h2 className="text-xl font-semibold mb-2 text-gray-800">Médailles par pays par année</h2>
                            <p className="text-gray-600">Les médailles par pays par année tout jeux olympiques confondus depuis 1896</p>

                            <img src="/assets/MedalByCountriesByYear.png" alt="Description de l'image" className="w-full h-auto rounded-lg" />
                        </div>
                    </Link>
{/* Visualization 7 */}
<Link to="/MedalByDisciplineByCountry" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
    <div className="bg-white shadow-md border border-gray-200 p-6 rounded-lg transition-transform transform hover:scale-105">
        <h2 className="text-xl font-semibold mb-2 text-gray-800">Médailles par discipline par pays</h2>
        <p className="text-gray-600">Les médailles par discipline par pays tout jeux olympiques confondus depuis 1896</p>
        <img src="/assets/MedalByDisciplineByCountry.png" alt="Description de l'image" className="w-full h-auto max-w-4xl mx-auto rounded-lg" />
    </div>
</Link>

{/* Visualization 8 */}
<Link to="/Top10Athletes" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
    <div className="bg-white shadow-md border border-gray-200 p-6 rounded-lg transition-transform transform hover:scale-105">
        <h2 className="text-xl font-semibold mb-2 text-gray-800">Top Athlètes ayant plus de 10 médailles</h2>
        <p className="text-gray-600">Top Athlètes ayant plus de 10 médailles dans l'histoire des jeux olympiques depuis 1896</p>
        <img src="/assets/Top10Athletes.png" alt="Description de l'image" className="w-full h-auto max-w-4xl mx-auto rounded-lg" />
    </div>
</Link>

                </div>
            </div>
        </div>
    );
}

export default Home;
