import React from "react";
import { StyleSheet, Text, View, Image, Dimensions, Button, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';


import { createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem, } from "@react-navigation/drawer";

import { ContactStackNavigator,MainStackNavigator } from "./StackNavigator";
import TabNavigator from "./TabNavigator";
import CustomComponent from "./CustomComponent";

// import { Icon } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';  
import Fontisto from 'react-native-vector-icons/Fontisto';  
import Feather from 'react-native-vector-icons/Feather';  


// import Icon from 'react-native-vector-icons/Ionicons';  




import GetStartedScreen from '../screens/GetStartedScreen'
import LoginRegisterScreen from '../screens/LoginRegisterScreen'
import VerifyOtpScreen from '../screens/VerifyOtpScreen'
import SetPasswordScreen from '../screens/SetPasswordScreen'
import EnterPasswordScreen from '../screens/EnterPasswordScreen'
import ResetPasswordScreen from '../screens/ResetPasswordScreen'
import Dashboard from '../screens/Dashboard'
import Dashboard1 from '../screens/Dashboard1'



const Drawer = createDrawerNavigator();


function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem label="Help" onPress={() => alert('Link to help')} />
    </DrawerContentScrollView>
  );
}

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="Home" drawerContent={props => <CustomComponent {...props} />}>
      {/*<Drawer.Screen name="Dashboard" component={TabNavigator} />*/}

      

      <Drawer.Screen name="Home" component={MainStackNavigator} 
      	options=
      	{{ 
            drawerIcon: config => <Icon
            size={23}         
            name="home">
            </Icon>
        }}


      	 />

      {/*<Drawer.Screen name="Consult Now" component={Dashboard1}
      	options=
      	{{ 
            drawerIcon: config => <Icon
            size={23}            
            name="stethoscope">
            </Icon>
        }}
      />

      <Drawer.Screen name="Book Health Packages" component={LoginRegisterScreen} 
      	options=
      	{{ 
            drawerIcon: config => <Fontisto
            size={23}            
            name="home">
            </Fontisto>
        }}
      />
      
      <Drawer.Screen name="Order Lab Test " component={VerifyOtpScreen} 
      	options=
      	{{ 
            drawerIcon: config => <Fontisto
            size={23}            
            name="laboratory">
            </Fontisto>
        }}
      />

      <Drawer.Screen name="Order Medicines" component={VerifyOtpScreen} 
      	options=
      	{{ 
            drawerIcon: config => <Icon
            size={23}            
            name="medkit">
            </Icon>
        }}
      />


      <Drawer.Screen name="Buy Subscription" component={LoginRegisterScreen} 
      	options=
      	{{ 
            drawerIcon: config => <Icon
            size={23}
            name="plus">
            </Icon>
        }}
      />

      <Drawer.Screen name="Health Files" component={VerifyOtpScreen} 
      	options=
      	{{ 
            drawerIcon: config => <Feather
            size={23}            
            name="file-plus">
            </Feather>
        }}
      />

      <Drawer.Screen name="Invoices" component={VerifyOtpScreen} 
      	options=
      	{{ 
            drawerIcon: config => <Icon
            size={23}
            name="file-code-o">
            </Icon>
        }}
      />
      
      <Drawer.Screen name="Settings" component={VerifyOtpScreen} 
      	options=
      	{{ 
            drawerIcon: config => <Feather
            size={23}            
            name="settings">
            </Feather>
        }}
      />
      
      <Drawer.Screen name="Privacy Policy" component={VerifyOtpScreen} 
      	options=
      	{{ 
            drawerIcon: config => <Feather
            size={23}            
            name="lock">
            </Feather>
        }}
      />
      
      <Drawer.Screen name="Terms & Conditions" component={VerifyOtpScreen} 
      	options=
      	{{ 
            drawerIcon: config => <Feather
            size={23}            
            name="file-text">
            </Feather>
        }}
      />
      
      <Drawer.Screen name="Logout" component={VerifyOtpScreen} 
      	options=
      	{{ 
            drawerIcon: config => <Feather
            size={23}           
            name="log-out">
            </Feather>
        }}
      />*/}
    
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;