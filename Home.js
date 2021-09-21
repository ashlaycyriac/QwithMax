import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Pressable } from 'react-native';
import { StatusBar } from 'expo-status-bar';
export default function Home(props) {
    const navigation= props.navigation
return(
<View style={styles.container}>
 
 
   <Pressable style={styles.button}
     onPress= {()=> navigation.navigate('login',{mode:"User"})}>
     <Text style={styles.text}>User Login</Text>
   </Pressable>
   <Pressable style={styles.button}
     onPress= {()=> navigation.navigate('login',{mode:"Shop"})}>
     <Text style={styles.text}>Shop Login</Text>
   </Pressable> 
   <StatusBar style="auto" />
  
 
 </View>
 
);}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection:'row',
      justifyContent:'space-around'
    },
    button:{
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
  });
  