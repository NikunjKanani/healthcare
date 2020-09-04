import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


import { createStackNavigator } from 'react-navigation-stack';
import {createAppContainer, createSwitchNavigator} from 'react-navigation'


import LoadingScreen from './screens/LoadingScreen'

import GetStartedScreen from './screens/GetStartedScreen'
import LoginRegisterScreen from './screens/LoginRegisterScreen'
import VerifyOtpScreen from './screens/VerifyOtpScreen'
import SetPasswordScreen from './screens/SetPasswordScreen'
import EnterPasswordScreen from './screens/EnterPasswordScreen'
import ResetPasswordScreen from './screens/ResetPasswordScreen'
import ChooseDoctorScreen from './screens/ChooseDoctorScreen'

import Dashboard from './screens/Dashboard'





const AppStack = createStackNavigator(
{
  GetStarted:GetStartedScreen,
  LoginRegister:LoginRegisterScreen,
  VerifyOtp:VerifyOtpScreen,
  SetPassword:SetPasswordScreen,
  EnterPassword:EnterPasswordScreen,
  ResetPassword:ResetPasswordScreen,
  ChooseDoctor:ChooseDoctorScreen,
  Dashboard:Dashboard,
},
{
      intialRouteName:"Loading",

}

);


const AppContainer = createAppContainer(AppStack);  
export default class App extends React.Component {  
    render() {  
        return <AppContainer />;  
    }  
}  




// export default createAppContainer(
//   createSwitchNavigator(
//   {
//     App:AppStack,

//     // Auth:AuthStack
//   },
  
//   )
// )


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
