import 'react-native-gesture-handler';
import {NavigationContainer} from "@react-navigation/native"
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './components/screens/LoginScreen';
import RegisterScreen from './components/screens/RegisterScreen';
const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} options={{headerShown:false}} />
        <Stack.Screen name='Register' component={RegisterScreen} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
