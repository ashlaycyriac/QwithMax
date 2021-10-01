import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput ,Image, Pressable} from 'react-native';
import axios from 'axios';

export default function shopping(props) {
    const navigation= props.navigation
const endSession=()=>{
    
    const url="https://qwithmax-exp.us-e2.cloudhub.io/api/endSession"
  console.log(url)
  axios.put(url,{shopId:props.route.params.shopId,personId:props.route.params.userId,token:props.route.params.token})
  .then(function (response) {
      console.log(response.data)
  navigation.goBack(),
  navigation.goBack()  })}

  return (
    <View style={styles.container}>

   <View style={styles.detailsview}>
   <Image source={require('./shopping.gif')} style={styles.picture}></Image>      

   <Text style={styles.details}>Enjoy your visit to {props.route.params.name} {"\n"}</Text>
    
    <Pressable style={styles.button}
     onPress= {()=> endSession()}>
    <Text style={styles.text}>Shopping Completed</Text>
   </Pressable>
   </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingLeft:25,
  },
  details: {
    justifyContent:'center',
    
    backgroundColor: '#fff',  
    fontSize: 25,
    fontWeight: "bold"   },
    picture:{
        width:200,
        height:200
    },
    detailsview: {


        flex: 1,
        alignItems: 'center',
        justifyContent:'center',
        flexDirection:'column',
        backgroundColor: '#fff',

      
        },
        picture:{
            width:200,
            height:200
        },
        button:{
          alignItems: 'center',
          justifyContent: 'center',
          paddingVertical: 12,
          paddingHorizontal: 32,
          borderRadius: 20,
          elevation: 20,
          width:350,
          height:50,
          backgroundColor: 'black',
        },
        text: {
          fontSize: 20,
          lineHeight: 21,
          fontWeight: 'bold',
          letterSpacing: 0.25,
          color: 'white',
        },
       
});
