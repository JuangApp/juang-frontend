import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import {vmin, vmax, vw, vh} from "rxn-units";

function MakeProfile({navigation}){
  return(
    <View style={styles.container}>
        <View style={styles.charGrid}>
          <TouchableOpacity style={styles.charBox}></TouchableOpacity>
          <TouchableOpacity style={styles.charBox}></TouchableOpacity>
          <TouchableOpacity style={styles.charBox}></TouchableOpacity>
          <TouchableOpacity style={styles.charBox}></TouchableOpacity>
          <TouchableOpacity style={styles.charBox}></TouchableOpacity>
          <TouchableOpacity style={styles.charBox}></TouchableOpacity>
          <TouchableOpacity style={styles.charBox}></TouchableOpacity>
          <TouchableOpacity style={styles.charBox}></TouchableOpacity>
          <TouchableOpacity style={styles.charBox}></TouchableOpacity>
        </View>
    </View>
  )
}

export default MakeProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 100,
    justifyContent:'center',
    alignItems: 'center'
  },
  charGrid: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  charBox : {
    width: vw(25),
    height: vw(25),
    margin: 5,
    backgroundColor: 'lightgrey',
    borderRadius: vw(10),
  }
})