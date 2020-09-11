
import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, Button, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';



import { Icon } from 'react-native-elements';
import {createSwitchNavigator, createAppContainer} from 'react-navigation';  

import {createDrawerNavigator} from 'react-navigation-drawer'; 

import { createStackNavigator } from 'react-navigation-stack'; 



import SetPasswordScreen from './SetPasswordScreen'
import EnterPasswordScreen from './EnterPasswordScreen'
import ResetPasswordScreen from './ResetPasswordScreen'
import ChooseDoctorScreen from './ChooseDoctorScreen'


import TabNavigator from "../navigation/TabNavigator";
import { NavigationContainer } from "@react-navigation/native";



const { width, height } = Dimensions.get("screen");

export default class Dashboard extends React.Component{


  render(){


  return (

    <View style={styles.container}>
        
        
    
      
     {/* <SafeAreaView>
        <TouchableOpacity style={{alignItems: 'flex-start', margin: 16 }} onPress= {this.props.navigation.openDrawer}>

            <Icon name="md-menu" type="ionicon" size={30}  color="#323d79" />*/}

            {/*<Icon 
                style={{ paddingRight: 10, alignItems: 'flex-end' }} onPress= {this.props.navigation.closeDrawer}  name="close" size={30} 
            />*/}
{/*        </TouchableOpacity>
      </SafeAreaView>
*/}
      <TabNavigator />      
    </View> 
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    overflow: 'hidden',
    
  },

 
});
