import React, { Component } from 'react';  

import GetStartedScreen from '../screens/GetStartedScreen'
import LoginRegisterScreen from '../screens/LoginRegisterScreen'
import VerifyOtpScreen from '../screens/VerifyOtpScreen'
import SetPasswordScreen from '../screens/SetPasswordScreen'
import EnterPasswordScreen from '../screens/EnterPasswordScreen'
import ResetPasswordScreen from '../screens/ResetPasswordScreen'
import MessageRegisterScreen from '../screens/MessageRegisterScreen'
import AccountScreen from '../screens/AccountScreen'

import Dashboard from '../screens/Dashboard'
import Dashboard1 from '../screens/Dashboard1'
import ChooseDoctorScreen from '../screens/ChooseDoctorScreen'




import { createStackNavigator } from "@react-navigation/stack";
import Icon from 'react-native-vector-icons/Ionicons';  


const Stack = createStackNavigator();


const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "red",

  },
  headerTintColor: "blue",
  headerBackTitle: "Back",    
  header:props => null,   
};


const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>

    <Stack.Screen name="ChooseDoctor" component={ChooseDoctorScreen} />

      <Stack.Screen name="GetStartedScreen" component={GetStartedScreen} />      
      <Stack.Screen name="LoginRegister" component={LoginRegisterScreen} />
      
      <Stack.Screen name="VerifyOtp" component={VerifyOtpScreen} />
      <Stack.Screen name="SetPassword" component={SetPasswordScreen} />
      <Stack.Screen name="EnterPassword" component={EnterPasswordScreen} />
      <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} />
      <Stack.Screen name="Message" component={MessageRegisterScreen} />
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="Dashboard1" component={Dashboard1} />
      






    </Stack.Navigator>
  );
}

const ContactStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Home"  component={GetStartedScreen}
      
      options={{ headerTitle: 'Dashboard', 
            headerLeft : props => <Icon  
                         style={{ paddingLeft: 10 }}  
  //                       onPress= {this.props.navigation.openDrawer}  
                         
                         name="md-menu"  
                         size={30}  
                    />  ,
                    header:props => null,
    }} 

       />
    </Stack.Navigator>
  );
}
	


export { MainStackNavigator, ContactStackNavigator };