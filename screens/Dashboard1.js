
import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, Button, SafeAreaView, TextInput, TouchableOpacity,ScrollView  } from 'react-native';



import { Icon } from 'react-native-elements';
// import Icon from 'react-native-vector-icons/FontAwesome';  
import Fontisto from 'react-native-vector-icons/Fontisto';  
import Feather from 'react-native-vector-icons/Feather';  
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';  
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';  






import {createSwitchNavigator, createAppContainer} from 'react-navigation';  

import {createDrawerNavigator} from 'react-navigation-drawer'; 

import { createStackNavigator } from 'react-navigation-stack'; 



import SetPasswordScreen from './SetPasswordScreen'
import EnterPasswordScreen from './EnterPasswordScreen'
import ResetPasswordScreen from './ResetPasswordScreen'
import ChooseDoctorScreen from './ChooseDoctorScreen'


import TabNavigator from "../navigation/TabNavigator";




const { width, height } = Dimensions.get("screen");

export default class Dashboard1 extends React.Component{


  render(){


  return (

    <ScrollView style={styles.container}>

        <View style={styles.topContainer}>

        <View style={styles.topPart}>  

          <TouchableOpacity style={{alignItems: 'flex-start', margin: 10 }} onPress= {this.props.navigation.openDrawer}>

              <Icon name="md-menu" type="ionicon" size={30}  color="#323d79" />

              {/*<Icon 
                  style={{ paddingRight: 10, alignItems: 'flex-end' }} onPress= {this.props.navigation.closeDrawer}  name="close" size={30} 
              />*/}
          </TouchableOpacity>

          <Text style={styles.topText}>Dashboard</Text>

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

      <Text style={{color: '#000' , margin: 20, fontWeight: 'bold'}}> Speacialist by symptoms </Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}  style={styles.specialistContainer}>

        

        <View style={styles.row}>
              <View >
                <FontAwesome5 style={styles.icon} size={30} name="snowflake"></FontAwesome5>
                <Text style={{marginRight: 10}}>Corona</Text>

              </View>

              <View>
                
                <FontAwesome5 style={styles.icon} size={30} name="thermometer"></FontAwesome5>

                <Text style={{marginRight: 10}}>Fever</Text>
              </View>

              <View>
                <FontAwesome5 style={styles.icon} size={30} name="bone"></FontAwesome5>
                
                <Text style={{marginRight: 10}}>Joint Pain</Text>
              </View>

              <View>
                
                <FontAwesome5 style={styles.icon} size={30} name="frown-open"></FontAwesome5>                
                <Text style={{marginRight: 10}}>Cough</Text>

              </View>

              <View>
                
                <FontAwesome5 style={styles.icon} size={30} name="frown-open"></FontAwesome5>                
                <Text style={{marginRight: 10}}>Hairfall</Text>
                
              </View>

              <View>
                
                <FontAwesome5 style={styles.icon} size={30} name="frown-open"></FontAwesome5>                
                <Text style={{marginRight: 10}}>Anxiety</Text>
                
              </View>

        </View>
        </ScrollView>

        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.specialistContainer}>
        <View style={styles.row}>
          
          <View>
            <FontAwesome5 style={styles.icon} size={30} name="chalkboard-teacher"></FontAwesome5>
            <Text style={{marginRight: 10}}>Back Pain</Text>
          </View>
          
          <View>
            <FontAwesome5 style={styles.icon} size={30} name="theater-masks"></FontAwesome5>
            
            <Text style={{marginRight: 10}}>Headache</Text>
          </View>

          <View>
            <FontAwesome5 style={styles.icon} size={30} name="syringe"></FontAwesome5>
            <Text style={{marginRight: 10}}>Diabetes</Text>
          </View>

          <View>
            <FontAwesome5 style={styles.icon} size={30} name="radiation-alt"></FontAwesome5>
            <Text style={{marginRight: 10}}>Pimple/Acne</Text>
          </View>

          <View>
            
            <FontAwesome5 style={styles.icon} size={30} name="frown-open"></FontAwesome5>                
            <Text style={{marginRight: 10}}>Anxiety</Text>
            
          </View>

          <View>
            
            <FontAwesome5 style={styles.icon} size={30} name="frown-open"></FontAwesome5>                
            <Text style={{marginRight: 10}}>Acidity</Text>
            
          </View>

          <View>
            
            <FontAwesome5 style={styles.icon} size={30} name="frown-open"></FontAwesome5>                
            <Text style={{marginRight: 10}}>Piles</Text>
            
          </View>


        </View>

      </ScrollView>

      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.imageScrollContainer}>

      <Image source={require('../assets/newsplash.png')} style={styles.scrollImage} />
      <Image source={require('../assets/demopic.png')} style={styles.scrollImage} />
      <Image source={require('../assets/icon.png')} style={styles.scrollImage} />


      </ScrollView>


      <View style={styles.topSpecialistContainer}>
        <Text style={{color: '#000' ,margin: 20, fontWeight: 'bold'}}>Top Speacialist </Text>

        <View style={styles.row}>
              <View >
                <FontAwesome5 style={styles.iconTS} size={50} name="male"></FontAwesome5>
                <Text style={{margin: 1}}>Child Care</Text>                
              </View>

              <View>                
                <FontAwesome5 style={styles.iconTS} size={50} name="snowflake"></FontAwesome5>
                <Text>Cancer Care</Text>
              </View>

              <View>
                <FontAwesome5 style={styles.iconTS} size={50} name="tooth"></FontAwesome5>                
                <Text>Dental Care</Text>
              </View>

        </View>

        <View style={styles.row}>
              <View >
                <FontAwesome5 style={styles.iconTS} size={50} name="female"></FontAwesome5>
                <Text style={{margin: 1}}>Mother Care</Text>                
              </View>

              <View>                
                <FontAwesome5 style={styles.iconTS} size={50} name="baby"></FontAwesome5>
                <Text>Gyanacologist</Text>
              </View>

              <View>
                <FontAwesome5 style={styles.iconTS} size={50} name="tint-slash"></FontAwesome5>                
                <Text>Urologist</Text>
              </View>

        </View>

        <View style={styles.row}>
              <View >
                <FontAwesome5 style={styles.iconTS} size={50} name="male"></FontAwesome5>
                <Text style={{margin: 1}}>Child Care</Text>                
              </View>

              <View>                
                <FontAwesome5 style={styles.iconTS} size={50} name="snowflake"></FontAwesome5>
                <Text>Cancer Care</Text>
              </View>

              <View>
                <FontAwesome5 style={styles.iconTS} size={50} name="tooth"></FontAwesome5>                
                <Text>Dental Care</Text>
              </View>

        </View>

        <View style={styles.row}>
              <View >
                <FontAwesome5 style={styles.iconTS} size={50} name="female"></FontAwesome5>
                <Text style={{margin: 1}}>Mother Care</Text>                
              </View>

              <View>                
                <FontAwesome5 style={styles.iconTS} size={50} name="baby"></FontAwesome5>
                <Text>Gyanacologist</Text>
              </View>

              <View>
                <FontAwesome5 style={styles.iconTS} size={50} name="tint-slash"></FontAwesome5>                
                <Text>Urologist</Text>
              </View>

        </View>


      </View>      
             
     
      
    </ScrollView> 

    
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    overflow: 'hidden',
    marginTop: 30
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
  specialistContainer:{    
    /*alignItems: 'center',
    justifyContent: 'center',*/
  },

  icon: {
    flexDirection: 'column',

    marginLeft: 20,
    /*borderColor: '#000',
    borderRadius: '50%',
    borderWidth: 2,
    */// backgroundColor: 'red',
    width: 60,
    margin: 10,

    /*borderRadius: 35,
    width: 50,
    height: 50, 
    borderWidth: 2,
    borderColor: 'black',
    backgroundColor: 'white'*/
  },

  iconTS: {
    flexDirection: 'column',

    // marginLeft: 20,
    
    width: 100,
    margin: 10,
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10 
  },

  imageScrollContainer:{
    margin: 20
  },

  scrollImage:{
    height:150,
    width:150,
    margin: 10
    // marginLeft: -63,
    // marginTop: 40,
  },
  
 
});
