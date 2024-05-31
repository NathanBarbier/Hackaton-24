import React, { useState, useEffect } from "react";
import axios from 'axios';

const PredictionByCountryComponent = () => {
    const [data, setData] = useState(null);
    const [countryName, setCountryName] = useState('France'); // Défaut: France (FRA)
    const [countries, setCountries] = useState([]); // Pour stocker la liste des pays

    useEffect(() => {
        axios.get('https://hackaton-24.onrender.com/api/hosts')
            .then(response => {
                setCountries(response.data);
            })
            .catch(error => {
                console.error("Error fetching countries:", error.message);
            });
            // axios.get(`http://127.0.0.1:8080/api/predictionsByCountry?country_name=${countryName}`)
        axios.get(`https://hackaton-24.onrender.com/api/predictionsByCountry?country_name=${countryName}`)
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error(error.message);
            });
    }, [countryName]);
    const handleCountryCodeChange = (e) => {
        setCountryName(e.target.value); // Met à jour le code pays sélectionné
    };
    return (
        <div>

            {data ? (
                <div className="bg-white shadow-md border border-gray-200 p-6 rounded-lg transition-transform transform hover:scale-105">
                    <div class="flex flex-col space-y-2">
                        <label for="select" class="text-sm font-medium text-gray-700">Sélectionner le nom du pays :</label>
                        <select name="select" id="select" value={countryName} onChange={handleCountryCodeChange} className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
                            {countries.map((country) => (
                                <option key={country.country_code} value={country.country_name}>
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

export default PredictionByCountryComponent;
