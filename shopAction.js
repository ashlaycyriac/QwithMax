import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
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
       <Button
     onPress= {()=> acceptUser()}
     title = {'Let ' + props.route.params.user.Name + " In !"}
   />
   <Button
        onPress= {()=> rejectUser()}
     title = {'Cancel ' + props.route.params.user.Name + "'s Reservation !"}
   />


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
});
