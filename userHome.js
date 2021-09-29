import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput,ScrollView, Pressable } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import axios from 'axios';
import Card from './Card';
const omit = require('lodash.omit'); // to exclude one function parameter from props 

export default function UserHome(props) {

    const shopSelected=(prop)=>{

        navigation.navigate('shopDetails',{shopData:omit(prop,'shop'),userid:props.route.params.userid}) // calling the shop component to show details of shop
    }

    const searchShopes=()=>{
      setLoading(1);
        const url="https://muleq4u.us-e2.cloudhub.io/api/Shop?pincode="+number 
        console.log(url)
        axios.get(url)
        .then(function (response) {
          setShops(response.data)
          console.log(response.data)
          setLoading(0);
                })
        .catch(function(error){
error.response.status===400? alert("Please Enter The Pincode") : alert("Transient Error Occured, Please Retry")
setLoading(0);        
})
      
      }


    const [number, onChangeNumber] = React.useState(null);
    const [shops, setShops] = React.useState([]);
    const navigation= props.navigation
    const[loading,setLoading]=React.useState(0);
return(
<View style={styles.container}>
 
 <Text style={styles.details}>Enter the pincode to search for shops </Text>
   <StatusBar style="auto" />
   <TextInput style={styles.input}
     
     onChangeText={onChangeNumber}
     value={number}
     placeholder="PINCODE"
     keyboardType="numeric"
   />
   <Pressable style={styles.Button}
     onPress= {()=> searchShopes()}>
     <Text style={styles.text}>Search</Text>
   </Pressable>
   {loading===1?  <Image source={require('./assets/loading.gif')} style={{width:250,height:100}}></Image>
: null}

<ScrollView style={styles.scroll}>
       {shops.map((prop, key) => {

 
         return (
          
           <Card key={prop.shopid} id={prop.shopid} name={prop.ShopName} address={prop.ShopAddress} 
           number={prop.ShopContactNumber} vaccine={prop.VaccinationRequirement}
           pincode={prop.pincode} queue={prop.peopleInQueue} pic={prop.imageurl} shop={shopSelected} /> 

         );
      })}
     </ScrollView>

 </View>
 
);}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      
    },
    scroll: {
      flex: 1,
      backgroundColor: '#fff',


    },
    input:{
      width:400,
      height:50,
      paddingLeft:50,
  
  
    },
      details: {
        fontSize: 20,
        lineHeight: 20,

        paddingTop:20,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'grey', },
        Button:{
          alignItems: 'center',
          justifyContent: 'center',
          paddingVertical: 12,
          paddingHorizontal: 32,
          borderRadius: 20,
          elevation: 20,
          width:200,
          backgroundColor: 'black',
        },
        text: {
          fontSize: 16,
          lineHeight: 21,
          fontWeight: 'bold',
          letterSpacing: 0.25,
          color: 'white',
        },
  });
  