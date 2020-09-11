import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, Button, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';


import { createStackNavigator } from 'react-navigation-stack';




// import Icon from 'react-native-vector-icons/FontAwesome';

import { Icon } from 'react-native-elements';


const { width, height } = Dimensions.get("screen");

/*export default function GetStartedScreen() {*/
export default class DrawerHeader extends React.Component{

  render(){

  return (
    <View style={styles.container}>

      <Image source={require('../assets/Ellipse 3.png')} style={styles.ellipseImage} />
      

      <Image source={require('../assets/medicareLogo.png')} style={styles.medicareImage} />
      
      
        <Text style={{color:"#fff",fontSize:13 }}>est qui dolorem ipsum quia dolor </Text> 
        <Text style={{color:"#fff",fontSize:13 }}>Lorem sit amet consectetur adipisci velit....</Text>
      
    </View> 
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    /*backgroundColor: '#36dcb3',
    overflow: 'hidden', */
    // alignItems: 'center',
    // justifyContent: 'center',
  },


});
