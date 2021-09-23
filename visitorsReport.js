import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput,ScrollView, Pressable } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import axios from 'axios';

const omit = require('lodash.omit'); // to exclude one function parameter from props 

export default function report(props) {


    const getReport=()=>{
        const url="https://muleq4u.us-e2.cloudhub.io/api/getReport?shopid="+props.route.params.shopid+"&from="+from+"&to="+to
        console.log(url)
        axios.get(url)
        .then(function (response) {

            response.data.message==="no data"?
            ( setReport([]),
            console.log(response.data) ):  
            (setReport([{
              Address: "<Address>",
              Name: "<Name>",
              VaccinatedStatus: "VaccinationStatus",
              inTimestamp: "<Entry time>",
              outTimestamp: "<Exit time>",
              regTimestamp: "RegTime",
              token: "<Token>",
            }].concat(response.data)),
            
          console.log(response.data)) 
                })
        .catch(function(error){
            error.response.status===400 ? alert("Enter the dates in format YYYY-MM-DD"):
            alert("Transient Error Please Retry")
            setReport([])
        })
        }


    const [from, setFrom] = React.useState(null);
    const [to, setTo] = React.useState(null);
    const [report, setReport] = React.useState([]);
    const navigation= props.navigation
return(
<View style={styles.container}>
 
 <Text style={styles.details}>Enter the range of time </Text>
   
   <TextInput style={styles.input}
     
     onChangeText={setFrom}
     value={from}
     placeholder="From Date - Eg: 2020-05-23"
     keyboardType="numeric"
   />
   <TextInput style={styles.input}
     
     onChangeText={setTo}
     value={to}
     placeholder="To Date - Eg: 2020-05-24"
     keyboardType="numeric"
   />
   <Pressable style={styles.Button}
     onPress= {()=> getReport()}>
     <Text style={styles.text}>Get Report</Text>
   </Pressable>
   
<ScrollView style={styles.scroll}  >
     <View style={styles.viewtop}>
       {report.map((prop, key) => {
         return (
           
           <View style={styles.reportView} onTouchStart={()=>console.log("touch")} key={prop.token}>
           
           <Text style={styles.rtext}>   {prop.Name}  </Text>


           <Text style={styles.rtext}> {(prop.inTimestamp).replace('T','  ')}</Text>

</View>

         );
      })}
</View>
     </ScrollView>

 </View>
 
);}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center'
      
    },
    viewtop:{paddingTop:20},
    reportView:{

        backgroundColor: '#fff',
        flexDirection:'row',
        
        },
    scroll: {
      flex: 1,
      backgroundColor: '#fff',


    },
    input:{
      width:400,
      height:50,
      paddingLeft:50,
  
  
    },
      details: {
        fontSize: 20,
        lineHeight: 20,

        paddingTop:20,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'grey', },
        Button:{
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
          fontSize: 20,
          lineHeight: 20,
          fontWeight: 'bold',
          letterSpacing: 0.25,
          color: 'white',       },
        rtext: {
            fontSize: 18,
            lineHeight: 40,

            letterSpacing: 0.25,
            color: 'black',
            borderWidth:1,
            width:200,
            height:50,
             borderRadius:5,
            borderRightColor:'grey'
          },
  });
  