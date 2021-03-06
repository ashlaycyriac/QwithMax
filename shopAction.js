import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Pressable, Alert } from 'react-native';
import axios from 'axios';

export default function shopAction(props) {
  const navigation= props.navigation
  const [otp, onChangeotp] = React.useState(null);
  
  const acceptUser=()=>
  {
    const url="https://qwithmax-exp.us-e2.cloudhub.io/api/acceptUser" 
    axios.put(url,{shopId:props.route.params.shopid,personId:props.route.params.user.id,token:props.route.params.user.token})
    .then(function (response) {
        console.log(response.data),
        response.data.message==="person entering the shop" ?navigation.goBack() : console.log("invalid data")
        alert(props.route.params.user.Name + " Is Entering The Shop")
      
            })
   
}
const rejectUser=()=>
{
  const url="https://qwithmax-exp.us-e2.cloudhub.io/api/queue" 
  axios.delete(url,{data:{shopId:props.route.params.shopid,personId:props.route.params.user.id,token:props.route.params.user.token}})
  .then(function (response) {
      console.log(response.data),
      response.data.message==="reservation cancelled" ?navigation.goBack() : console.log("invalid data")
      alert(props.route.params.user.Name + "'s Reservation Cancelled")
    
          })
        }

  return (
    <View style={styles.container}>
      <View style={styles.inner}>
     <Text style={styles.Detailstext}>Next user is {props.route.params.user.Name}</Text>
     <Text style={styles.smalltext}>{props.route.params.user.Name} is {props.route.params.user.VaccinatedStatus===null? "not vaccinated" :"vaccinated with "+props.route.params.user.VaccinatedStatus+" doses"}</Text>
     <Text style={styles.smalltext}>Address: {props.route.params.user.Address}</Text>
     </View>
     <TextInput style={styles.input}

onChangeText={onChangeotp}
     value={otp}

     placeholder="Enter User OTP"
   />
      <View style={styles.buttonContainer}>
        {console.log(otp,((props.route.params.user.token).split("-"))[0])}
         <Pressable style={styles.button}
     onPress= {()=> (otp===((props.route.params.user.token).split("-"))[0])? acceptUser() : alert("Incorrect OTP")}>
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
    
    backgroundColor: '#fff',
    alignItems: 'center',

    justifyContent: 'space-between',

    flexDirection:'column',
    paddingTop:50

  },
  inner:{
    paddingLeft:20,
    backgroundColor: '#fff',
    paddingTop:30,
    paddingBottom:10,
    borderColor:'black',
    borderWidth:4,
    width:'100%',
    borderRadius:20,

  },
  button:{    justifyContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    paddingHorizontal: 32,
    borderRadius: 50,
    
    elevation: 20,
    width:'50%',
    height:'50%',
    backgroundColor: 'black',
    borderWidth:2,
    borderColor:'white'
    
  },
  buttonContainer:{

    flexDirection:'row',
    justifyContent:'space-between',
    paddingTop:50,

  },
  Buttontext: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
 Detailstext: {
    fontSize: 30,
    lineHeight: 45,
    fontWeight: 'bold',
    letterSpacing: 0.50,
    color: 'black',
  },
  input:{
    width:400,
    height:50,
    paddingLeft:10,
    borderWidth:1


  },
  smalltext: {
    fontSize:14,
    lineHeight: 45,
    paddingRight:10,
    letterSpacing: 0.25,
    color: 'black',
  },
});
