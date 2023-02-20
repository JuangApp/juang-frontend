import React from "react";
import { useState, useEffect } from "react";
import { View, Text, TextInput, Alert, TouchableOpacity, StyleSheet } from "react-native";
import user from "../data/user.json"

function Start({navigation}) {
  const [idInput, setIdInput] = useState('');
  const [pwInput, setPwInput] = useState('');
  const [loginKey, setLoginKey] = useState(false);

  const submitLoginData = () => {
    let state = false;
    user.some((data)=>{
      if(data.id===idInput && data.pw===pwInput){
        setLoginKey(true);
        state = true;
        return true;
      }
      else{
        state = false;
      }
    })
    if(state===false){
      Alert.alert(
        'login error','아이디와 비밀번호를 확인해주세요.',[
          {text: 'ok', onPress:()=>{}}
        ]
      )
    }
  }
  useEffect(()=>{
    if (loginKey===true){
      navigation.navigate('MakeProfile');
    }
    else{
      navigation.navigate('Start')
    }
  }, [loginKey])
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text>우리집 감나무</Text>
      </View>
      <View style={styles.form}>
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => setIdInput(text)}
          placeholder='아이디'
          placeholderTextColor={'rgba(0,0,0,.6)'}
        />
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => setPwInput(text)}
          placeholder='패스워드'
          placeholderTextColor={'rgba(0,0,0,.6)'}
          secureTextEntry={true}
        />
        <TouchableOpacity
          style={styles.submitBtn}
          onPress={()=>submitLoginData()}>
          <Text style={styles.btnText}>로그인</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('SignUp')}
          style={styles.submitBtn}>
          <Text style={styles.btnText}>회원가입</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Start;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 100
  },
  title: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgray'
  },
  form: {
    flex: 2,
    marginTop: 30
  },
  textInput: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,.3)',
    padding: 10,
    marginBottom: 15,
  },
  submitBtn: {
    marginTop: 10,
    borderRadius: 50,
    backgroundColor: 'orange',
    paddingVertical: 15,
    display: 'flex',
    alignItems: 'center',
    marginHorizontal: 10
  },
  btnText:{
    color: 'white',
    fontWeight: '700'
  }
})