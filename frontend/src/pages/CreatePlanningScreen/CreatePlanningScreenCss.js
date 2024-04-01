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
        textActivityContent: {
            marginLeft: 20
        },
        textActivityItem: {
            color: '#87CEEB',
            fontSize: 20,
            fontWeight: 'bold'
        },
        textItem: {
            color: 'white',
            fontSize: 30,
            fontWeight: 'bold'
        },
        DetailContent: {
            marginVertical: 10,
            marginLeft: 20
        },
        DetailContentDate: {
            marginVertical: 10,
            marginLeft: 20,
            marginRight: 20
        },
        DetailItem: {
            color: 'white',
            fontSize: 20
        },
        textInput: {
            flex: 1,
            borderBottomWidth: 1, 
            borderBottomColor: 'white', 
            color: 'white', 
            fontSize: 16, 
            paddingVertical: 5, 
            marginLeft: 10,
            marginRight: 25
        },
        textInputDate: {
            backgroundColor: '#87CEEB',
        },
        btnCreate: {
            borderRadius: 10,
            padding: 10,
            width: '40%',
            backgroundColor: '#87CEEB',
            alignItems: 'center',
            marginRight: 20,
            marginLeft: 20,
        },
        btnContainer: {
            flexDirection: 'row',
            marginBottom: 100,
            marginVertical: 50,
        }
    }
)