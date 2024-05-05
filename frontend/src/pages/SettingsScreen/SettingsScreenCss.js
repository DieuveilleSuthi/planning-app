import { StyleSheet } from "react-native";

export default StyleSheet.create(
    {
        container: {
            flex: 1,
            backgroundColor: "black",
        },
        textOne:{
            color: 'white',
            fontSize: 30,
            fontWeight: 'bold',
            textAlign: 'center'
        },
        btnContainer:{
            marginVertical: '50%',
        },
        btnLogout: {
            borderRadius: 10,
            padding: 10,
            backgroundColor: '#87CEEB',
            alignItems: 'center',
            marginRight: 20,
            marginLeft: 20,
        }
    }
)