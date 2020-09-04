import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, Button, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';


import { createStackNavigator } from 'react-navigation-stack';
import { Icon } from 'react-native-elements';


const { width, height } = Dimensions.get("screen");

export default class Dashboard extends React.Component{
  render(){

  return (
    <View style={styles.container}>

           

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
