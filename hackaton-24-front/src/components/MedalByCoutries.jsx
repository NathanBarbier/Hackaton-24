import React, { useState, useEffect } from "react";
import axios from 'axios';

const MedalByCoutries = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        axios.get('https://hackaton-24.onrender.com/api/medalByCountries')
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
                <div>
                    <iframe srcDoc={data} style={{width: '100%', height: '500px', border: 'none'}}/>
                </div>
            ) : (
                <div>Chargement...</div>
            )}
        </div>
    );
};

export default MedalByCoutries;
