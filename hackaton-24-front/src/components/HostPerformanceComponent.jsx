import React, { useState, useEffect } from "react";
import axios from 'axios';

const HostPerformanceComponent = () => {
    const [data, setData] = useState(null);
    const [countryCode, setCountryCode] = useState('FRA'); // Défaut: France (FRA)
    const [countries, setCountries] = useState([]); // Pour stocker la liste des pays

    useEffect(() => {
        // Obtenir la liste des pays
        axios.get('https://hackaton-24.onrender.com/api/hosts')
            .then(response => {
                setCountries(response.data);
            })
            .catch(error => {
                console.error("Error fetching countries:", error.message);
            });

        // Obtenir les performances de l'hôte
        axios.get(`https://hackaton-24.onrender.com/api/hostPerformance?country_code=${countryCode}`)
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error(error.message);
            });
    }, [countryCode]);

    const handleCountryCodeChange = (e) => {
        setCountryCode(e.target.value); // Met à jour le code pays sélectionné
    };

    return (
        <div>


            {data ? (
                <div className="bg-white shadow-md border border-gray-200 p-6 rounded-lg transition-transform transform hover:scale-105">
                    <div class="flex flex-col space-y-2">
                        <label for="select" class="text-sm font-medium text-gray-700">Sélectionner le code pays :</label>
                        <select name="select" id="select" value={countryCode} onChange={handleCountryCodeChange} class="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
                            {countries.map((country) => (
                                <option key={country.country_code} value={country.country_code}>
                                    {country.country_name}
                                </option>
                            ))}
                        </select>
                        <iframe srcDoc={data} style={{ width: '100%', height: '500px', border: 'none' }} />
                    </div>
                </div>
            ) : (
                <div>Chargement...</div>
            )}
        </div>
    );
};

export default HostPerformanceComponent;
