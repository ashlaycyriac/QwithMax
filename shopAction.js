import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Pressable } from 'react-native';
import axios from 'axios';

export default function shopAction(props) {
  const navigation= props.navigation
  
  const acceptUser=()=>
  {
    const url="https://muleq4u.us-e2.cloudhub.io/api/acceptUser" 
    axios.put(url,{shopId:props.route.params.shopid,personId:props.route.params.user.id,token:props.route.params.user.token})
    .then(function (response) {
        console.log(response.data),
        response.data.message==="person entering the shop" ?navigation.goBack() : console.log("invalid data")
        alert(props.route.params.user.Name + " Is Entering The Shop")
      
            })
   
}
const rejectUser=()=>
{
  const url="https://muleq4u.us-e2.cloudhub.io/api/queue" 
  axios.delete(url,{data:{shopId:props.route.params.shopid,personId:props.route.params.user.id,token:props.route.params.user.token}})
  .then(function (response) {
      console.log(response.data),
      response.data.message==="reservation cancelled" ?navigation.goBack() : console.log("invalid data")
      alert(props.route.params.user.Name + "'s Reservation Cancelled")
    
          })
        }

  return (
    <View style={styles.container}>
     <Text> Next User is {props.route.params.user.Name}</Text>
     <Text> {props.route.params.user.Name} is {props.route.params.user.VaccinatedStatus===null? "either not vaccinated or didnt update vaccine status" :"vaccinated with "+props.route.params.user.VaccinatedStatus+" doses"}</Text>
     <Text> Next User is {props.route.params.user.Address}</Text>
     <Text> Next User is {props.route.params.user.ContactNumber}</Text>
      <View style={styles.buttonContainer}>
       <Pressable style={styles.button}
     onPress= {()=> acceptUser()}>
<Text style={styles.Buttontext}>{'Let ' + props.route.params.user.Name + " In !"}</Text>
   </Pressable>
   <Pressable style={styles.button}
        onPress= {()=> rejectUser()}>
<Text style={styles.Buttontext}>{'Cancel ' + props.route.params.user.Name + "'s Reservation !"}</Text>
   </Pressable>
</View>

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
  button:{    justifyContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    paddingHorizontal: 32,
    borderRadius: 20,
    elevation: 20,
    width:350,
    height:50,
    backgroundColor: 'black',
  },
  buttonContainer:{
    alignContent:'center',
    flexDirection:'column',
    justifyContent:'space-around',
    paddingTop:50

  },
  Buttontext: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});
