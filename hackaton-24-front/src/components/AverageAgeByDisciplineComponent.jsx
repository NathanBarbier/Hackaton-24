import React, { useState, useEffect } from "react";
import axios from 'axios';

const AverageAgeByDisciplineComponent = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        axios.get('https://hackaton-24.onrender.com/api/averageAgeByDiscipline')
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
                   <iframe srcDoc={data} style={{width: '100%', height: '500px', border: 'none'}}/>
              </div>

                // <div>
                //     <iframe srcDoc={data} style={{width: '100%', height: '500px', border: 'none'}}/>
                // </div>
            ) : (
                <div>Chargement...</div>
            )}
        </div>
    );
};

export default AverageAgeByDisciplineComponent;
