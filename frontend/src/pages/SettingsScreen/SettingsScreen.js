import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Importez AsyncStorage
import styles from './SettingsScreenCss';

const SettingsScreen = () => {
    const navigation = useNavigation();

    const handleLogout = async () => {
        try {
            await AsyncStorage.clear();
            navigation.navigate('Login');
        } catch (error) {
            console.error('Error clearing AsyncStorage:', error);
        }
    };

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.textOne}>Settings</Text>
            </View>
            <View style={styles.btnContainer}>
                <Pressable style={styles.btnLogout} onPress={handleLogout}>
                    <Text> Logout </Text>
                </Pressable>
            </View>
        </View>
    );
};

export default SettingsScreen;
