import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// import { MainStackNavigator, ContactStackNavigator } from "./StackNavigator";



import Dashboard from '../screens/Dashboard'
import Dashboard1 from '../screens/Dashboard1'

import ChooseDoctorScreen from '../screens/ChooseDoctorScreen'

import MessageRegisterScreen from '../screens/MessageRegisterScreen'
import AccountScreen from '../screens/AccountScreen'





import Icon from 'react-native-vector-icons/FontAwesome';  
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';  
import Feather from 'react-native-vector-icons/Feather';  



const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={ChooseDoctorScreen} options={{ 
        tabBarIcon : props => <SimpleLineIcons  
                     // style={{ paddingLeft: 10 }}                         
                     name="home"  
                     size={20}  
                />  
                
    	}}
    />

    <Tab.Screen name="Message" component={MessageRegisterScreen} options={{ 
        tabBarIcon : props => <Feather  
                     // style={{ paddingLeft: 10 }}                         
                     name="message-circle"  
                     size={40}  
                />  
                
    	}}
    />

    <Tab.Screen name="Account" component={AccountScreen} options={{ 
        tabBarIcon : props => <Icon  
                     // style={{ paddingLeft: 10 }}                         
                     name="user-o"  
                     size={20}  
                />  
                
    }}

    />

    </Tab.Navigator>
  );
};

export default BottomTabNavigator;