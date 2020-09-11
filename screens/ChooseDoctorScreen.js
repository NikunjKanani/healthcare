import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, Button, SafeAreaView, TextInput, TouchableOpacity,ScrollView } from 'react-native';


import { createStackNavigator } from 'react-navigation-stack';

import { Icon } from 'react-native-elements';

import Fontisto from 'react-native-vector-icons/Fontisto';  
import Feather from 'react-native-vector-icons/Feather';  
import FontAwesome from 'react-native-vector-icons/FontAwesome';  
import FontAwesome5 from 'react-native-vector-icons/FontAwesome';  
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';  


const { width, height } = Dimensions.get("screen");

export default class ChooseDoctorScreen extends React.Component{
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
            placeholder="Fever"
            
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

      <View style={styles.doctorContainer}>
        
        <View style={styles.topPart}> 
          <Text style={{color: '#000' , margin: 20}}> Doctor for <Text style={{ fontWeight: 'bold'}} >Fever </Text></Text>

          <Text style={styles.sorFil}> Sort   <Feather size={20} name="chevron-down"></Feather> </Text> 
          <Text style={styles.sorFil}> Filter <Feather size={20} name="chevron-down"></Feather> </Text> 
        
        </View>

        <View style={styles.doctorDetails}>

          <View style={{width: '30%'}}>
          
          <Image source={require('../assets/nurse-2019420_1920.png')} style={styles.scrollImage} />
          <Text style={styles.buttonSpe}> Physicain </Text>                  

          </View>

          <View style={{width: '70%',}}>  

            <View style={{flexDirection: 'row' }}>
              <Text style={{fontSize: 18,marginLeft: 10,fontWeight: 'bold'}}> Dr. Neena Gupta  </Text>          
              <SimpleLineIcons style={{marginLeft: '20%'}} size={20} name="share"></SimpleLineIcons> 

            </View>

            <View style={{borderRadius: 10,borderWidth: 2,margin: 10,borderColor: 'skyblue',flexDirection: 'row' }}>
              
              <Image source={require('../assets/favicon.png')} style={{height:50, width: 50,margin: 5,}} />
              <Text style={{fontSize: 12,fontWeight: 'bold'}}> Appolo Hospital {'\n'} Pune  </Text>          

            </View>
            <Text style={styles.buttonExp}> 18 years exp </Text>                  

            <View style={{marginLeft:15}}>
              
              <Text>MBBS/MD </Text> 

              <FontAwesome size={15} name="language"> <Text>English,Hindi </Text></FontAwesome>
            </View>

            <View style={{flexDirection: 'row',width: '25%' }}>
              
              <View style={{borderRadius: 5,borderWidth: 2,margin: 10,borderColor: 'skyblue',flexDirection: 'row',width: '100%' }}>
              
                <Text style={{fontSize: 12,fontWeight: 'bold'}}> 500  </Text>          
                <Text style={{fontSize: 12,fontWeight: 'bold'}}> 500  </Text> 

              </View>         

              <TouchableOpacity style= {styles.button} onPress={() => this.props.navigation.navigate('LoginRegister')} > 
                
                <Text style={{ fontWeight:"bold",color: '#fff'}}> Consult Now </Text>                  
                
              </TouchableOpacity>

            </View>

          </View>
        </View>

        <View style={styles.doctorDetails}>

          <View style={{width: '30%'}}>
          
          <Image source={require('../assets/nurse-2019420_1920.png')} style={styles.scrollImage} />
          <Text style={styles.buttonSpe}> Physicain </Text>                  

          </View>

          <View style={{width: '70%',}}>  

            <View style={{flexDirection: 'row' }}>
              <Text style={{fontSize: 18,marginLeft: 10,fontWeight: 'bold'}}> Dr. Neena Gupta  </Text>          
              <SimpleLineIcons style={{marginLeft: '20%'}} size={20} name="share"></SimpleLineIcons> 

            </View>

            <View style={{borderRadius: 10,borderWidth: 2,margin: 10,borderColor: 'skyblue',flexDirection: 'row' }}>
              
              <Image source={require('../assets/favicon.png')} style={{height:50, width: 50,margin: 5,}} />
              <Text style={{fontSize: 12,fontWeight: 'bold'}}> Appolo Hospital {'\n'} Pune  </Text>          

            </View>
            <Text style={styles.buttonExp}> 18 years exp </Text>                  

            <View style={{marginLeft:15}}>
              
              <Text>MBBS/MD </Text> 

              <FontAwesome size={15} name="language"> <Text>English,Hindi </Text></FontAwesome>
            </View>

            <View style={{flexDirection: 'row',width: '25%' }}>
              
              <View style={{borderRadius: 5,borderWidth: 2,margin: 10,borderColor: 'skyblue',flexDirection: 'row',width: '100%' }}>
              
                <Text style={{fontSize: 12,fontWeight: 'bold'}}> 500  </Text>          
                <Text style={{fontSize: 12,fontWeight: 'bold'}}> 500  </Text> 

              </View>         

              <TouchableOpacity style= {styles.button} onPress={() => this.props.navigation.navigate('LoginRegister')} > 
                
                <Text style={{ fontWeight:"bold",color: '#fff'}}> Consult Now </Text>                  
                
              </TouchableOpacity>

            </View>

          </View>
        </View>

        <View style={styles.doctorDetails}>

          <View style={{width: '30%'}}>
          
          <Image source={require('../assets/nurse-2019420_1920.png')} style={styles.scrollImage} />
          <Text style={styles.buttonSpe}> Physicain </Text>                  

          </View>

          <View style={{width: '70%',}}>  

            <View style={{flexDirection: 'row' }}>
              <Text style={{fontSize: 18,marginLeft: 10,fontWeight: 'bold'}}> Dr. Neena Gupta  </Text>          
              <SimpleLineIcons style={{marginLeft: '20%'}} size={20} name="share"></SimpleLineIcons> 

            </View>

            <View style={{borderRadius: 10,borderWidth: 2,margin: 10,borderColor: 'skyblue',flexDirection: 'row' }}>
              
              <Image source={require('../assets/favicon.png')} style={{height:50, width: 50,margin: 5,}} />
              <Text style={{fontSize: 12,fontWeight: 'bold'}}> Appolo Hospital {'\n'} Pune  </Text>          

            </View>
            <Text style={styles.buttonExp}> 18 years exp </Text>                  

            <View style={{marginLeft:15}}>
              
              <Text>MBBS/MD </Text> 

              <FontAwesome size={15} name="language"> <Text>English,Hindi </Text></FontAwesome>
            </View>

            <View style={{flexDirection: 'row',width: '25%' }}>
              
              <View style={{borderRadius: 5,borderWidth: 2,margin: 10,borderColor: 'skyblue',flexDirection: 'row',width: '100%' }}>
              
                <Text style={{fontSize: 12,fontWeight: 'bold'}}> 500  </Text>          
                <Text style={{fontSize: 12,fontWeight: 'bold'}}> 500  </Text> 

              </View>         

              <TouchableOpacity style= {styles.button} onPress={() => this.props.navigation.navigate('LoginRegister')} > 
                
                <Text style={{ fontWeight:"bold",color: '#fff'}}> Consult Now </Text>                  
                
              </TouchableOpacity>

            </View>

          </View>
        </View>

        <View style={styles.doctorDetails}>

          <View style={{width: '30%'}}>
          
          <Image source={require('../assets/nurse-2019420_1920.png')} style={styles.scrollImage} />
          <Text style={styles.buttonSpe}> Physicain </Text>                  

          </View>

          <View style={{width: '70%',}}>  

            <View style={{flexDirection: 'row' }}>
              <Text style={{fontSize: 18,marginLeft: 10,fontWeight: 'bold'}}> Dr. Neena Gupta  </Text>          
              <SimpleLineIcons style={{marginLeft: '20%'}} size={20} name="share"></SimpleLineIcons> 

            </View>

            <View style={{borderRadius: 10,borderWidth: 2,margin: 10,borderColor: 'skyblue',flexDirection: 'row' }}>
              
              <Image source={require('../assets/favicon.png')} style={{height:50, width: 50,margin: 5,}} />
              <Text style={{fontSize: 12,fontWeight: 'bold'}}> Appolo Hospital {'\n'} Pune  </Text>          

            </View>
            <Text style={styles.buttonExp}> 18 years exp </Text>                  

            <View style={{marginLeft:15}}>
              
              <Text>MBBS/MD </Text> 

              <FontAwesome size={15} name="language"> <Text>English,Hindi </Text></FontAwesome>
            </View>

            <View style={{flexDirection: 'row',width: '25%' }}>
              
              <View style={{borderRadius: 5,borderWidth: 2,margin: 10,borderColor: 'skyblue',flexDirection: 'row',width: '100%' }}>
              
                <Text style={{fontSize: 12,fontWeight: 'bold'}}> 500  </Text>          
                <Text style={{fontSize: 12,fontWeight: 'bold'}}> 500  </Text> 

              </View>         

              <TouchableOpacity style= {styles.button} onPress={() => this.props.navigation.navigate('LoginRegister')} > 
                
                <Text style={{ fontWeight:"bold",color: '#fff'}}> Consult Now </Text>                  
                
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
    /*alignItems: 'flex-end',
    justifyContent: 'flex-end',*/
    margin: 2,
    

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

  doctorContainer:{

  },

  doctorDetails:{
    borderRadius: 10,
    borderWidth: 0.5,
    margin: 10,
    flexDirection: 'row'  


  },

  sorFil:{
     margin: 20,
     borderRadius: 30,
     borderWidth: 1,
     textAlign: 'center', 
     paddingLeft: 5
  },

  scrollImage:{
    height:200,
    width:100,

    margin: 3
  },


  button:{
    // marginHorizontal: 120,
    /*marginTop: 50,*/
    backgroundColor: 'lightblue',
    borderRadius: 10,
    height: 30,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center'    
  },

  buttonExp:{
    backgroundColor: 'lightblue',
    borderRadius: 10,
    height: 20,
    width: 100,
    marginLeft: 70,
    marginTop: -10,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center'    
  },

  buttonSpe:{
    backgroundColor: '#fff',
    borderRadius: 10,
    height: 20,
    width: 80,
    marginLeft: 15,
    marginTop: -20,
    alignItems: 'center',
    justifyContent: 'center'    
  },

 
});
