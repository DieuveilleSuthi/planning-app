import { SafeAreaView, StatusBar, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CreatePlanningScreen from './src/pages/CreatePlanningScreen/CreatePlanningScreen';
import BottomNav from './src/components/BottomNav/BottomNav';

const Stack = createStackNavigator();

export default function App() {
  return (
    <View style={{ flex: 1}}>
      <SafeAreaView style={{ flex: 1}}>
        <StatusBar style="light" backgroundColor="black" />
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Main" component={BottomNav} />
            <Stack.Screen name="CreatePlanning" component={CreatePlanningScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </View>
  );
}
