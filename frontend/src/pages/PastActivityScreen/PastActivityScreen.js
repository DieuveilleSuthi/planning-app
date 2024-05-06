import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, ScrollView, Pressable } from 'react-native';
import styles from './PastActivityScreenCss';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

const PastActivityScreen = () => {
    const navigation = useNavigation()
    const [plannings, setPlannings] = useState([]);

    useFocusEffect(
        useCallback(() => {
            const fetchPlannings = async () => {
                try {
                    const token = await AsyncStorage.getItem('token');
                    const userId = await AsyncStorage.getItem('userId');
                    if (token) {
                        const response = await fetch('http://10.245.120.127:3000/api/v1/planning', {
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
                        const planningsData = data.data.plannings.filter(planning => new Date(planning.date.split('T')[0]) < new Date());
                        const planningDataSortedByUserId = planningsData.filter(planning => planning.userId === userId);
                        setPlannings(planningDataSortedByUserId);
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

    const groupedPlannings = plannings.reduce((grouped, planning) => {
        const dateKey = planning.date.split('T')[0];
        if (!grouped[dateKey]) {
            grouped[dateKey] = [];
        }
        grouped[dateKey].push(planning);
        return grouped;
    }, {});

    const sortedDates = Object.keys(groupedPlannings).sort((a, b) => new Date(a) - new Date(b));

    return (
        <ScrollView style={styles.container}>
            <View style={styles.textContent}>
                <Text style={styles.textOne}>Your Past Activity:</Text>
            </View>
            {plannings.length === 0 ? (
                <Text style={styles.noActivityText}>You have no past activity yet</Text>
            ) : (
                sortedDates.map((date, index) => (
                    <View key={index}>
                        <View style={styles.dateHeader}>
                            <Text style={styles.dateHeaderText}>
                                {new Date(date).toLocaleDateString('en-GB', {
                                    weekday: 'long',
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                })}
                            </Text>
                        </View>
                        {groupedPlannings[date].map((planning, idx) => (
                            <Pressable key={idx} style={styles.activityCard} onPress={()=> navigation.navigate('ActivityDescription')}>
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
                            </Pressable>
                        ))}
                    </View>
                ))
            )}
        </ScrollView>
    );
};

export default PastActivityScreen;
