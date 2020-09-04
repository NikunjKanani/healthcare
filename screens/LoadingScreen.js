import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
/*import firebase from 'firebase';
import Fire from '../Fire';*/

export default class LoadingScreen extends React.Component {

/*componentDidMount(){
	firebase.auth().onAuthStateChanged(user => {
		this.props.navigation.navigate(user ? "App" : "Auth");
	})
}*/

  render(){	
  return (
    <View style={styles.container}>
      <Text style={{ color:"#fff"}}>MedicareApp Loading....</Text>
      {/* <ActivityIndicator size="large"> </ActivityIndicator>	 */}
         
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#4267b2',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
