import React from 'react';
import { Image ,StyleSheet, View } from 'react-native';


export default class Logo extends React.Component {
    render() {
        return (

            <View>
                <Image 
                    source = {require('./image/logo.png')} 
                    style = {{alignSelf: 'center'}}
                />
            </View>
            
        );
    }
}