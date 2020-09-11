import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, Button, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';

// import Icon from 'react-native-vector-icons/FontAwesome';

import { Icon } from 'react-native-elements';


const { width, height } = Dimensions.get("screen");

export default class VerifyOtpScreen extends React.Component{
  render(){

  return (
    <View style={styles.container}>

      <Image source={require('../assets/Ellipse.png')} style={styles.ellipseImage} />
      

      <Image source={require('../assets/medicareLogo.png')} style={styles.medicareImage} />
      
      <View style={styles.inputContainer}>
        <Text style={styles.appText}>Verify OTP </Text>       
      </View>
      
      <View style={styles.input}>  

        <Icon style= {styles.phone} name="ios-phone-portrait" type="ionicon" size={30}  color="#323d79" />

        <TextInput style= {{height: 50, marginLeft: 20,}} placeholder="Enter OTP" />

        


        <TouchableOpacity  onPress={() => this.props.navigation.navigate('SetPassword')}>
            <Icon style= {styles.forword} name="ios-arrow-forward" type="ionicon" size={30}  color="#323d79" />
        </TouchableOpacity>  

       </View> 
       
      <Text style= {styles.otpMessage} >Didn't get OTP yet? <Text style ={{color:'blue', fontWeight: 'bold'}}> Retry </Text></Text>       

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
    justifyContent: 'flex-start', 
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

  otpMessage:{
    color: '#fff',
    alignItems: 'center',
    justifyContent: 'center', 
    padding: 10,
    marginLeft: 100,

    
  }


});