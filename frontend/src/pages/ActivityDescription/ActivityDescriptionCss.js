import { version } from "react";
import { StyleSheet } from "react-native";

export default StyleSheet.create(
    {
        container: {
            flex: 1,
            backgroundColor: "black",
        }, 
        image: {
            height: 300,
            marginVertical: 10
        },
        blocRow: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginRight: 20,
            marginLeft: 20,
            marginVertical: 20
        },
        click:{
            borderRadius: 10,
            padding: 10,
            backgroundColor: '#87CEEB',
            alignItems: 'center',
            marginLeft: 5,
            alignSelf: 'center'
        },
        description: {
            padding: 10,
            marginLeft: 10,
            marginRight: 10,
            backgroundColor: 'white'
        },
        centeredView: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 22,
        },
        modalView: {
            margin: 20,
            backgroundColor: 'white',
            borderRadius: 20,
            padding: 35,
            alignItems: 'center',
            shadowColor: '#000',
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 4,
            elevation: 5,
        },
        button: {
            borderRadius: 10,
            padding: 10,
            backgroundColor: '#87CEEB',
            alignItems: 'center',
            marginLeft: 5,
            alignSelf: 'center'
        },
        buttonOpen: {
            backgroundColor: '#F194FF',
        },
        textStyle: {
            color: 'white',
            fontWeight: 'bold',
            textAlign: 'center',
        },
        modalText: {
            marginBottom: 15,
            textAlign: 'center',
        },
        textInput: {
            borderTopWidth: 1, 
            borderTopColor:'#87CEEB',
            borderLeftWidth: 1, 
            borderLeftColor:'#87CEEB',
            borderRightWidth: 1, 
            borderRightColor:'#87CEEB',
            borderBottomWidth: 1, 
            borderBottomColor: '#87CEEB', 
            fontSize: 16, 
            marginVertical: 10

        },
    }
)