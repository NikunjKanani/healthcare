import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, Button, SafeAreaView, TextInput, TouchableOpacity,ScrollView } from 'react-native';


import { createStackNavigator } from 'react-navigation-stack';




// import Icon from 'react-native-vector-icons/FontAwesome';

import { Icon } from 'react-native-elements';


const { width, height } = Dimensions.get("screen");

/*export default function GetStartedScreen() {*/
export default class GetStartedScreen extends React.Component{

  render(){

  return (
    <ScrollView style={styles.container}>

      <Image source={require('../assets/Ellipse.png')} style={styles.ellipseImage} />
      

      <Image source={require('../assets/medicareLogo.png')} style={styles.medicareImage} />
      
      <View style={styles.appText}>
        <Text style={{color:"#fff",fontSize:15,fontWeight: '500',  margin: 20 }}>Booking App</Text>
        <Text style={{color:"#fff",fontSize:13 }}>Lorem Ipsum Neque porro quisquam </Text>
        <Text style={{color:"#fff",fontSize:13 }}>est qui dolorem ipsum quia dolor </Text> 
        <Text style={{color:"#fff",fontSize:13 }}>Lorem sit amet consectetur adipisci velit....</Text>
      </View> 


      <Image source={require('../assets/doctor.png')} style={styles.doctorImage} />

      <TouchableOpacity style= {styles.button} onPress={() => this.props.navigation.navigate('LoginRegister')} > 
        <Text style={{ fontWeight:"800",color: '#0c1960'}}> Get Started </Text>
          <Icon style= {styles.forword} name="ios-arrow-forward" type="ionicon" size={15}  color="#323d79" />
        
      </TouchableOpacity>  

      
    </ScrollView> 
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#36dcb3',
    overflow: 'hidden', 
    // alignItems: 'center',
    // justifyContent: 'center',
  },

  forword:{
    marginLeft: 10,
  },

  appText:{
    alignItems: 'center',
    justifyContent: 'center',
  },

  ellipseImage:{
    // marginHorizontal: 10,
    // height:height,
    // width:width,
    // margin: 20,
    
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

  doctorImage:{
    height:300,
    width:282,
    marginLeft: -63,
    marginTop: 40,
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
