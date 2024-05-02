import React, { useState } from "react";
import { View, Text, TextInput, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './RegisterScreenCss'

const RegisterScreen = () => {
    const navigation = useNavigation();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleLoginPress = async () => {
        setErrorMessage('');

        if (!username || !email || !password) {
            setErrorMessage('Veuillez saisir tous les champs!');
            return;
        }

        try {
            const response = await fetch('http://10.188.120.127:3000/api/v1/user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, email, password })
            });

            if (!response.ok) {
                setErrorMessage('Email ou mot de passe incorrect.');
                return;
            }

            const responseData = await response.json();
            const token = responseData.token;

            await AsyncStorage.setItem('token', token);

            navigation.navigate('Main');
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.textContent}>
                <Text style={styles.textItem}>Enter your username, email and your password</Text>
            </View>
            <View style={styles.textContent}>
                <Text style={styles.textError}>{errorMessage}</Text>
            </View>
            <View style={styles.DetailContent}>
                <Text style={styles.DetailItem}> username:</Text>
                <TextInput
                    style={styles.textInput}
                    value={username}
                    onChangeText={setUsername}
                />
            </View>
            <View style={styles.DetailContent}>
                <Text style={styles.DetailItem}> email:</Text>
                <TextInput
                    style={styles.textInput}
                    value={email}
                    onChangeText={setEmail}
                />
            </View>
            <View style={styles.DetailContent}>
                <Text style={styles.DetailItem}> password:</Text>
                <TextInput
                    style={styles.textInput}
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={true}
                />
            </View>
            <View style={styles.btnContainer}>
                <Pressable style={styles.btnCreate} onPress={handleLoginPress}>
                    <Text>Register</Text>
                </Pressable>
            </View>
            <View style={styles.registerCo}>
                <Text style={{color: 'white'}}>Vous déjà un compte?</Text>
                <Pressable onPress={() => navigation.navigate('Login')} style={styles.click}>
                    <Text style={{color: 'white'}}> Connectez vous</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default RegisterScreen;
