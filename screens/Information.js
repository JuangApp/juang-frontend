import React from "react";
import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

function Information({navigation}) {
  const [nameInput, setNameInput] = useState('');
  const [birthInput, setBirthInput] = useState('');
  const [user, setUser] = useState({});
  // const submitUser = () => {
  //   setUser({
  //     name : nameInput,
  //     birth : birthInput
  //   })
    
  // }
  const btnClickHandler = () => {
    if(nameInput && birthInput){
      navigation.navigate('감 캐릭터 고르기')
    }else{
      console.log("값을 모두 입력해주세요!")
    }
  }
  
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        onChangeText={(text) => setNameInput(text)}
        placeholder='이름'
        placeholderTextColor={'rgba(0,0,0,.6)'}
      />
      <TextInput
        style={styles.textInput}
        onChangeText={(text) => setBirthInput(text)}
        placeholder='생년월일 (yyMMdd)'
        placeholderTextColor={'rgba(0,0,0,.6)'}
      />
      <TouchableOpacity 
        style={styles.submitBtn}
        onPress={()=>btnClickHandler()}>
        <Text style={styles.btnText}>회원가입 완료하기</Text>
      </TouchableOpacity>
      <Text>{ user.name }</Text>
      <Text>{ user.birth }</Text>
    </View>
  );
}

export default Information;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingBottom: 100,
    paddingHorizontal: 30
  },
  textInput: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,.3)',
    padding: 10,
    marginBottom: 10,
  },
  submitBtn: {
    marginTop: 10,
    borderRadius: 50,
    backgroundColor: 'orange',
    paddingVertical: 15,
    display: 'flex',
    alignItems: 'center'
  },
  btnText:{
    color: 'white',
    fontWeight: '700'
  }
})