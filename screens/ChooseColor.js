import React, {useState, useEffect} from "react";
import { Image, View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import {vmin, vmax, vw, vh} from "rxn-units";

function ChooseColor({navigation, route}){
  return(
    <View style={styles.container}>
      <Text>{route.params.character.name}</Text>
      <Image
        style={styles.charImg}
        source={route.params.character.src}
      />
    </View>
  )
}

export default ChooseColor;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 100,
    justifyContent:'center',
    alignItems: 'center'
  },
  charImg : {
    width: 80,
    height: 80
  }
})