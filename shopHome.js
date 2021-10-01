import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput,ScrollView, Pressable } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import axios from 'axios';





export default function shopHome(props) {

    const navigation= props.navigation
    const[loading,setLoading]=React.useState(0)



    const getUser=(id)=>
    {
        setLoading(1)
        console.log(loading)
        const url="https://qwithmax-exp.us-e2.cloudhub.io/api/queue?shopId="+id 
        console.log(url)
        axios.get(url)
        .then(function (response) {
          console.log(response.data)
          response.data.message==="no one waiting in the queue"?
          (alert('No Users Waiting In Queue'),
          setLoading(0)):
          (navigation.navigate('shopAction',{user:response.data,shopid:props.route.params.shopData.shopid}),                setLoading(0))
                })

              }
    
    

return(
<View style={styles.container}>
<Image source={require('./max-shop.png')} style={{height:280,width:140}}></Image>
 <Text style={styles.Titletext}>Welcome {props.route.params.shopData.ShopName},control the rush with Max</Text>
 {console.log(props.route.params.shopData)}

 <Pressable style={styles.buttonUser}
     onPress= {()=> getUser(props.route.params.shopData.shopid)}>
     <Text style={styles.Buttonusertext}>Get Next User In Queue</Text>
   </Pressable>
  <View style={styles.report}>
  <Pressable style={styles.button}
     onPress= {()=> navigation.navigate('report',{shopid:props.route.params.shopData.shopid})}>
     <Text style={styles.Buttontext}>Generate Report</Text>
   </Pressable>
  </View>

  {loading===1?  <Image source={require('./assets/loading.gif')} style={{width:250,height:100}}></Image>
: null}

 </View>
 
);}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      alignItems: 'center',
      paddingTop:100,
      height:1000
    },
    report:{
      backgroundColor: '#fff',
      alignItems: 'center',
      paddingTop:100,

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
      }, buttonUser:{
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 20,
        elevation: 20,
        width:400,
        height:50,
        backgroundColor: 'black',
      },
   
      Buttontext: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
      },
      Buttonusertext: {
        fontSize: 25,
        lineHeight: 30,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
      },
      Titletext: {
        fontSize: 18,
        lineHeight: 50,
        paddingBottom:50,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'black',
      },
  });
  