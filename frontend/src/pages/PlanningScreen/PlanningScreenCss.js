import { StyleSheet } from "react-native";

export default StyleSheet.create(
    {
        container: {
            flex: 1,
            backgroundColor: "black",
        },
        textContent: {
            marginVertical: 10,
            alignItems: 'center'
        },
        textOne:{
            color: 'white',
            fontSize: 30,
            fontWeight: 'bold'
        },
        textItem: {
            color: 'black',
            fontSize: 15,
        },
        activityCard: {
            borderRadius: 10,
            padding: 10,
            width: '90%',
            backgroundColor: '#87CEEB',
            marginRight: 20,
            marginLeft: 20,
            marginVertical: 10
        },
        cardContent: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            flex: 1,
        },
        textStart: {
            flex: 1,
        },
        textEnd: {
            alignItems: 'flex-end',
        },
        textItem1: {
            color: 'gray',
        },
        textItem2: {
            color: 'gray',
        },
        textItem3: {
            color: 'red',
        }
    }
)