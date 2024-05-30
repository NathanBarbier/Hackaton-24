import React, { useState, useEffect } from "react";
import axios from 'axios';

const MedalByCountriesByYearComponent = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        axios.get('https://hackaton-24.onrender.com/api/medalByCountriesByYear')
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error(error.message);
            });
    }, []);

    return (
        <div>
        {data ? (
                <div className="bg-white shadow-md border border-gray-200 p-6 rounded-lg transition-transform transform hover:scale-105">
                <iframe srcDoc={data} style={{width: '80%', height: '500px', marginInline: 'auto', border: 'none'}}/>
                </div>
            ) : (
                <h3>Chargement...</h3>
            )}
            </div>
    );
};

export default MedalByCountriesByYearComponent;
