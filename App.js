import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Start from "./screens/Start"
import SignUp from './screens/SignUp';
import ProfileChar from './screens/ProfileChar';

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Start"
        screenOptions={{
          cardStyle: {backgroundColor: '#ffffff'},
          headerTitleAlign: 'center',
          headerTitleStyle: { fontSize: 20, fontWeight: '500' }
        }}>
        <Stack.Screen name="Start" component={Start} options={{headerShown: false}}/>
        <Stack.Screen name="회원 가입하기" component={SignUp}/>
        <Stack.Screen name="감 캐릭터 고르기" component={ProfileChar}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}