import { View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CreatePlanningScreen from './src/pages/CreatePlanningScreen/CreatePlanningScreen';
import BottomNav from './src/components/BottomNav/BottomNav';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import LoginScreen from './src/pages/LoginScreen/LoginScreen';
import RegisterScreen from './src/pages/RegisterScreen/RegisterScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <AppContent />
    </SafeAreaProvider>
  );
}

function AppContent() {
  const insets = useSafeAreaInsets();

  return (
    <View style={{ flex: 1, marginTop: insets.top}}>
      <StatusBar barStyle="auto" backgroundColor="black" />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name='Login' component={LoginScreen} />
          <Stack.Screen name="Main" component={BottomNav} />
          <Stack.Screen name="CreatePlanning" component={CreatePlanningScreen} />
          <Stack.Screen name='Register' component={RegisterScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}
