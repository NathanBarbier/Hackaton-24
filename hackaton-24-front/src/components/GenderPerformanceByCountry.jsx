import React, { useState, useEffect } from "react";
import axios from 'axios';

const GenderPerformanceByCountry = () => {
    const [data, setData] = useState(null);
    const [countryCode, setCountryCode] = useState('FRA'); // Défaut: France (FRA)
    const [countries, setCountries] = useState([]); // Pour stocker la liste des pays
    useEffect(() => {
            // Obtenir la liste des pays
            axios.get('http://127.0.0.1:8080/api/hosts')
            .then(response => {
                setCountries(response.data);
            })
            .catch(error => {
                console.error("Error fetching countries:", error.message);
            });
        axios.get(`http://127.0.0.1:8080/api/genderPerformanceByCountry?country_code=${countryCode}`)
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
            <div>
                <label htmlFor="countryCode">Sélectionner le code pays :</label>
                <select id="countryCode" value={countryCode} onChange={handleCountryCodeChange}>
                    {countries.map((country) => (
                        <option key={country.country_code} value={country.country_code}>
                            {country.country_name}
                        </option>
                    ))}
                </select>
            </div>
            
            {data ? (
                <div>
                    <iframe srcDoc={data} style={{width: '100%', height: '500px', border: 'none'}}/>
                </div>
            ) : (
                <div>Chargement...</div>
            )}
        </div>
    );
};

export default GenderPerformanceByCountry;
