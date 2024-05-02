import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from './PlanningScreenCss';
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
                        const response = await fetch('http://10.188.120.127:3000/api/v1/planning', {
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
                        const planningsData = data.data.plannings.filter(planning => new Date(planning.date.split('T')[0]) >= new Date());
                        setPlannings(planningsData);
                    } else {
                        console.error('No token found in AsyncStorage');
                    }
                } catch (error) {
                    console.error('Error:', error);
                }
            };

            fetchPlannings();

        }, [])
    );

    return (
        <ScrollView style={styles.container}>
            <View style={styles.textContent}>
                <Text style={styles.textOne}>Your Planning:</Text>
            </View>
            {plannings.map((planning, index) => (
                <View key={index} style={styles.activityCard}>
                    <View style={styles.cardContent}>
                        <View style={styles.textStart}>
                            <Text style={styles.textItem1}>{planning.title}</Text>
                            <Text style={styles.textItem}>{planning.description}</Text>
                        </View>
                        <View style={styles.textEnd}>
                            <Text style={styles.textItem2}>{planning.date.split('T')[0]}</Text>
                            <Text style={styles.textItem3}>{planning.time}</Text>
                        </View>
                    </View>
                </View>
            ))}
        </ScrollView>
    );
};

export default PlanningScreen;
