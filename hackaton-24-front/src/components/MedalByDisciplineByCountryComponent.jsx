import React, { useState, useEffect } from "react";
import axios from 'axios';

const MedalByDisciplineByCountryComponent = () => {
    const [data, setData] = useState(null);
    const [countries, setCountries] = useState({});
    const [country, setCountry] = useState('FRA');

    useEffect(() => {
        axios.get('https://hackaton-24.onrender.com/api/medalByDisciplineByCountry?country=' + country)
            .then(response => {
                console.log(country)
                setData(response.data);
            })
            .catch(error => {
                console.log(country)
                console.error(error.message);
            });
    }, [country]);

    useEffect(() => {
        axios.get('https://hackaton-24.onrender.com/api/getCountries')
            .then(response => {
                setCountries(response.data);
            })
            .catch(error => {
                console.error(error.message);
            });
    }, []);

    const handleCountryChange = (event) => {
        setCountry(event.target.value);
    };

    return (
        <div>

            {data ? (
                <div className="bg-white shadow-md border border-gray-200 p-6 rounded-lg transition-transform transform hover:scale-105 ">
                    <div class="flex flex-col space-y-2">
                        <label for="select" class="text-sm font-medium text-gray-700">Selectionnez le pays : </label>
                        <select name="select" id="select" onChange={handleCountryChange} class="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
                            {Object.entries(countries).map(([code, country]) => (
                                <option key={code} value={code} selected={code === 'FRA'}>{country}</option>
                            ))}
                        </select>
                        <iframe srcDoc={data} style={{ width: '100%', height: '1000px', marginInline: 'auto', border: 'none' }} />
                    </div>
                </div>
            ) : (
                <div>Chargement...</div>
            )}
        </div>
    );
};

export default MedalByDisciplineByCountryComponent;
