import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../../pages/HomeScreen/HomeScreen';
import MessageScreen from '../../pages/MessageScreen/MessageScreen';
import PlanningScreen from '../../pages/PlanningScreen/PlanningScreen';
import SettingsScreen from '../../pages/SettingsScreen/SettingsScreen';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const BottomNav = () => {
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
  };

  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen 
        name='Home' 
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Entypo name="home" size={24} color={focused? "#87CEEB": "grey"} />
          )
        }} 
      />
      <Tab.Screen 
        name='Program' 
        component={PlanningScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <FontAwesome name="calendar-check-o" size={24} color={focused? "#87CEEB": "grey"} />
          )
        }} 
      />
      <Tab.Screen 
        name='Message' 
        component={MessageScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <AntDesign name="message1" size={24} color={focused? "#87CEEB": "grey"} />
          )
        }}  
      />
      <Tab.Screen 
        name='Settings' 
        component={SettingsScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <AntDesign name="setting" size={24} color={focused? "#87CEEB": "grey"} />
          )
        }} 
      />
    </Tab.Navigator>
  );
}

export default BottomNav;
