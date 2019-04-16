import React, {Component} from 'react';
import {TextInput, Button, View, Text, StyleSheet} from 'react-native';
import AddItem from './addItem'

export default class SignUp extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    placeholder='Username'
                    autoCapitalize="none"
                    placeholderTextColor='#000'
                />
                <TextInput
                    style={styles.input}
                    placeholder='Password'
                    autoCapitalize="none"
                    placeholderTextColor='#000'
                />
                <TextInput
                    style={styles.input}
                    placeholder='Email'
                    autoCapitalize="none"
                    placeholderTextColor='#000'
                />
                <TextInput
                    style={styles.input}
                    placeholder='Phone'
                    autoCapitalize="none"
                    placeholderTextColor='#000'
                />
                <Button
                style={styles.signup}
                title='Sign Up'
                onPress={this.signUp}
                color="#000"
                onPress={()=>this.props.navigation.navigate('AddItem')}
              />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    input: {
      width: 350,
      height: 55,
      backgroundColor: '#fff',
      margin: 10,
      padding: 8,
      color: 'white',
      borderRadius: 14,
      fontSize: 18,
      fontWeight: '500',
      borderColor:'#000',
      borderWidth:1
    },
    container: {
      flex: 1,
    //   justifyContent: 'center',
      alignItems: 'center'
    },
    signup:{
      color:'#000'
    }

  })