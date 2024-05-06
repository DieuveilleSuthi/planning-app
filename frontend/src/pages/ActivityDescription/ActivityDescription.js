import React, { useState, useCallback } from 'react';
import { View, ScrollView, Text, Pressable, Image, Modal, TextInput } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './ActivityDescriptionCss';

const ActivityDescription = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [activityDetails, setActivityDetails] = useState([]);

    useFocusEffect(
        useCallback(() => {
            const fetchActivityDetails = async () => {
                try {
                    const token = await AsyncStorage.getItem('token');
                    const activityId = await AsyncStorage.getItem('activityId');
                    if (token) {
                        const response = await fetch(`http://10.245.120.127:3000/api/v1/planning/${activityId}`, {
                            method: 'GET',
                            headers: {
                                'Content-Type': 'application/json',
                                'Authorization': `Bearer ${token}`
                            }
                        });
                        if (!response.ok) {
                            throw new Error('Failed to fetch activity details');
                        }
                        const data = await response.json();
                        const activityData = data.data.planning;
                        console.log(activityData);
                        setActivityDetails(activityData);
                    } else {
                        console.error('No token found in AsyncStorage');
                    }
                } catch (error) {
                    console.error('Error:', error);
                }
            };

            fetchActivityDetails();

        }, [])
    );


    return (
        <ScrollView style={styles.container}>
            <Image source={{ uri: "https://www.thelinkottawa.ca/en/eat-right-be-active/resources/Images/running-1065.jpg" }} style={styles.image} />
            <View style={styles.blocRow}>
                <View>
                    <Text style={{color: 'white'}}>{activityDetails.title}</Text>
                </View>
                <View>
                    <Text style={{color: 'white'}}>
                        {activityDetails && activityDetails.date && new Date(activityDetails.date.split('T')[0]).toLocaleDateString('en-GB', {
                            weekday: 'long',
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                        })}
                    </Text>
                </View>
            </View>
            <View>
                <Text style={{color: 'red', marginLeft: 20, marginVertical: 20}}>{activityDetails.time}</Text>
            </View>
            <View style={styles.description}>
                <View style={styles.blocRow}>
                    <View>
                        <Text style={{color: '#87CEEB'}}>Note</Text>
                    </View>
                    <View>
                        <Pressable style={styles.click} onPress={() => setModalVisible(true)}>
                             <Text style={{color: 'white'}}>Modify your note</Text>
                        </Pressable>
                    </View>
                </View>
                <Text>{activityDetails.description}</Text>
            </View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Modify your note</Text>
                        <TextInput 
                            style={styles.textInput}
                            placeholder='Modify your note/description here'
                        />
                        <Pressable
                            style={styles.button}
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            <Text style={styles.textStyle}>Close</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
        </ScrollView>
    )
}

export default ActivityDescription;
