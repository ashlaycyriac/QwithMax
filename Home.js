import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { StatusBar } from 'expo-status-bar';
export default function Home(props) {
    const navigation= props.navigation
return(
  <View style={styles.containermain}>

<View style={styles.containerpic}>

<Image source={require('./mule.png')} style={styles.bg}></Image>
<Text style={styles.textDescription}>Let Max Know Who You Are</Text>
</View>  
<View style={styles.container}>

 
   <Pressable style={styles.button}
     onPress= {()=> navigation.navigate('login',{mode:"User"})}>
     <Text style={styles.text}>User</Text>
   </Pressable>
   <Pressable style={styles.button}
     onPress= {()=> navigation.navigate('login',{mode:"Shop"})}>
     <Text style={styles.text}>Shop</Text>
   </Pressable> 
   <StatusBar style="auto" />
   
 </View>

  </View>
 
);}

const styles = StyleSheet.create({
    container: {
      paddingTop:40,
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection:'row',
      justifyContent:'space-around'
    },
    containermain: {
  
      backgroundColor: '#fff',
      alignItems:'center'

    },
    containerpic: {
  
      backgroundColor: '#fff',
      alignItems:'center',

    },
    button:{
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 20,
      elevation: 20,
      width:200,
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
    textDescription: {
      fontSize: 20,
      lineHeight: 40,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'black',
    },
    bg:{

     borderRadius:500,
    }
  });
  