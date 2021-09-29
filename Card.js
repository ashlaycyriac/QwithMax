import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput ,ScrollView} from 'react-native';
import { StatusBar } from 'expo-status-bar';


export default function Card(props) {

    const navigation= props.navigation

    
return(
<View style={styles.aggregate} onTouchEnd={()=>props.shop(props)}>

 <View style={styles.container}>
 <Image source={{uri:props.pic}} style={{width:100,height:200,resizeMode:'contain'}}></Image>

<Text style={styles.details1}> {props.name} </Text>


<Text style={styles.details}> People In Queue: {props.queue}</Text>


<Text style={styles.details}> Number of Vaccines Required: {props.vaccine}</Text>
</View>


 </View>
 
 
);}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      
      justifyContent: 'center',
   
      flexWrap: "wrap",
      alignSelf:'flex-start',
      flexDirection: "column",
      marginTop:20,
      padding: 1,
      paddingLeft: 5,
      height:200,
      width:429,
      borderColor:'rgba(0,0,0, 1)',
      borderTopWidth:5,
      borderLeftWidth:5,
      borderRightWidth:1,
      borderBottomWidth:1,
      borderRadius:20
    },
    details: {
        alignSelf:'flex-start',
        backgroundColor: '#fff',  
        fontSize: 18,
  },
        details1: {

            backgroundColor: '#fff',  
            fontSize: 25,
            fontWeight: "bold"   },

    aggregate: {
            backgroundColor: '#fff', 
            
         
           },
  });
  