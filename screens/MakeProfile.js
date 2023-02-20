import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

function MakeProfile({navigation}){
  return(
    <View style={styles.container}>
        <Text>내 감 캐릭터 고르기</Text>
    </View>
  )
}

export default MakeProfile;


const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  main: {
    flex: 1,
    backgroundColor:'pink'
  }
})