import React from 'react';
import {View, Text} from 'react-native';

import styles from './HomeScreenCss.js'

const HomeScreen = () => {
    return (
        <View style= {styles.container}>
            <View>
                <Text style={styles.textItem}>HomeScreen</Text>
            </View>
        </View>
    )
}

export default HomeScreen;