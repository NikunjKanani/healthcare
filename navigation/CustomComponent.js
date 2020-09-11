import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Platform,
} from "react-native";



import ResetPasswordScreen from '../screens/ResetPasswordScreen'
import { ContactStackNavigator,MainStackNavigator } from "./StackNavigator";

import Icon from 'react-native-vector-icons/FontAwesome';  
import Fontisto from 'react-native-vector-icons/Fontisto';  
import Feather from 'react-native-vector-icons/Feather';  


export default class CustomComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.containertopRow}>
         
        <Image source={require('../assets/demopic.png')} style={styles.imageTopRow} />
          
          <Text style={styles.txtTop}>Alex  {"\n"}</Text>

          <Text style={styles.addMember}>   Add Member</Text>
          
        </View>

        <View style={styles.containerBottom}>

          <TouchableOpacity
            onPress={() => navigate('GetStartedScreen')}
            style={styles.containerBottomItem}
          >

            <View style={styles.button}>
            
            <Icon size={23} name="home"></Icon>
              <Text style={styles.txtBottom}>Home</Text>
            </View>

          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigate('Dashboard1')}
            style={styles.containerBottomItem}
          >
            <View style={styles.button}>
              <Icon
            size={23}            
            name="stethoscope">
            </Icon>
              <Text style={styles.txtBottom}>Consult Now</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigate('Details')}
            style={styles.containerBottomItem}
          >
            <View style={styles.button}>
              <Fontisto
            size={23}            
            name="home">
            </Fontisto>
              <Text style={styles.txtBottom}>Book Health Packages</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigate('Details')}
            style={styles.containerBottomItem}
          >
            <View style={styles.button}>
              <Fontisto
            size={23}            
            name="laboratory">
            </Fontisto>
              <Text style={styles.txtBottom}>Order Lab Test</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigate('Details')}
            style={styles.containerBottomItem}
          >
            <View style={styles.button}>
              <Icon
            size={23}            
            name="medkit">
            </Icon>
              <Text style={styles.txtBottom}>Order Medicines</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigate('Details')}
            style={styles.containerBottomItem}
          >
            <View style={styles.button}>
              <Icon
            size={23}
            name="plus">
            </Icon>
              <Text style={styles.txtBottom}>Buy Subscription</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigate('Details')}
            style={styles.containerBottomItem}
          >
            <View style={styles.button}>
              <Feather
            size={23}            
            name="file-plus">
            </Feather>
              <Text style={styles.txtBottom}>Health Files</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigate('Details')}
            style={styles.containerBottomItem}
          >
            <View style={styles.button}>
              <Icon
            size={23}
            name="file-code-o">
            </Icon>
              <Text style={styles.txtBottom}>Invoices</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigate('Details')}
            style={styles.containerBottomItem}
          >
            <View style={styles.button}>
              <Feather
            size={23}            
            name="settings">
            </Feather>
              <Text style={styles.txtBottom}>Settings</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigate('Details')}
            style={styles.containerBottomItem}
          >
            <View style={styles.button}>
              <Feather
            size={23}            
            name="lock">
            </Feather>
              <Text style={styles.txtBottom}>Privacy Policy</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigate('Details')}
            style={styles.containerBottomItem}
          >
            <View style={styles.button}>
             <Feather
            size={23}            
            name="file-text">
            </Feather>
              <Text style={styles.txtBottom}>Terms & Conditions</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigate('Details')}
            style={styles.containerBottomItem}
          >
            <View style={styles.button}>
             <Feather
            size={23}           
            name="log-out">
            </Feather>
              <Text style={styles.txtBottom}>Logout</Text>
            </View>
          </TouchableOpacity>



        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    marginTop: 30
  },
  containertopRow: {
    marginTop: 10,
    flexDirection: 'row',

    // marginLeft: 10,
    justifyContent: "flex-start",
    alignItems: 'flex-start'
  },

  txtTop:{
     // marginLeft: 10,
    justifyContent: "center",
    alignItems: 'center',
    color: 'red'

  },

  addMember:{
    borderRadius: 50,
    borderWidth: 2,
    width: 100,
    /*borderColor: 'Red',*/
    /*justifyContent: "flex-end",
    alignItems: 'flex-end',*/
    margin: 24,
    marginLeft: 0

    
    
  },

  txtBottom: {
    marginLeft: 10,
    color: 'black',
    fontSize: 15,
    fontWeight: '100'
  },
  imageTopRow: {

    borderRadius: 40,
    borderWidth: 3,
    borderColor: '#FFF',
    height: 80,
    marginBottom: 10,
    width: 80, 
    justifyContent: "center",
    alignItems: 'flex-start'


/*
    ...Platform.select({
      ios: {
        borderRadius: 80 / 2
      },
      android: {
        borderRadius: 80
      }
    })*/
  },
  icon: {
    height: 25,
    width: 25,
    marginRight: 10
  },
  button: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },

  containertopRowText: {
    flexDirection: 'column',
    marginLeft: 5
  },

  containerBottom: {
    backgroundColor: '#ffff'
  },
  containerBottomItem: {
    padding: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    borderBottomColor: '#E6FAFF',
    borderBottomWidth: 0.5
  }
});