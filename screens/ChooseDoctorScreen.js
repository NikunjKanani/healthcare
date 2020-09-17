import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, Button, SafeAreaView, TextInput, TouchableOpacity,ScrollView } from 'react-native';
//import LinearGradient from "react-native-linear-gradient";
import { LinearGradient } from 'expo-linear-gradient';

import { createStackNavigator } from 'react-navigation-stack';

import { Icon } from 'react-native-elements';

import Fontisto from 'react-native-vector-icons/Fontisto';  
import Feather from 'react-native-vector-icons/Feather';  
import FontAwesome from 'react-native-vector-icons/FontAwesome';  
import FontAwesome5 from 'react-native-vector-icons/FontAwesome';  
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';  
import { block } from 'react-native-reanimated';


const { width, height } = Dimensions.get("screen");

export default class ChooseDoctorScreen extends React.Component{
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
            <Text style={styles.topText}>Choose Doctor</Text>
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

      <View style={styles.doctorContainer}>
        <View style={{flex:1, flexDirection: 'row',marginLeft:10,marginRight:10,marginTop:25,marginBottom:10}}>
          <View style={{flexGrow:1,alignSelf: "center"}}> 
            <Text style={{color:'#000',fontSize:16}}> Doctor for <Text style={{ fontWeight: 'bold'}} >Fever </Text></Text>
          </View>
          <View style={{alignContent:"flex-end",alignSelf:"flex-end",alignItems:"flex-end",flexDirection:"row"}}>
            <Text style={styles.sorFil}><Text style={{textAlignVertical:"center"}}>Sort</Text><Feather size={18} name="chevron-down" style={{textAlignVertical:"center"}}></Feather></Text> 
            <Text style={styles.sorFil}><Text style={{textAlignVertical:"center"}}>Filter</Text><Feather size={18} name="chevron-down" style={{textAlignVertical:"center"}}></Feather></Text> 
          </View>
        </View>
        <View style={styles.doctorDetails}>
          <View style={{width: '35%'}}>
          <Image source={require('../assets/nurse-2019420_1920.png')} style={styles.scrollImage} />
          <Text style={styles.buttonSpe}>Physicain</Text>
          </View>
          <View style={{width: '65%',}}>
            <View style={{flexDirection:'row'}}>
              <Text style={{fontSize: 18,marginLeft: 10,marginTop:5,fontWeight: 'bold',flexGrow:1,}}>Dr. Neena Gupta  </Text>
              <SimpleLineIcons style={{margin:10}} size={16} name="share"></SimpleLineIcons>
            </View>
            <View style={{borderRadius: 10,borderWidth: 1,marginHorizontal:10,borderColor: '#5ddceb',flexDirection: 'row',minHeight:50,padding:7}}>
              <Image source={require('../assets/favicon.png')} style={{width: 35,}} />
              <View style={{borderLeftWidth:1, borderColor:'#5ddceb',marginLeft:5,paddingLeft:5}}>
                <Text style={{fontSize: 14,fontWeight: 'bold',}}>Appolo Hospital</Text>
                <Text style={{fontSize: 14,}}>Pune</Text>
              </View>
            </View>
            <Text style={styles.buttonExp}>18 years exp</Text>
            <View style={{marginLeft:15}}>
              <Text style={{marginVertical:7}}>MBBS/MD </Text>
              <FontAwesome size={15} name="language"> <Text>English,Hindi </Text></FontAwesome>
            </View>
            <View style={{flexDirection: 'row',margin:10}}>
              <View style={{borderRadius: 5,borderWidth: 1,borderColor: '#555',flexDirection: 'row',padding:4,}}>
                <Text style={{fontSize: 13,color:'#555',textDecorationLine: 'line-through',paddingRight:5,marginRight:5,borderColor:'#555555',borderRightWidth:1}}><FontAwesome5 style={{marginRight:2}} size={12} name="rupee"></FontAwesome5>500</Text>
                <Text style={{fontSize: 13}}><FontAwesome5 style={{marginRight:2}} size={12} name="rupee"></FontAwesome5>500</Text>
              </View>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('LoginRegister')} style={{flexGrow:1,alignItems:"flex-end"}}>
                <LinearGradient colors={['#2ED2E5', '#6F78F7']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={styles.consultNow}>
                  <Text style={{ fontWeight:"600",color: '#fff'}}> Consult Now </Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.doctorDetails}>
          <View style={{width: '35%'}}>
          <Image source={require('../assets/nurse-2019420_1920.png')} style={styles.scrollImage} />
          <Text style={styles.buttonSpe}>Physicain</Text>
          </View>
          <View style={{width: '65%',}}>
            <View style={{flexDirection:'row'}}>
              <Text style={{fontSize: 18,marginLeft: 10,marginTop:5,fontWeight: 'bold',flexGrow:1,}}>Dr. Neena Gupta  </Text>
              <SimpleLineIcons style={{margin:10}} size={16} name="share"></SimpleLineIcons>
            </View>
            <View style={{borderRadius: 10,borderWidth: 1,marginHorizontal:10,borderColor: '#5ddceb',flexDirection: 'row',minHeight:50,padding:7}}>
              <Image source={require('../assets/favicon.png')} style={{width: 35,}} />
              <View style={{borderLeftWidth:1, borderColor:'#5ddceb',marginLeft:5,paddingLeft:5}}>
                <Text style={{fontSize: 14,fontWeight: 'bold',}}>Appolo Hospital</Text>
                <Text style={{fontSize: 14,}}>Pune</Text>
              </View>
            </View>
            <Text style={styles.buttonExp}>18 years exp</Text>
            <View style={{marginLeft:15}}>
              <Text style={{marginVertical:7}}>MBBS/MD </Text>
              <FontAwesome size={15} name="language"> <Text>English,Hindi </Text></FontAwesome>
            </View>
            <View style={{flexDirection: 'row',margin:10}}>
              <View style={{borderRadius: 5,borderWidth: 1,borderColor: '#555',flexDirection: 'row',padding:4,}}>
                <Text style={{fontSize: 13,color:'#555',textDecorationLine: 'line-through',paddingRight:5,marginRight:5,borderColor:'#555555',borderRightWidth:1}}><FontAwesome5 style={{marginRight:2}} size={12} name="rupee"></FontAwesome5>500</Text>
                <Text style={{fontSize: 13}}><FontAwesome5 style={{marginRight:2}} size={12} name="rupee"></FontAwesome5>500</Text>
              </View>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('LoginRegister')} style={{flexGrow:1,alignItems:"flex-end"}}>
                <LinearGradient colors={['#2ED2E5', '#6F78F7']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={styles.consultNow}>
                  <Text style={{ fontWeight:"600",color: '#fff'}}> Consult Now </Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
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
  doctorDetails:{
    borderRadius: 10,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.16,
    shadowRadius: 6,
    margin: 10,
    flexDirection: 'row'
  },
  sorFil:{
     borderRadius: 30,
     borderWidth: 1,
     paddingLeft: 8,
    paddingRight:6,
     paddingTop:1,
     paddingBottom:3,
     marginHorizontal:5
  },
  scrollImage:{
    height:'100%',
    width:'100%',
    borderTopLeftRadius:10,
    borderBottomLeftRadius:10,    
  },
  consultNow:{
    borderRadius:5,
    paddingHorizontal:8,
    paddingVertical:6,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.16,
    shadowRadius: 6,
  },
  buttonExp:{
    backgroundColor:'#5DDCEB',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    width: 100,
    fontSize:12,
    alignSelf:"center",
    textAlign:"center",
    color:'#ffffff',
    paddingTop:1,
    paddingBottom:4
  },
  buttonSpe:{
    backgroundColor: '#fff',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    zIndex:9,
    minWidth: 90,
    alignSelf:"center",
    textAlign:"center",
    padding:3,
    position:"absolute",
    bottom:0,
    fontWeight:'600'
  },
});