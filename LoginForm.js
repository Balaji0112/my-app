import React,{Component} from  'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text, StatusBar } from 'react-native';

export default class LoginForm extends Component{
    render(){
        return(
            <View style={Styles.container}>
                <StatusBar
                barStyle="light-content"
                />
                <TextInput
                placeholder="username or email"
                placeholderTextColor="rgba(255,255,255,0.7)"
                returnKeyType="next"
                onSubmitEditing={()=>this.passwordInput.focus()}
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="email-address"
                keyboardType="default"
                selectionColor={'red'}
                style={Styles.input}
                />
                <TextInput
                placeholder="password"
                placeholderTextColor="rgba(255,255,255,0.7)"
                returnKeyType="go"
                secureTextEntry
                style={Styles.input}
                ref={(input)=>this.passwordInput = input}
                />
                <TouchableOpacity style={Styles.buttonContainer}>
                    <Text style={Styles.buttonText}>Login</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const Styles=StyleSheet.create({
    container:{
        padding: 20
    },
    input:{
        height: 40,
        backgroundColor:'rgba(255,255,255,0.2)',
        marginBottom: 10,
        color:'#FFF',
        paddingHorizontal: 10
    },
    buttonContainer:{
        backgroundColor:'#2980b9',
        paddingVertical:15
    },
    buttonText:{
        textAlign:'center',
        color:'#FFFFFF',
        fontWeight:'700'
    }
}
)