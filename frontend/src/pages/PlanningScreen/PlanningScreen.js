import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const PlanningScreen = () => {
    const [plannings, setPlannings] = useState([]);

    useEffect(() => {
        // Fonction asynchrone pour récupérer le token d'AsyncStorage
        const getToken = async () => {
            try {
                const token = await AsyncStorage.getItem('token');
                if (token) {
                    // Envoyer la requête avec le token dans les en-têtes
                    fetch('http://10.3.218.6:3000/api/v1/planning', {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${token}` // Ajouter le token dans les en-têtes
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
                } else {
                    console.error('No token found in AsyncStorage');
                }
            } catch (error) {
                console.error('Error:', error);
            }
        };

        // Appeler la fonction pour récupérer le token
        getToken();
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
