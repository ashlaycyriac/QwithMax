import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Pressable, Alert } from 'react-native';
import axios from 'axios';

export default function signUp(props) {
  const navigation= props.navigation
    const [number, onChangeNumber] = React.useState(null);
  const [password, onChangePassword] = React.useState(null);
  const [name, onChangeName] = React.useState(null);
  const [address, onChangeAddress] = React.useState(null);
  const [pincode, onChangePincode] = React.useState(null);
  const [vaccine, onChangeVaccine] = React.useState(null);
  const [pic, onChangeurl] = React.useState(null);
  
  let payload=null
  



 const signUp=()=>{


    (props.route.params.mode==="Shop"?
    (
payload={
    Name:name,
    address:address,
    mobileNumber:parseInt(number),
    password:password,
    pincode:parseInt(pincode),
    vaccineReq:parseInt(vaccine),
    url:pic
}
    ):(
        payload={   name:name,
        address:address,
        mobileNumber:parseInt(number),
        password:password}
    ))
    const url="https://muleq4u.us-e2.cloudhub.io/api/" + props.route.params.mode
    console.log(payload)
  axios.post(url,payload)
  .then(function (response) {
    console.log(response.data)
    response.data.message==="user created"|response.data.message==="shop created" ? 
    (alert(props.route.params.mode+" Account For "+ name+" Created"),
    navigation.goBack())  : alert("Error")
  })
  .catch(function (error) {
      console.log(error.response.data)
    error.response.status===400?
    (error.response.data.message==="Bad request"? alert("Fill In All Fields"):alert("Duplicate Mobile Number Detected")):alert("Server Experiencing Trancient Error, Please Retry")
  })
}
  
  return (

    <View style={styles.container}>
            <Image source={require('./assets/splash.png')} style={{height:140,width:140}}></Image>
     <Text style={styles.Titletext}>Welcome to {props.route.params.mode} SignUp !</Text>
     <TextInput style={styles.input}
        onChangeText={onChangeName}
        value={name}
        placeholder={"Enter Your "+props.route.params.mode +" Name"}
      />
      <TextInput style={styles.input}
     
     onChangeText={onChangeAddress}
     value={address}
     placeholder="Enter Your Address"
   />
   <TextInput style={styles.input}
     
     onChangeText={onChangeNumber}
     value={number}
     placeholder="Enter your Mobile Number"
     keyboardType="numeric"
   />
      <TextInput style={styles.input}
     
        onChangeText={onChangePassword}
        value={password}
        secureTextEntry={true}
        placeholder="Enter your Password"
      />
      
      {props.route.params.mode==="Shop"? <TextInput style={styles.input}
     
     onChangeText={onChangePincode}
     value={pincode}

     keyboardType="numeric"
     placeholder="Enter your Pincode"
   /> : null}
         {props.route.params.mode==="Shop"? <TextInput style={styles.input}
     
     onChangeText={onChangeVaccine}
     value={vaccine}

     keyboardType="numeric"
     placeholder="Enter How Many Doses Of Vaccine Is Required For Entry"
   /> : null}
   {props.route.params.mode==="Shop"? <TextInput style={styles.input}
     
     onChangeText={onChangeurl}
     value={pic}

     placeholder="Enter URL Of The Shop Image"
   /> : null}
       <Pressable style={styles.button}
     onPress= {()=> signUp()}>
     <Text style={styles.Buttontext}>Sign Up</Text>
   </Pressable>
{console.log(name,address,pincode,password,number,vaccine,pic)}
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
  Buttontext: {
    fontSize: 16,
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
