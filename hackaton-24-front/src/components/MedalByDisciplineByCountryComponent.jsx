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
            <div>
                <label for="select">Select Country : </label>
                <select name="select" onChange={handleCountryChange}>
                    {Object.entries(countries).map(([code, country]) => (
                        <option key={code} value={code} defaultValue={code === 'FRA'}>{country}</option>
                    ))}
                </select>
            </div>
            
            {data ? (
                <div>
                    <iframe srcDoc={data} style={{width: '50%', height: '1000px', marginInline: 'auto', border: 'none'}}/>
                </div>
            ) : (
                <div>Chargement...</div>
            )}
        </div>
    );
};

export default MedalByDisciplineByCountryComponent;
