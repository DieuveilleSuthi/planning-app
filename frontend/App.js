import { SafeAreaView, StatusBar, Text, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './src/pages/HomeScreen/HomeScreen';
import MessageScreen from './src/pages/MesaageScreen/MessageScreen';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import PlanningScreen from './src/pages/PlanningScreen/PlanningScreen';
import SettingsScreen from './src/pages/SettingsScreen/SettingsScreen';


const Tab = createBottomTabNavigator();
const screenOptions = {
  headerShown: false,
  tabBarStyle: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: 60,
    backgroundColor: "#282626"
  }
}
export default function App() {
  return (
    <View style={{ flex: 1}}>
      <SafeAreaView style={{ flex: 1}}>
        <StatusBar style="light" backgroundColor="black" />
        <NavigationContainer>
          <Tab.Navigator screenOptions={screenOptions}>
            <Tab.Screen 
              name='Home' 
              component={HomeScreen}
              options={{
                tabBarIcon: ({focused}) => {
                  return (
                    <View style={{alignItems: "center", justifyContent: "center"}}>
                      <Entypo name="home" size={24} color={focused? "#87CEEB": "grey"} />
                    </View>
                  )
                }
              }} 
            />
            <Tab.Screen 
              name='Program' 
              component={PlanningScreen}
              options={{
                tabBarIcon: ({focused}) => {
                  return (
                    <View style={{alignItems: "center", justifyContent: "center"}}>
                      <FontAwesome name="calendar-check-o" size={24} color={focused? "#87CEEB": "grey"} />
                    </View>
                  )
                }
              }} 
            />
            <Tab.Screen 
              name='Message' 
              component={MessageScreen}
              options={{
                tabBarIcon: ({focused}) => {
                  return (
                    <View style={{alignItems: "center", justifyContent: "center"}}>
                    <AntDesign name="message1" size={24} color={focused? "#87CEEB": "grey"} />
                    </View>
                  )
                }
              }}  
            />
            <Tab.Screen 
              name='Settings' 
              component={SettingsScreen}
              options={{
                tabBarIcon: ({focused}) => {
                  return (
                    <View style={{alignItems: "center", justifyContent: "center"}}>
                      <AntDesign name="setting" size={24} color={focused? "#87CEEB": "grey"} />
                    </View>
                  )
                }
              }} 
            />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </View>
  );
};
