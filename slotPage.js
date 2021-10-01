import React, { useEffect, useState, componentDidMount } from 'react';
import { StyleSheet, Text, View, Image, TextInput,ScrollView, Pressable } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import axios from 'axios';
import SlotCard from './SlotCard';
const omit = require('lodash.omit'); // to exclude one function parameter from props 

export default function slotPage(props) {


    useEffect(()=>{
      setLoading(1);
        const url="https://qwithmax-exp.us-e2.cloudhub.io/api/getActiveSpots?userid="+props.route.params.userid
        console.log(url)
        axios.get(url)
        .then(function (response) {
            setSlots(response.data)
          console.log(response.data)
          setLoading(0);
                })
        .catch(function(error){
setLoading(0);        
})
      
      },[])
  

      

const gotoqueue=(position,token,shopid,userid,shopName)=>{
    navigation.goBack(); 
    navigation.navigate("queue",{position:position,token:token,shopId:shopid,personId:userid,name:shopName})

}

    const [slots, setSlots] = React.useState([]);
    const navigation= props.navigation
    const[loading,setLoading]=React.useState(0);
return(
<View style={styles.container}>
 

   <StatusBar style="auto" />
  
   {loading===1?  <Image source={require('./assets/loading.gif')} style={{width:250,height:100}}></Image>
: null}

<ScrollView style={styles.scroll}>
       {slots.map((prop, key) => {


         return (

           <SlotCard key={prop.token} name={prop.shopName} position={prop.position} shopid={prop.shopid} userid={prop.userid} token={prop.token}  queue={gotoqueue}></SlotCard>
           
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
        Buttonspot:{
          alignItems: 'center',
          justifyContent: 'center',
          paddingVertical: 12,
          paddingHorizontal: 32,
          borderRadius: 10,
          elevation: 20,
          width:400,
          backgroundColor: 'red',
        },
  });
  