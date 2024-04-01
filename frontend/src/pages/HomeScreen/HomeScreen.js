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
                <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac tortor vel risus dictum euismod. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nullam ut nisi euismod, pulvinar odio nec, aliquet arcu. Sed ac ex eu magna fermentum euismod vel a felis. Proin nec neque quis risus placerat laoreet. Nullam non mauris nec nisi sodales fermentum vel nec tellus. Vivamus sagittis tortor eget dolor vehicula, in mollis nulla feugiat. Ut nec urna a libero elementum blandit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed eget gravida justo, sit amet euismod sapien. Donec id ante quis elit cursus interdum. Suspendisse lacinia ante nunc, et maximus libero varius sed. Vivamus id turpis id velit bibendum sodales non eget ex. Cras ultricies, lacus quis lobortis rhoncus, justo elit venenatis felis, in fringilla mauris odio et justo. Sed fringilla, felis eget tristique congue, nibh ipsum gravida tortor, nec varius risus risus vel dui. </Text>
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
