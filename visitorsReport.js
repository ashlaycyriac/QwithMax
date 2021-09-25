import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput,ScrollView, Pressable } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import axios from 'axios';

const omit = require('lodash.omit'); // to exclude one function parameter from props 

export default function report(props) {


    const getReport=()=>{
      setLoading(1)
    
      const url=((email===null|email==="")?
      ("https://muleq4u.us-e2.cloudhub.io/api/getReport?shopid="+props.route.params.shopid+"&from="+from+"&to="+to+"&email=test@test.com&emailFlag=0")
      :
      ("https://muleq4u.us-e2.cloudhub.io/api/getReport?shopid="+props.route.params.shopid+"&from="+from+"&to="+to+"&email="+email+"&emailFlag=1")
      )
        console.log(url)
        axios.get(url)
        .then(function (response) {

            response.data.message==="no data"?
            ( setReport([{
              Address: "<Address>",
              Name: "<Name>",
              VaccinatedStatus: "VaccinationStatus",
              inTimestamp: "<Entry time>",
              outTimestamp: "<Exit time>",
              regTimestamp: "RegTime",
              token: "<Token>",
            }]),
            console.log(response.data),
            setLoading(0) ):  
            (setReport([{
              Address: "<Address>",
              Name: "<Name>",
              VaccinatedStatus: "VaccinationStatus",
              inTimestamp: "<Entry time>",
              outTimestamp: "<Exit time>",
              regTimestamp: "RegTime",
              token: "<Token>",
            }].concat(response.data)),
            
          console.log(response.data),
          setLoading(0)
          ) 
                })
        .catch(function(error){
          setLoading(0)
            error.response.status===400 ? alert("Enter the dates in format YYYY-MM-DD"):
            alert("Transient Error Please Retry")
            setReport([])
        })
        
        }


    const [from, setFrom] = React.useState(null);
    const [to, setTo] = React.useState(null);
    const [email, setEmail] = React.useState(null);
    const [report, setReport] = React.useState([]);
    const[loading,setLoading]=React.useState(0);
    const navigation= props.navigation
return(
<View style={styles.container}>
 
 <Text style={styles.details}>Enter the range of time </Text>
   
   <TextInput style={styles.input}
     
     onChangeText={setFrom}
     value={from}
     placeholder="From Date - Eg: 2021-09-23"
     keyboardType="numeric"
   />
   <TextInput style={styles.input}
     
     onChangeText={setTo}
     value={to}
     placeholder="To Date - Eg: 2021-09-24"
     keyboardType="numeric"
   />
      <TextInput style={styles.input}
     
     onChangeText={setEmail}
     value={email}
     placeholder="FIll in Email id to get the report"
   />
   <Pressable style={styles.Button}
     onPress= {()=> getReport()}>
     <Text style={styles.text}>Get Report</Text>
   </Pressable>
   
   {loading===1?  <Image source={require('./assets/loading.gif')} style={{width:250,height:100}}></Image>
: null}

<ScrollView style={styles.scroll}  >
     <View style={styles.viewtop}>
       {report.map((prop, key) => {
         return (
           
           <View style={styles.reportView} onTouchEnd={()=>navigation.navigate('visitDetails',{data:prop})} key={prop.token}>
           
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
  