import React, { useState } from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import { StatusBar } from 'expo-status-bar';


export default function SlotCard(props) {


    
return(
<View style={styles.aggregate} onTouchEnd={()=> props.queue(props.position,props.token,props.shopid,props.userid,props.name)}>
    {console.log(props)}

 <View style={styles.container}>


 <Image source={require('./assets/mulesinqueue.jpeg')} style={{width:170,height:180,resizeMode:'contain'}}></Image>


 <Text style={styles.details1}>Max is at {props.name} for you</Text>


<Text style={styles.details}>Your spot: {props.position}</Text>

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
      width:437,
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
            fontSize: 14,
            fontWeight: "bold"   },

    aggregate: {
            backgroundColor: '#fff', 
            
         
           },
  });
  