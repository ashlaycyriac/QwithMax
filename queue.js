import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Pressable, TextInput ,ScrollView, Image} from 'react-native';
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
<View style={styles.containerMain}>


<Image source={require('./max.png')} style={{height:280,width:140}}></Image>
<Text style={styles.textMax}>Max is in the queue for you at {props.route.params.name}</Text>
<View style={{flexDirection:'row',alignItems:'center'}}>
<Image source={require('./processing.gif')} style={{height:100,width:100}}></Image>
<Text style={styles.textMax}>Your Position Is </Text>
<Text style={styles.position}> {positionState}</Text>

</View>

<Text style={styles.textMax}>{positionState<3? "Go to the shop now !" : "Get to the shop once you are in the top 3"}</Text>
<Text style={styles.textMax}>Your OTP Is : {(((props.route.params.token).split('-'))[0])} </Text>

<View style={styles.container}>

   <Pressable style={styles.button}
     onPress= {()=> cancelReservation()}>
     <Text style={styles.text}>Cancel Reservation</Text>
   </Pressable> 
</View>
</View>
);}

const styles = StyleSheet.create({
    container: {
      paddingTop:40,
      flex: 1,
      alignItems: 'center',

      backgroundColor: '#fff',
      flexDirection:'column',
      justifyContent:'space-around'
    },
    containerMain:{
      flex: 1,
      alignItems: 'center',
      paddingTop:10,
      backgroundColor: '#fff',


    },
    button:{
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 20,
      elevation: 20,
      width:250,
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
    textMax:{ fontSize: 20,
      lineHeight: 80,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'black',
}
    ,
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
  