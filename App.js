import React,{Component} from  'react';
import { StyleSheet, View, Image, Text, KeyboardAvoidingView, TextInput } from 'react-native';
import LoginForm from './LoginForm';

export default class app extends Component{
  render(){ return(
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <View style={styles.logoContainer}>
      <Image 
      style={styles.logo} 
      source={require('../my-app/images/login.png')}/>
      <Text style={styles.title}>Login Page</Text>
      </View>
      <View style={styles.formcontainer}>
        <LoginForm/>
      </View>
      </KeyboardAvoidingView>
  );
 }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3498db',
  },
  logoContainer:{
    alignItems:'center',
    flexGrow:1,
    justifyContent:'center'
  },
  logo:{
    width:100,
    height:100
  },
  title:{
    color:'#FFF',
    marginTop:10,
    width:160,
    textAlign:'center',
    opacity:0.9,
  }
});
