import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './components/screens/LoginScreen';
import RegisterScreen from './components/screens/RegisterScreen';
import { RecoilRoot } from 'recoil';
import HomeUserScreen from './components/screens/Users/HomeUserScreen';
import HomeAdminScreen from './components/screens/Admin/HomeAdminScreen';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AdminDrawer } from './components/navigations/AdminDrawer';

const Stack = createStackNavigator();

export default function App() {

  const [route, setRoute] = useState("Login");

  async function checkRole() {
    const role = await AsyncStorage.getItem("role");
    if (role === "user") {
      setRoute("/User/Home");
    }
    if (role === "admin") {
      setRoute("/Admin/Home");
    }
  }

  useEffect(() => {
    checkRole();
  }, [checkRole]);

  return (
    <RecoilRoot>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={route}>
          <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
          <Stack.Screen name='Register' component={RegisterScreen} options={{ headerShown: false }} />
          <Stack.Screen name='/User/Home' component={HomeUserScreen} options={{ headerShown: false }} />
          <Stack.Screen name='/Admin/Home' component={AdminDrawer} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </RecoilRoot>
  );
}
