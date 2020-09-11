import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, Button, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { createStackNavigator } from 'react-navigation-stack';

// import Icon from 'react-native-vector-icons/FontAwesome';

import { Icon } from 'react-native-elements';


const { width, height } = Dimensions.get("screen");

export default class SetPasswordScreen extends React.Component{
  render(){

  return (
    <View style={styles.container}>
      <LinearGradient colors={['#38DFB1', '#25C4C2']} style={{position: 'absolute',left: 0,right: 0,top: 0,height: 800,}} />
      <Image source={require('../assets/ellipse.png')} style={styles.ellipseImage} />
      <Image source={require('../assets/medicareLogo.png')} style={styles.medicareImage} />      
      <View style={styles.inputContainer}>
        <Text style={styles.appText}>Set Password </Text>
        <View style={styles.input}>  
          <Image source={require('../assets/icon-feather-lock.png')} style= {styles.phone} />
          <TextInput style= {{height: 50, marginLeft: 20,}} placeholder="Password" />
          <TouchableOpacity style= {styles.forword} onPress={() => this.props.navigation.navigate('EnterPassword')}>
          <Image source={require('../assets/icon-material-navigate-next.png')} style= {styles.forwordIcon} />
          </TouchableOpacity> 
        </View> 
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
    paddingBottom: 10,
    paddingLeft:20,
    fontWeight: 600 
  },
  inputContainer:{ 
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
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
    position: "relative"
  },
  forword:{
    position: "absolute",
    right:15,
    top:15
  },
  forwordIcon:{
    width:12,
    height:18
  },
  phone:{
    marginLeft: 20,
    width:17,
    height:19
  },
  ellipseImage:{
    height: 155,
    width: 210,
    position: "absolute",
    top: -70,
    right:-100
  },
  medicareImage: {
    height:47,
    width:212,
    alignSelf: "center",
    marginTop:30
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
