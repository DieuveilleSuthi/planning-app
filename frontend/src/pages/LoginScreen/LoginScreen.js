import React from "react";
import { View, Text, TextInput, Pressable } from "react-native";
import styles from './LoginScreenCss'

const LoginScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.textContent}>
                <Text style={styles.textItem}>Enter your email and your password</Text>
            </View>
            <View style={styles.DetailContent}>
                <Text style={styles.DetailItem}> email:</Text>
                <TextInput
                    style={styles.textInput}
                />
            </View>
            <View style={styles.DetailContent}>
                <Text style={styles.DetailItem}> password:</Text>
                <TextInput
                    style={styles.textInput}
                />
            </View>
            <View style={styles.btnContainer}>
                <Pressable style={styles.btnCreate}>
                    <Text>Login</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default LoginScreen;