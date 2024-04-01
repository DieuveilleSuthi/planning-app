import React, { useState } from 'react';
import { View, Text, ScrollView, TextInput, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './CreatePlanningScreenCss';

const CreatePlanningScreen = () => {
    const navigation = useNavigation();
    const [activities, setActivities] = useState([{ id: 1 }]); 
    const handleAddActivity = () => {
        const newActivityId = activities.length + 1;
        setActivities([...activities, { id: newActivityId }]);
    };

    return (
        <ScrollView style={styles.container}>
             <View style={styles.textContent}>
                <Text style={styles.textItem}>Create your Planning</Text>
            </View>
            {activities.map((activity) => (
                <View key={activity.id}>
                    <View style={styles.textActivityContent}>
                        <Text style={styles.textActivityItem}>Activity {activity.id}</Text>
                    </View>
                    <View style={styles.DetailContent}>
                        <Text style={styles.DetailItem}> Date:</Text>
                        <TextInput style={styles.textInput}/>
                    </View>
                    <View style={styles.DetailContent}>
                        <Text style={styles.DetailItem}> Time:</Text>
                        <TextInput style={styles.textInput}/>
                    </View>
                    <View style={styles.DetailContent}>
                        <Text style={styles.DetailItem}> Activity Title:</Text>
                        <TextInput style={styles.textInput}/>
                    </View>
                    <View style={styles.DetailContent}>
                        <Text style={styles.DetailItem}> Description:</Text>
                        <TextInput style={styles.textInput}/>
                    </View>
                </View>
            ))}
            <View style={styles.btnContainer}>
                <Pressable style={styles.btnCreate} onPress={handleAddActivity}>
                    <Text> Add new activity </Text>
                </Pressable>
                <Pressable style={styles.btnCreate} onPress={() => navigation.navigate('Program')}>
                    <Text> Create </Text>
                </Pressable>
            </View>
        </ScrollView>
    );
};

export default CreatePlanningScreen;
