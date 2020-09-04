import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, Button, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';


import { createStackNavigator } from 'react-navigation-stack';

// import Icon from 'react-native-vector-icons/FontAwesome';

import { Icon } from 'react-native-elements';


const { width, height } = Dimensions.get("screen");

export default class LoginRegisterScreen extends React.Component{
  render(){

  return (
    <View style={styles.container}>

      <Image source={require('../assets/Ellipse 3.png')} style={styles.ellipseImage} />
      

      <Image source={require('../assets/medicareLogo.png')} style={styles.medicareImage} />
      
      <View style={styles.inputContainer}>
        <Text style={styles.appText}>Login/Register </Text>       
      </View>
      
      <View style={styles.input}>  

        <Icon style= {styles.phone} name="ios-phone-portrait" type="ionicon" size={30}  color="#323d79" />

        <TextInput style= {{height: 50, marginLeft: 20,}} placeholder="Enter Mobile Number" />

        <TouchableOpacity onPress={() => this.props.navigation.navigate('VerifyOtp')}>
            <Icon style= {styles.forword} name="ios-arrow-forward" type="ionicon" size={30}  color="#323d79" />
        </TouchableOpacity>  

       </View> 
       
      
    </View> 
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#36dcb3',
    overflow: 'hidden',
  },

 appText:{
    alignItems: 'center',
    justifyContent: 'center',
    color:"#fff",
    fontSize:20,
    padding: 10,
    fontWeight: 'bold' 
  },

  inputContainer:{
    paddingTop: 80,
    marginLeft: 20,
    marginRight: 20,  
    
  },


  input:{
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'left', 
    flexDirection: 'row',   
    marginLeft: 20,
    marginRight: 20,  
    
  },

  forword:{
    marginLeft: 10,
  },

  phone:{
    marginLeft: 20,

  },

 

  ellipseImage:{
    height: 155,
    width: 210,
    // padding: 0,
    marginLeft: 275,
    marginTop: -50,    
    // textAlign:'right'


  },

  medicareImage: {
    marginHorizontal: 60,
    marginTop: -50,
    height:40,
    // width:50,
    margin: 30,

  },

  button:{
    marginHorizontal: 120,
    marginTop: 50,
    backgroundColor: '#fff',
    borderRadius: 30,
    height: 40,
    // width: 100,
    alignItems: 'center',
    justifyContent: 'center'    
  },


});
