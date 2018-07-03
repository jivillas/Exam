import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import Login from './Login';


export default class App extends React.Component {
    render() {
        return (

          <View style = {{flex: 1}}>
            <StatusBar barStyle = 'dark-content'/>
            <Login />
          </View>
          
        );
    }
}