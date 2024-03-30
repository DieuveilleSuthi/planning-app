import { StyleSheet } from "react-native";
import { endAsyncEvent } from "react-native/Libraries/Performance/Systrace";

export default StyleSheet.create(
    {
        container: {
            flex: 1,
            backgroundColor: "black",
        },
        textItem: {
            textAlign: 'center',
            color: "#282626",
            fontSize: 20,
            fontWeight: 'bold',
            marginLeft: 15
        },
        textItem2: {
            textAlign: 'center',
            color: "#282626",
            marginLeft: 15
        },
        image: {
            width: 350,
            height: 200,
            marginLeft: 20,
            borderRadius: 10
        },
        textContainer: {
            position: 'absolute',
            top: 10,
            left: 20
        },
        ButtonContainer: {
            position: 'absolute',
            top: 150,
            marginLeft: 210
        },
        btnName: {
            borderRadius: 10,
            padding: 10,
            backgroundColor: '#87CEEB'
        },
        TextPresentation: {
            padding: 10,
            backgroundColor: '#87CEEB',
            marginLeft: 20,
            borderRadius: 10,
            marginRight: 20,
            marginVertical: 20,
        },
        btnCreate: {
            borderRadius: 10,
            padding: 10,
            backgroundColor: '#87CEEB',
            alignItems: 'center',
            marginRight: 20,
            marginLeft: 20,
        }
        
    }
)