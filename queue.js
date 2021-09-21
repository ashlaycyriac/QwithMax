import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, TextInput ,ScrollView} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import axios from 'axios';


export default function queue(props) {


  useEffect(()=> {
    id=setInterval(()=> (console.log("polling"),pollPosition("Q")), 10000);
    console.log(id)
    return () => {
      clearInterval(id);
  }

  },[])
  
  

    const navigation= props.navigation
   
    const[positionState,setPosition]=useState(props.route.params.position)

const cancelReservation=()=>{

    const payload={personId:props.route.params.personId, shopId:props.route.params.shopId,token:props.route.params.token}


    const urlCancel="https://muleq4u.us-e2.cloudhub.io/api/queue"
    console.log(payload)
    axios.delete(urlCancel,{
        data: payload
      })
    .then(function (response) {
        navigation.goBack()})
}

const pollPosition=(queryState)=>
{
  const url="https://muleq4u.us-e2.cloudhub.io/api/getPosition?shopId="+props.route.params.shopId+"&userId="+props.route.params.personId+"&token="+props.route.params.token
  console.log(url)
  axios.get(url)
  .then(function (response) {(
    response.data.position===null)? (
    
    response.data.state==="C"? (console.log(response.data.state),"here",navigation.goBack()) : (console.log(response.data.state,"ivide"),navigation.goBack(),navigation.navigate('shopping',{token:props.route.params.token,name:props.route.params.name,shopId:props.route.params.shopId,userId:props.route.params.personId}))
    ) :setPosition(response.data.position)        })}

    
return(
    <View>

 <Text style={styles.position}>{positionState}</Text>
 <Button
     onPress= {()=> cancelReservation()}
     title="Cancel Reservation"
   />
</View>
);}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      
      justifyContent: 'center',
      elevation: 5,
      flexWrap: "wrap",
      alignSelf:'flex-start',
      flexDirection: "column",
      marginTop:20,
      padding: 1,
      paddingLeft: 5,
      height:200,
      width:400,
      borderColor:'rgba(158, 150, 150, 0.4)',
      borderTopWidth:1,
      borderLeftWidth:1,
      borderRightWidth:1,
      borderBottomWidth:1
    },
    details: {
        alignSelf:'flex-start',
        backgroundColor: '#fff',  
        fontSize: 14,
  },
        position: {
            alignSelf:'flex-start',
            backgroundColor: '#fff',  
            fontSize: 100,
            alignSelf:'center',
            fontWeight: "bold"   },

    aggregate: {
            backgroundColor: '#fff', 
            
         
           },
  });
  