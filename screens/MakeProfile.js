import React, {useState, useEffect} from "react";
import { Image, View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import {vmin, vmax, vw, vh} from "rxn-units";

function MakeProfile({navigation}){
  const [choosed, setChoosed] = useState('');
  const characters = [
    'ome',
    'pear',
    'kiwi',
    'tomato',
    'banana',
    'fig',
    'orange',
    'pineapple',
    'cherry',
  ]//임시 array, 나중에 이미지 제목 들어가야함
  const charBtnHandler = (character) => {
    if(choosed!=character){
      setChoosed(character);
    }
    else{
      setChoosed('');
    }
  }
  useEffect(()=>{
    console.log(choosed)
  }, [choosed])
  return(
    <View style={styles.container}>
        <View style={styles.charContainer}>
        {characters.map((character, idx) => 
          <TouchableOpacity
            key = {idx}
            style={(character==choosed) ? styles.charActiveBox : styles.charBox}
            onPress={()=>charBtnHandler(character)}>
              <Image
              style={styles.charImg}  
              source={require(`../assets/characters/${character}.svg`)}/>
          </TouchableOpacity>
        )}
        </View>
        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.charSubmit}>
            <Text style={styles.btnText}>캐릭터 선택하기</Text>
          </TouchableOpacity>
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
  charContainer: {
    flex: 3,
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
    borderStyle: 'solid',
    borderWidth: 3,
    borderColor: 'lightgrey',
    borderRadius: vw(10),
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  charImg : {
    width: 80,
    height: 80
  },
  charActiveBox : {
    width: vw(25),
    height: vw(25),
    margin: 5,
    borderStyle: 'solid',
    borderWidth: 3,
    borderColor: 'orange',
    borderRadius: vw(10),
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  btnContainer: {
    flex: 1
  },
  charSubmit : {
    marginTop: 10,
    borderRadius: 50,
    backgroundColor: 'orange',
    paddingVertical: 15,
    paddingHorizontal: 30,
    display: 'flex',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  btnText:{
    color: 'white',
    fontWeight: '700',
    fontSize: 16
  }
})