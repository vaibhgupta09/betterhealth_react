
import React, { PureComponent } from 'react';
import { Platform, StyleSheet, Text, View, ImageBackground, Dimensions, Image, AsyncStorage, StatusBar } from 'react-native';
import { Actions } from 'react-native-router-flux';

var height = Dimensions.get('window').height;
var width = Dimensions.get('window').width;
import style from '../stylesheet/Styles';
import tree from '../assets/json/tree';
import logo from '../assets/logo.png'
export default class SplashScreen extends PureComponent {

  componentDidMount() {
    setTimeout(() => {
      AsyncStorage.getItem("token").then((value) => {
       if(value==null)
       {
        Actions.push('LoginScreen')
       }
       else{
        Actions.push('Tabs')
       }
    })
      
    }, 2000)

  }

  render() {
    return (
      <View style={style.containerCenter}>
        <StatusBar translucent={true} backgroundColor={'transparent'} />
        <Image source={logo} style={{ height: 100, width: width / 1.3, resizeMode: 'contain' }} />
      </View>
    );
  }
}


