import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Start from "./screens/Start"
import SignUp from './screens/SignUp';
import MakeProfile from './screens/MakeProfile';

export default function App() {
  const Stack = createStackNavigator();
  const headerOptions = {
    headerStyle: {
      backgroundColor: 'orange'
    },
    headerTintColor: 'white',
    headerTitleStyle: {
      fontSize: 16
    }
  }
  return (
    <NavigationContainer>
      <Stack.Navigator 
        // initialRouteName="Start"
        initialRouteName="MakeProfile"
        screenOptions={{
          cardStyle: {backgroundColor: '#ffffff'},
          headerTitleAlign: 'center',
          headerTitleStyle: { fontSize: 20, fontWeight: '500' }
        }}>
        <Stack.Screen name="Start" component={Start} options={{
          headerShown: false
        }}/>
        <Stack.Screen name="SignUp" component={SignUp} options={{
          title: '회원 가입',
          headerStyle: headerOptions.headerStyle,
          headerTintColor: headerOptions.headerTintColor,
          headerTitleStyle: headerOptions.headerTitleStyle
        }}/>
        <Stack.Screen name="MakeProfile" component={MakeProfile} options={{
          title: '내 감 캐릭터 고르기',
          headerStyle: headerOptions.headerStyle,
          headerTintColor: headerOptions.headerTintColor,
          headerTitleStyle: headerOptions.headerTitleStyle
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}