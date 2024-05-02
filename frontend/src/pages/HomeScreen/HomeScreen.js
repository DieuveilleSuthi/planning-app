import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, ScrollView, Image, Text, Pressable } from 'react-native';

import styles from './HomeScreenCss.js';

const HomeScreen = () => {
    const navigation = useNavigation();
    return (
        <ScrollView style={styles.container}>
            <View>
                <Image source={{ uri: "https://www.thelinkottawa.ca/en/eat-right-be-active/resources/Images/running-1065.jpg" }} style={styles.image} />
                <View style={styles.textContainer}>
                    <Text style={styles.textItem}>Next activity</Text>
                    <Text style={styles.textItem2}> Aujourd'hui à 12h</Text>
                </View>
                <View style={styles.ButtonContainer}>
                    <Pressable style={styles.btnName}>
                        <Text>Nom de l'activité</Text>
                    </Pressable>
                </View>
            </View>
            <View style={styles.TextPresentation}>
                <Text style={styles.textSep}>Welcome to PlanningApp, the ultimate planning solution designed to streamline your daily, weekly, and monthly schedules with effortless efficiency. Say goodbye to chaos and hello to organization as you harness the power of our intuitive planning tools.</Text>
                <Text style={styles.textSep}>With PlanningApp, planning has never been easier. Whether you're managing work deadlines, school assignments, or personal engagements, our user-friendly interface empowers you to create, edit, and organize your schedule with just a few taps.</Text>
                <Text style={styles.textSep}>We understand that every individual has unique scheduling needs. That's why PlanningApp offers unparalleled flexibility, allowing you to customize your planner to suit your specific requirements. From recurring events to one-time appointments, our app adapts to your lifestyle seamlessly.</Text>
            </View>
            <View>
                <Pressable style={styles.btnCreate} onPress={() => navigation.navigate('CreatePlanning')}>
                    <Text> Create or Modify your planning</Text>
                </Pressable>
            </View>
        </ScrollView>
    )
}

export default HomeScreen;
