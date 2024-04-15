import React, { useState } from "react";
import { View, Text, TextInput, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './LoginScreenCss'

const LoginScreen = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleLoginPress = async () => {
        try {
            const response = await fetch('http://10.3.218.6:3000/api/v1/user/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });
    
            if (!email || !password) {
                setErrorMessage('Veillez saisir tous les champs!');
                return;
            }
    
            // Gérer la réponse de votre backend
            if (response.ok) {
                const responseData = await response.json();
                const token = responseData.token;
    
                await AsyncStorage.setItem('token', token);
    
                navigation.navigate('Main');
            } else {
                setErrorMessage('Email ou mot de passe incorrect.');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };
    
    

    return (
        <View style={styles.container}>
            <View style={styles.textContent}>
                <Text style={styles.textItem}>Enter your email and your password</Text>
            </View>
            <View style={styles.textContent}>
                <Text style={styles.textError}>{errorMessage}</Text>
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
                    <Text>Login</Text>
                </Pressable>
            </View>
            <View>
                <Text style={{color: 'white'}}>Vous avez pas de compte?</Text>
                <Pressable onPress={() => navigation.navigate('Register')}>
                    <Text style={{color: 'white'}}>Cliquez ici</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default LoginScreen;
