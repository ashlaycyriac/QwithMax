import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput ,Image} from 'react-native';
import axios from 'axios';

export default function shop(props) {
    const navigation= props.navigation
  const getInQueue=()=>{
    const url="https://muleq4u.us-e2.cloudhub.io/api/queue"
    console.log(url)
    axios.post(url,{shopId:props.route.params.shopData.id,personId:props.route.params.userid})
    .then(function (response) {
      console.log(response.data)
      response.data.message==="added to queue" ? navigation.navigate('queue',{position:response.data.position,token:response.data.token,shopId:props.route.params.shopData.id,personId:props.route.params.userid,name:props.route.params.shopData.name}):
      
      (response.data.message==="already in queue"? 
      (alert("You are already in queue. Redirecting you to queue page"), navigation.navigate('queue',{token:response.data.token,position:response.data.position,shopId:props.route.params.shopData.id,personId:props.route.params.userid,name:props.route.params.shopData.name}))
      :
      (alert("you are already in shopping session. Redirecting you to shopping page"),
      navigation.navigate('shopping',{token:response.data.token,name:props.route.params.shopData.name,shopId:props.route.params.shopData.id,userId:props.route.params.userid}))
      )
          })}
  
  return (
    <View style={styles.container}>
   
   <View style={styles.detailsview}>
   <Image source={require('./shop.png')} style={styles.picture}></Image>
   <Text style={styles.details}> {props.route.params.shopData.name}{"\n"}</Text>
   <Text style={styles.details}> {props.route.params.shopData.number}{"\n"}</Text>
   <Text style={styles.details}> {props.route.params.shopData.address}{"\n"}</Text>
   <Text style={styles.details}> {props.route.params.shopData.vaccine}{"\n"}</Text>
   <Text style={styles.details}> {props.route.params.shopData.pincode}{"\n"}</Text>
    </View>
    <Button
     onPress= {()=> getInQueue()}
     title="Get in Queue with Max"
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
