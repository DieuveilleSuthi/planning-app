import React, { useState } from 'react';
import { View, ScrollView, Text, Pressable, Image, Modal, TextInput } from 'react-native';
import styles from './ActivityDescriptionCss'

const ActivityDescription = () => {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <ScrollView style={styles.container}>
            <Image source={{ uri: "https://www.thelinkottawa.ca/en/eat-right-be-active/resources/Images/running-1065.jpg" }} style={styles.image} />
            <View style={styles.blocRow}>
                <View>
                    <Text style={{color: 'white'}}>Title</Text>
                </View>
                <View>
                    <Text style={{color: 'white'}}>Date</Text>
                </View>
            </View>
            <View>
                <Text style={{color: 'red', marginLeft: 20, marginVertical: 20}}>Hour</Text>
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
                <Text>Description</Text>
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
