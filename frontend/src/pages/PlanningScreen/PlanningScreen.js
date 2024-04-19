import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';

const PlanningScreen = () => {
    const [plannings, setPlannings] = useState([]);

    useFocusEffect(
        useCallback(() => {
            const fetchPlannings = async () => {
                try {
                    const token = await AsyncStorage.getItem('token');
                    if (token) {
                        const response = await fetch('http://10.101.6.7:3000/api/v1/planning', {
                            method: 'GET',
                            headers: {
                                'Content-Type': 'application/json',
                                'Authorization': `Bearer ${token}`
                            }
                        });
                        if (!response.ok) {
                            throw new Error('Failed to fetch plannings');
                        }
                        const data = await response.json();
                        const planningsData = data.data.plannings;
                        setPlannings(planningsData);
                    } else {
                        console.error('No token found in AsyncStorage');
                    }
                } catch (error) {
                    console.error('Error:', error);
                }
            };

            fetchPlannings();

            return () => {
                // Cleanup function if needed
            };
        }, [])
    );

    return (
        <ScrollView>
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
        </ScrollView>
    );
};

export default PlanningScreen;
