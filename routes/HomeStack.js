import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Userlogin from '../Userlogin';
import Home from '../Home';
import UserHome from '../userHome';
import shop from '../shop';
import queue from '../queue';
import shopping from '../shopping';
import shopHome from '../shopHome';
import shopAction from '../shopAction';
import signUp from '../signUp';
import report from '../visitorsReport';
import visitDetails from '../visitDetails';

const Stack = createNativeStackNavigator();

function HomeStack (){
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
        
          name="Home"
          component={Home} 
          options={{ title: 'Select User Login or Shop Login' }}       />
       <Stack.Screen
        
          name="login"
          component={Userlogin} 
          options={{ title: 'Login to your account' }}       />
          <Stack.Screen
        
        name="UserHome"
        component={UserHome} 
        options={{ title: 'Search' }}       />
         <Stack.Screen
        
        name="shopDetails"
        component={shop} 
        options={{ title: 'Shop Details' }}       />
                 <Stack.Screen
        
        name="queue"
        component={queue} 
        options={{ title: 'Your Queue Status' }}       />

<Stack.Screen
        
        name="shopping"
        component={shopping} 
        options={{ title: 'Happy Shopping !' }}       />
        
        <Stack.Screen
        
        name="shopHome"
        component={shopHome} 
        options={{ title: 'Take The Next User In !' }}       />
                <Stack.Screen
        
        name="shopAction"
        component={shopAction} 
        options={{ title: 'Accept or Reject The User' }}       />
              <Stack.Screen
        
        name="signUp"
        component={signUp} 
        options={{ title: 'Sign Up' }}       />
                      <Stack.Screen
        
        name="report"
        component={report} 
        options={{ title: 'Visitors Report' }}       />

<Stack.Screen
        
        name="visitDetails"
        component={visitDetails} 
        options={{ title: 'Visitor Details' }}       />




      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default HomeStack