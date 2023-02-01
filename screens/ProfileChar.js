import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import ProfileHeader from "../components/ProfileHeader";

function ProfileChar({navigation}){
  return(
    <View style={styles.container}>
        <Text>내 감 캐릭터 고르기</Text>
    </View>
  )
}

export default ProfileChar;


const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  main: {
    flex: 1,
    backgroundColor:'pink'
  }
})