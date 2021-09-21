import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput,ScrollView, Pressable } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import axios from 'axios';


export default function shopHome(props) {
    const navigation= props.navigation
    const getUser=(id)=>
    {

        const url="https://muleq4u.us-e2.cloudhub.io/api/queue?shopId="+id 
        console.log(url)
        axios.get(url)
        .then(function (response) {
            console.log(response.data)
          response.data.message==="no one waiting in the queue"?
          alert('No Users Waiting In Queue'):
          navigation.navigate('shopAction',{user:response.data,shopid:props.route.params.shopData.shopid})
                })}
    
    

return(
<View style={styles.container}>
 
 <Text style={styles.Titletext}>Welcome {props.route.params.shopData.ShopName} to your shop management console</Text>
 {console.log(props.route.params.shopData)}

 <Pressable style={styles.button}
     onPress= {()=> getUser(props.route.params.shopData.shopid)}>
     <Text style={styles.Buttontext}>Take In Next User</Text>
   </Pressable>

 </View>
 
);}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },button:{
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 20,
        elevation: 20,
        width:200,
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
        fontSize: 14,
        lineHeight: 50,
        paddingBottom:50,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'black',
      },
  });
  