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
/*import ChooseDoctorScreen from './screens/ChooseDoctorScreen'*/

import Dashboard from './screens/Dashboard'



import { NavigationContainer } from "@react-navigation/native";

import DrawerNavigator from "./navigation/DrawerNavigator";

 const App = () => {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}

export default App;