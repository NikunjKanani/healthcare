import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, Button, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';


import { createStackNavigator } from 'react-navigation-stack';

import { Icon } from 'react-native-elements';

import Fontisto from 'react-native-vector-icons/Fontisto';  
import Feather from 'react-native-vector-icons/Feather';  
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';  
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';  


const { width, height } = Dimensions.get("screen");

export default class ChooseDoctorScreen extends React.Component{
  render(){

  return (
    <View style={styles.container}>

      <View style={styles.topContainer}>

        <View style={styles.topPart}>  

          <TouchableOpacity style={{alignItems: 'flex-start', margin: 10 }} onPress= {this.props.navigation.openDrawer}>

              <Icon name="md-menu" type="ionicon" size={30}  color="#323d79" />

              {/*<Icon 
                  style={{ paddingRight: 10, alignItems: 'flex-end' }} onPress= {this.props.navigation.closeDrawer}  name="close" size={30} 
              />*/}
          </TouchableOpacity>

          <Text style={styles.topText}>Choose Doctor</Text>

          {/*<Icon style={styles.noti} name="md-notifications" type="ionicon" size={30}  color="#323d79" />*/}
          <SimpleLineIcons style={styles.noti} size={30}  color="#323d79" name="bell"></SimpleLineIcons>

          

        </View>  


        <View>
          <Text style={{color: '#FFF' , marginLeft: 20}}>Consultaion For {'\n'}Alex Thomas

            <Feather size={20} name="chevron-down"></Feather>

          </Text>

          <TextInput
            style={styles.input}
            placeholder="Consult Now"
            
          />
          {/*<Feather size={23} name="search"></Feather>*/}


          <Text style={{color: '#FFF' , marginLeft: 20, marginBottom: 10}}>
          
          <Feather size={15} name="map-pin"></Feather>
          
            <Text style={{color: '#FFF' , margin: 10}}>

            Pune,India

            </Text>
          
          <Feather size={15} name="rotate-cw"></Feather>
          
          </Text>    
        </View>  
      </View>
      
    </View> 
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#36dcb3',
    // overflow: 'hidden',
  },

  topContainer:{
    backgroundColor: '#3fbbea',
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
  },

  topPart:{
    flexDirection: 'row', 

  },

  topText:{
    
    justifyContent: 'center', 
    alignItems: 'center',
    color: '#FFF',
    marginLeft: '28%',
    marginTop: 20,
    marginRight: '28%',
  },

  noti:{
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    margin: 16,
    

  },
 
  input:{
    borderBottomColor: '#8A8F9E',
    borderBottomWidth: StyleSheet.hairlinerWidth,
    height: 30,
    borderRadius: 5,
    fontSize: 10,
    margin: 10,
    marginLeft:20,
    borderColor: '#FFF',
    backgroundColor: '#FFF',
    color:"#161F3D",

  },

 
});
