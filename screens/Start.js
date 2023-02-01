import React from "react";
import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

function Start({navigation}) {
  const [idInput, setIdInput] = useState('');
  const [pwInput, setPwInput] = useState('');
  const [loginData, setLoginData] = useState({});
  const submitLoginData = () => {
    setLoginData({
      id: idInput,
      pw: pwInput
    })
    console.log(loginData)
  }
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
          onPress={() => navigation.navigate('회원 가입하기')}
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