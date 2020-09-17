import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, Button, TextInput, TouchableOpacity, SafeAreaView, ImageBackground  } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'
//import LinearGradient from 'react-native-linear-gradient';
import { createStackNavigator } from 'react-navigation-stack';




// import Icon from 'react-native-vector-icons/FontAwesome';

import { Icon } from 'react-native-elements';

const { width, height } = Dimensions.get("screen");
/*export default function GetStartedScreen() {*/
export default class GetStartedScreen extends React.Component{

  render(){

  return (
    <View style={styles.container}>
      <LinearGradient colors={['#38DFB1', '#25C4C2']} style={{position: 'absolute',left: 0,right: 0,top: 0,width:'100%',height: '100%',}}/>
      <Image source={require('../assets/ellipse.png')} style={styles.ellipseImage} />
      <View>
        <Image source={require('../assets/medicareLogo.png')} style={styles.medicareImage} />
      </View>
        <View style={styles.appText}>
          <Text style={{color:"#fff",fontSize:15,fontWeight: '500',  margin: 20 }}>Booking App</Text>
          <Text style={{color:"#fff",fontSize:13 }}>Lorem Ipsum Neque porro quisquam </Text>
          <Text style={{color:"#fff",fontSize:13 }}>est qui dolorem ipsum quia dolor </Text> 
          <Text style={{color:"#fff",fontSize:13 }}>Lorem sit amet consectetur adipisci velit....</Text>
        </View>
      <View>
        <Image source={require('../assets/doctor.png')} style={styles.doctorImage} />
      </View>
      <View>
        <TouchableOpacity style= {styles.button} onPress={() => this.props.navigation.navigate('LoginRegister')} > 
          <Text style={{ fontWeight:"700",color: '#0c1960',alignItems: 'center'}}> Get Started </Text>
            <Icon style= {styles.forword} name="ios-arrow-forward" type="ionicon" size={15}  color="#323d79" /> 
        </TouchableOpacity>  
      </View>
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:50,
    paddingBottom:50,
    overflow: 'hidden',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  bgIamge:{
    width:'100%',
    height:'100%',
    position:"absolute",
    left:0,
    top:0
  },
  forword:{
    marginLeft: 5,
  },
  appText:{
    alignItems: 'center',
    justifyContent: 'center',
  },
  ellipseImage:{
    height: 155,
    width: 210,
    position: "absolute",
    top: -50,
    right:-80
  },
  medicareImage: {
    height:47,
    width:212,
    alignSelf: "center"
  },
  doctorImage:{
    height:300,
    width:282,
    marginLeft: -63,
    marginTop: 40,
  },
  button:{
    alignSelf:"center",
    marginTop: 50,
    backgroundColor: '#fff',
    borderRadius: 30,
    height: 40,
    width: 130,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:"row"    
  },
});
