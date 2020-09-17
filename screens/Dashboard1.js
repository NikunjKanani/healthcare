import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, Button, SafeAreaView, TextInput, TouchableOpacity,ScrollView  } from 'react-native';

import { Icon } from 'react-native-elements';
// import Icon from 'react-native-vector-icons/FontAwesome';  
//import LinearGradient from "react-native-linear-gradient";
import { LinearGradient } from 'expo-linear-gradient';

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
        <View>
          <LinearGradient colors={['#2ED2E5', '#6F78F7']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={{position: 'absolute',left: 0,right: 0,top: 0,width:'100%',height:180,borderBottomLeftRadius:15,borderBottomRightRadius:15,}}/>
          <View style={styles.topPart}>  
            <TouchableOpacity style={{alignItems: 'flex-start', margin: 10,padding:3}} onPress= {this.props.navigation.openDrawer}>
                <Image source={require('../assets/menu-icon.png')} style={styles.menuIcon} />
                {/*<Icon 
                    style={{ paddingRight: 10, alignItems: 'flex-end' }} onPress= {this.props.navigation.closeDrawer}  name="close" size={30} 
                />*/}
            </TouchableOpacity>
            <Text style={styles.topText}>Dashboard</Text>
            {/*<Icon style={styles.noti} name="md-notifications" type="ionicon" size={30}  color="#323d79" />*/}
            {/* <SimpleLineIcons style={styles.noti} size={30}  color="#323d79" name="bell"></SimpleLineIcons> */}
            <Image source={require('../assets/notification.png')} style={styles.notification} />
          </View>
          <View>
            <Text style={{color: '#FFF' , marginLeft: 10}}>Consultaion For,</Text>
          </View>
          <View style={{flexDirection:"row"}}>
            <Text style={{color: '#FFF', fontWeight:'600', marginLeft: 10,textAlignVertical:"center"}}>Alex Thomas</Text>
            <Feather style={{color:'#fff',textAlignVertical:"center"}} size={18} name="chevron-down"></Feather>
          </View>
          <View>
            <TextInput style={styles.input} placeholder="Fever"/>
            <Feather size={18} name="search" style={{position:"absolute",top:18,right:20,color:'#555555'}}></Feather>
          </View>
          {/*<Feather size={23} name="search"></Feather>*/}
          <View style={{zIndex:9}}>
            <Text style={{color: '#FFF' , marginLeft: 10, marginBottom: 10}}>
            <Feather size={15} name="map-pin"></Feather>
              <Text style={{color: '#FFF' , margin: 10}}>Pune,India</Text>
            <Feather size={15} name="rotate-cw"></Feather>
            </Text>
          </View>    
        </View>
      </View>
      <View>
        <Text style={{color:'#000', marginHorizontal: 10,marginTop:30,marginBottom:20,fontSize:16,fontWeight: '600'}}>Speacialist by symptoms</Text>
      </View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}  style={styles.specialistContainer}>
        <View style={styles.row}>
          <View>
            <View style={styles.speCircle}>
              <Image source={require('../assets/corona.png')} style={styles.speImage} />
            </View>
            <Text style={styles.speText}>Corona</Text>
            <View style={styles.speCircle}>
              <Image source={require('../assets/fever.png')} style={styles.speImage} />
            </View>
            <Text style={styles.speText}>Fever</Text>
          </View>
          <View>
            <View style={styles.speCircle}>
              <Image source={require('../assets/joint-pain.png')} style={styles.speImage} />
            </View>
            <Text style={styles.speText}>Joint Pain</Text>
            <View style={styles.speCircle}>
              <Image source={require('../assets/joint-pain.png')} style={styles.speImage} />
            </View>
            <Text style={styles.speText}>Cough</Text>
          </View>
          <View>
            <View style={styles.speCircle}>
            <Image source={require('../assets/joint-pain.png')} style={styles.speImage} />
            </View>
            <Text style={styles.speText}>Hairfall</Text>
            <View style={styles.speCircle}>
              <Image source={require('../assets/joint-pain.png')} style={styles.speImage} />
            </View>
            <Text style={styles.speText}>Anxiety</Text>
          </View>
          <View>
            <View style={styles.speCircle}>
              <Image source={require('../assets/bacpain.png')} style={styles.speImage} />
            </View>
            <Text style={styles.speText}>Back Pain</Text>
            <View style={styles.speCircle}>
              <Image source={require('../assets/headache.png')} style={styles.speImage} />
            </View>
            <Text style={styles.speText}>Headache</Text>
          </View>
          <View>
            <View style={styles.speCircle}>
              <Image source={require('../assets/diebates.png')} style={styles.speImage} />
            </View>
            <Text style={styles.speText}>Diabetes</Text>
            <View style={styles.speCircle}>
              <Image source={require('../assets/pimples.png')} style={styles.speImage} />
            </View>
            <Text style={styles.speText}>Pimple</Text>
          </View>
          <View>
            <View style={styles.speCircle}>
              <Image source={require('../assets/depression.png')} style={styles.speImage} />
            </View>
            <Text style={styles.speText}>Depression</Text>
            <View style={styles.speCircle}>
              <Image source={require('../assets/pimples.png')} style={styles.speImage} />
            </View>
            <Text style={styles.speText}>Acidity</Text>
          </View>
        </View>
      </ScrollView>

      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.imageScrollContainer}>
        <Image source={require('../assets/banner-1.png')} style={styles.scrollImage} />
        <Image source={require('../assets/banner-2.png')} style={styles.scrollImage} />
      </ScrollView>

      <View>
        <Text style={{color:'#000', margin: 10,fontSize:16,fontWeight: '600'}}>Top Speacialist</Text>
      </View>
      <View style={styles.row}>
        <View>
          <View style={styles.topCircle}>
            <Image source={require('../assets/child-care.png')} style={styles.topImage} />
          </View>
          <Text style={styles.topSpec}>Child Care</Text>                
        </View>
        <View>
          <View style={styles.topCircle}>
            <Image source={require('../assets/cancer-care.png')} style={styles.topImage} />
          </View>
          <Text style={styles.topSpec}>Cancer Care</Text>
        </View>
        <View>
          <View style={styles.topCircle}>
            <Image source={require('../assets/dental-care.png')} style={styles.topImage} />
          </View>
          <Text style={styles.topSpec}>Dental Care</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View>
          <View style={styles.topCircle}>
            <Image source={require('../assets/eye-care.png')} style={styles.topImage} />
          </View>
          <Text style={styles.topSpec}>Eye Care</Text>                
        </View>
        <View>
          <View style={styles.topCircle}>
            <Image source={require('../assets/skin-care.png')} style={styles.topImage} />
          </View>
          <Text style={styles.topSpec}>Skin Care</Text>
        </View>
        <View>
          <View style={styles.topCircle}>
            <Image source={require('../assets/view-all.png')} style={styles.topImage} />
          </View>
          <Text style={styles.topSpec}>View All</Text>
        </View>
      </View>
    </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    // overflow: 'hidden',
  },
  menuIcon:{
    width:22,
    height:16
  },
  topPart:{
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  topText:{
    color: '#FFF',
    flexGrow:1,
    fontSize:16,
    textAlign:"center",
    alignSelf:"center",
    fontWeight: '600'
  },
  notification:{
    width:16,
    height:20,
    padding:5,
    marginRight:15,
    alignSelf:"center",
    alignItems:"flex-end"
  },
  input:{
    borderBottomColor: '#8A8F9E',
    borderBottomWidth: StyleSheet.hairlinerWidth,
    borderRadius: 5,
    fontSize: 14,
    margin: 10,
    padding:10,
    backgroundColor: '#FFF',
    color:"#161F3D",
  },
  speText:{
    textAlign:"center",
    marginTop:5,
    marginBottom:15,
    marginHorizontal:10,
  },
  topSpec:{
    textAlign:"center",
    marginTop:5,
    marginBottom:15,
    marginHorizontal:20,
  },
  speCircle: {
    flexDirection: 'column',
    marginHorizontal: 10,
    padding:10,
    textAlign:"center",
    width: 60,
    height:60,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.16,
    shadowRadius: 6,
    borderRadius:50,
  },
  topCircle: {
    flexDirection: 'column',
    marginHorizontal: 10,
    padding:15,
    textAlign:"center",
    width: 75,
    height:75,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.16,
    shadowRadius: 6,
    borderRadius:50,
    alignItems:"center",
    alignSelf:"center"
  },  
  speImage:{
    width:40,
    height:40
  },  
  topImage:{
    width:50,
    height:50
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
  },
  imageScrollContainer:{
    margin: 10
  },
  scrollImage:{
    height:146,
    width:278,
    marginRight: 15
  },
});