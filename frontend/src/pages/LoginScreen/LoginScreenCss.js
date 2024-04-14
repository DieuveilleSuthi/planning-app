import { StyleSheet } from "react-native";

export default StyleSheet.create(
    {
        container: {
            flex: 1,
            backgroundColor: "black",
        },
        textContent: {
            marginVertical: 20,
            alignItems: 'center'
        },
        textItem: {
            color: 'white',
            fontSize: 20,
            fontWeight: 'bold'
        },
        DetailContent: {
            marginVertical: 10,
            marginLeft: 20
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
            paddingVertical: 20, 
            marginLeft: 10,
            marginRight: 25
        },
        btnCreate: {
            borderRadius: 10,
            padding: 10,
            width: '90%',
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