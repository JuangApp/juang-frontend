import React from "react";
import { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from "react-native";
import BouncyCheckBox from 'react-native-bouncy-checkbox';

function SignUp({navigation}) {
  const [emailInput, setEmailInput] = useState('');
  const [pwInput, setPwInput] = useState('');
  const [pwpwInput, setPwPwInput] = useState('');
  const [checks, setChecks] = useState([false, false, false]);
  const [isValid, setIsValid] = useState(false);
  const [message, setMessage] = useState('');

  const checksData = [
    '약관사항 1에 동의합니다',
    '약관사항 2에 동의합니다',
    '약관사항 3에 동의합니다'
  ]
  const checkHandler = (idx) => {
    const tmpChecks = checks;
    tmpChecks[idx] = !tmpChecks[idx];
    setChecks([...tmpChecks]);
  }
  const validation = () => {
    const regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
    if(!(pwInput && emailInput && pwpwInput)){
      setMessage('모든 입력을 완료해 주세요.');
      return false;
    }
    if(!regex.test(emailInput)){
      setMessage('이메일 형식에 맞게 입력해 주세요.');
      return false;
    }
    else if(pwInput !== pwpwInput){
      setMessage('비밀번호가 동일하지 않습니다.');
      return false;
    }
    else if(checks.includes(false)){
      setMessage('모든 약관에 동의해 주세요.');
      return false;
    }
    else{
      return true;
    }
  }
  [emailInput, pwInput, pwpwInput, checks, isValid].forEach((state)=>{
    useEffect(()=>{
      if(validation()){
        setIsValid(true);
      }
      else{
        setIsValid(false);
      }
    }, [state])
  })
  const btnClickHandler = () => {
    if(isValid){
      // 사용자 정보 POST
      
      navigation.navigate('Start');
      return;
    }
    Alert.alert(
      'signup error',message,[
        {text: 'ok', onPress:()=>{}}
      ]
    )
  }
  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.guide}>이메일을 입력해주세요.</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => setEmailInput(text)}
          placeholder='abcd@naver.com'
          placeholderTextColor={'rgba(0,0,0,.6)'}
        />
        <Text style={styles.guide}>비밀번호를 입력해주세요</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => setPwInput(text)}
          placeholder='비밀번호'
          placeholderTextColor={'rgba(0,0,0,.6)'}
          secureTextEntry={true}
        />
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => setPwPwInput(text)}
          placeholder='비밀번호 확인'
          placeholderTextColor={'rgba(0,0,0,.6)'}
          secureTextEntry={true}
        />
      </View>
      <View style={styles.submit}>
        <View>
          {checksData.map((data, idx)=>{
            return(
              <BouncyCheckBox
                style={styles.checkEl}
                size={25}
                fillColor="lightgreen"
                unfillColor="white"
                text={data}
                textStyle={{fontSize: 12}}
                onPress={()=>checkHandler(idx)}
              />
            )
          })}
        </View>
        <TouchableOpacity
          style={isValid?styles.submitBtn:styles.noSubmitBtn}
          onPress={()=>{btnClickHandler()}}
        >
          <Text style={styles.btnText}>다음</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 50,
  },
  form:{
    flex: 1,
    justifyContent: 'center'
  },
  submit:{
    flex: 1
  },
  guide:{
    marginTop: 30,
    marginBottom: 10,
    fontWeight: '700'
  },
  textInput: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,.3)',
    padding: 10,
    marginBottom: 10,
  },
  checkEl: {
    marginBottom: 10
  },
  submitBtn: {
    marginTop: 10,
    borderRadius: 50,
    backgroundColor: 'orange',
    paddingVertical: 15,
    display: 'flex',
    alignItems: 'center'
  },
  noSubmitBtn: {
    marginTop: 10,
    borderRadius: 50,
    backgroundColor: 'gray',
    paddingVertical: 15,
    display: 'flex',
    alignItems: 'center'
  },
  btnText:{
    color: 'white',
    fontSize: 16,
    fontWeight: '700'
  }
})