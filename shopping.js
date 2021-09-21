import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput ,Image} from 'react-native';
import axios from 'axios';

export default function shopping(props) {
    const navigation= props.navigation
const endSession=()=>{
    
    const url="https://muleq4u.us-e2.cloudhub.io/api/endSession"
  console.log(url)
  axios.put(url,{shopId:props.route.params.shopId,personId:props.route.params.userId,token:props.route.params.token})
  .then(function (response) {
      console.log(response.data)
  navigation.goBack(),
  navigation.goBack()  })}

  return (
    <View style={styles.container}>
   
   <View style={styles.detailsview}>
   <Image source={require('./shop.png')} style={styles.picture}></Image>
   <Text style={styles.details}>You are now shopping at {props.route.params.name} {"\n"}</Text>
    </View>
    <Button
     onPress= {()=> endSession()}
     title="Shopping Completed"
   />
   

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingLeft:25,
    paddingTop:20
  },
  details: {
    justifyContent:'center',
    
    backgroundColor: '#fff',  
    fontSize: 14,
    fontWeight: "bold"   },
    picture:{
        width:200,
        height:200
    },
    detailsview: {
        },
        picture:{
            width:200,
            height:200
        }
});
