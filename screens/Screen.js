
import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, Button, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';


import { createStackNavigator } from 'react-navigation-stack';
import { Icon } from 'react-native-elements';





const { width, height } = Dimensions.get("screen");

export default class Screen extends React.Component{
  render(){

  return (
    <View style={styles.container}>
      
      <SafeAreaView>
        <TouchableOpacity style={{alignItems: 'flex-start', margin: 16 }} onPress= {() => this.props.navigation.openDrawer}>

            <Icon name="ios-apps" type="ionicon" size={30}  color="#323d79" />

        </TouchableOpacity>
      </SafeAreaView>

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
