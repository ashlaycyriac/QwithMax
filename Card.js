import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput ,ScrollView} from 'react-native';
import { StatusBar } from 'expo-status-bar';


export default function Card(props) {

    const navigation= props.navigation

    
return(
<View style={styles.aggregate} onTouchEnd={()=>props.shop(props)}>
 
<View style={styles.container}><Text style={styles.details1}> {props.name} {"\n"}</Text>
<Text style={styles.details}> Address: {props.address}{"\n"}</Text>

<Text style={styles.details}> Number of Vaccines Required: {props.vaccine}{"\n"}</Text>
</View>


 </View>
 
 
);}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      
      justifyContent: 'center',
      elevation: 10,
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
      borderBottomWidth:1,
      borderRadius:40
    },
    details: {
        alignSelf:'flex-start',
        backgroundColor: '#fff',  
        fontSize: 14,
  },
        details1: {
            alignSelf:'flex-start',
            backgroundColor: '#fff',  
            fontSize: 17,
            fontWeight: "bold"   },

    aggregate: {
            backgroundColor: '#fff', 
            
         
           },
  });
  