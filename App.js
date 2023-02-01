import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Start from "./screens/Start"
import SignUp from './screens/SignUp';
import Information from "./screens/Information"
import ProfileChar from './screens/ProfileChar';
import profileHeader from './components/ProfileHeader';

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator 
        // initialRouteName="Start"
        initialRouteName="Start"
        screenOptions={{
          cardStyle: {backgroundColor: '#ffffff'},
          headerTitleAlign: 'center',
          headerTitleStyle: { fontSize: 20, fontWeight: '500' }
        }}>
        <Stack.Screen name="Start" component={Start} options={{headerShown: false}}/>
        <Stack.Screen name="회원 가입하기" component={SignUp}/>
        <Stack.Screen name="정보 입력하기" component={Information} />
        <Stack.Screen name="감 캐릭터 고르기" component={ProfileChar}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}