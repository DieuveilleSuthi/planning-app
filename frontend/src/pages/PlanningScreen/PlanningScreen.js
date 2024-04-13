import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

const PlanningScreen = () => {
    const [plannings, setPlannings] = useState([]);

    useEffect(() => {
        fetch('http://10.245.120.127:3000/api/v1/planning', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log('Data from server:', data); // Affiche les données renvoyées par le serveur
            const planningsData = data.data.plannings; // Extrait les plannings de l'objet data
            setPlannings(planningsData);
        })
        .catch(error => {
            console.error('Error fetching plannings:', error);
        });
    }, []);
    
    

    return (
        <View>
            <Text>Liste des plannings :</Text>
            {plannings.map((planning, index) => (
                <View key={index}>
                    <Text>{planning.title}</Text>
                    <Text>{planning.date}</Text>
                    <Text>{planning.time}</Text>
                    <Text>{planning.description}</Text>
                    <Text>-------------------</Text>
                </View>
            ))}
        </View>
    );
};

export default PlanningScreen;
