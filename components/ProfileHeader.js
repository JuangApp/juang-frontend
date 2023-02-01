import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

function ProfileHeader({name}){
  console.log(name);
  return(
    <View style={styles.container}>
      <Text>{name}</Text>
    </View>
  )
}

export default ProfileHeader;

const styles = StyleSheet.create({
  container:{
    backgroundColor:'white',
    width: '100%',
    height: '20%',
    top: 0,
    zIndex: 20
  }
})