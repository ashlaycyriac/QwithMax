import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Pressable } from 'react-native';
import axios from 'axios';

export default function Userlogin(props) {
  const navigation= props.navigation
    const [number, onChangeNumber] = React.useState(null);
  const [password, onChangePassword] = React.useState(null);
  const [LoggedIn, setLogin] = React.useState(0);


 const logIncheck=()=>{
  const url="https://muleq4u.us-e2.cloudhub.io/api/"+props.route.params.mode+'/'+number+'?password='+password 
  console.log(url)
  axios.get(url)
  .then(function (response) {
    console.log(response.data)
    response.data.message==="loggedIn" ? 
    (props.route.params.mode==="User"?(navigation.navigate('UserHome',{userid:response.data.details.id}),setLogin(1)):
     navigation.navigate('shopHome',{shopData:response.data.details}))
     : alert(" Invalid Credentials ! Please check the Username and Password entered !")
  })}
  
  return (
    <View style={styles.container}>
     <Text style={styles.Titletext}>Welcome to {props.route.params.mode} Login !</Text>
     <TextInput style={styles.input}
     
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Enter your Registered Mobile Number"
        keyboardType="numeric"
      />
      <TextInput style={styles.input}
     
        onChangeText={onChangePassword}
        value={password}
        secureTextEntry={true}
        placeholder="Enter your password"
      />
       <Pressable style={styles.button}
     onPress= {()=> logIncheck()}>
     <Text style={styles.Buttontext}>Login</Text>
   </Pressable>
   <View style={{alignItems:'center',paddingTop:100,}}>
 <Pressable style={styles.signUpbutton}
     onPress= {()=> navigation.navigate('signUp',{mode:props.route.params.mode})}>
     <Text style={styles.text}>Sign Up</Text>
   </Pressable> 
   </View>
{console.log(LoggedIn)}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button:{
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 20,
    elevation: 20,
    width:200,
    height:50,
    backgroundColor: 'black',
  },
  signUpbutton:{
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 20,
    elevation: 20,
    width:140,
    height:40,
    backgroundColor: 'grey',
  },
  Buttontext: {
    fontSize: 20,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },

  text: {
    fontSize: 20,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
 
  Titletext: {
    fontSize: 28,
    lineHeight: 50,
    paddingBottom:50,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'grey',
  },
  input:{
    width:400,
    height:50,
    paddingLeft:10,


  }
});
