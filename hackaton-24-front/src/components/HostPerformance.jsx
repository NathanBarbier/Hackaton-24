import React, { useState, useEffect } from "react";
import axios from 'axios';

const HostPerformance = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        axios.get('http://127.0.0.1:8080/api/hostPerformance')
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

export default HostPerformance;
