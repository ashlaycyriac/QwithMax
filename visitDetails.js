import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Pressable } from 'react-native';
import axios from 'axios';

export default function visitDetails(props) {
  const navigation= props.navigation
  
 
  return (
    <View style={styles.container}>
      <View style={styles.inner}>
      <Text style={styles.Detailstext}>{props.route.params.data.Name}</Text>
     <Text style={styles.smalltext}>Address : {props.route.params.data.Address}</Text>
     <Text style={styles.smalltext}>Registered Time : {(props.route.params.data.regTimestamp).replace('T','  ')}</Text>
     <Text style={styles.smalltext}>Entry Time           : {(props.route.params.data.inTimestamp).replace('T','  ')}</Text>
     <Text style={styles.smalltext}>Exit Time             : {(props.route.params.data.outTimestamp).replace('T','  ')}</Text>
     <Text style={styles.smalltext}>Vaccine Doses    : {props.route.params.data.VaccinatedStatus===null ? "Data Not Available" : props.route.params.data.VaccinatedStatus}</Text>
     <Text style={styles.smalltext}>Token                    : {props.route.params.data.token}</Text>
    
     </View>
      <View style={styles.buttonContainer}>
     
       <Pressable style={styles.button}
     onPress= {()=> navigation.goBack()}>
<Text style={styles.Buttontext}>Go Back</Text>
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
    flex:1,
    flexDirection:'column',
    paddingTop:50

  },
  inner:{
    paddingLeft:20,
    backgroundColor: '#fff',
    paddingTop:40,
    borderColor:'grey',
    borderWidth:2,
    width:440,

    borderRadius:40,

  },
  button:{    justifyContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    paddingHorizontal: 32,
    borderRadius: 50,
    
    elevation: 20,
    width:200,
    height:50,
    backgroundColor: 'black',
    borderWidth:2,
    borderColor:'white'
    
  },
  buttonContainer:{

    flexDirection:'row',
    justifyContent:'space-between',
    paddingBottom:280,

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
  smalltext: {
    fontSize:14,
    lineHeight: 45,

    letterSpacing: 0.25,
    color: 'black',
  },
});
