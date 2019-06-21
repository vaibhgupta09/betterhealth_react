
import React, { PureComponent } from 'react';
import { Platform, StyleSheet, Text, View, ImageBackground, Dimensions, Image, AsyncStorage, StatusBar, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
var height = Dimensions.get('window').height;
var width = Dimensions.get('window').width;
import style from '../stylesheet/Styles';
import fb from '../assets/fb.png'
import fruit from '../assets/diet.png'
const {
    height: SCREEN_HEIGHT,
} = Dimensions.get('window');
const IS_IPHONE_X = SCREEN_HEIGHT === 812 || SCREEN_HEIGHT === 896;
const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 44 : 20) : 0;
const HEADER_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 88 : 64) : 64;
const NAV_BAR_HEIGHT = HEADER_HEIGHT - STATUS_BAR_HEIGHT;
import Swiper from 'react-native-swiper';
import LinearGradient from 'react-native-linear-gradient';
import {Card,Left,Right,Body} from 'native-base'
export default class LoginScreen extends PureComponent {
  render() {
    return (
     
       
        <LinearGradient colors={['#f5f5f5', '#ffffff', '#f5f5f5']} style={{flex:1}} >
            <StatusBar backgroundColor={'#9f111b'} />
            <View style={{height:'80%',width:width}}>
            <Swiper autoplay={true} showsPagination={true} activeDotColor={'#9f111b'} >
             <View style={{justifyContent:'center',alignItems:'center',marginTop:'30%'}}>
             <View style={{flexDirection:'row'}}>
             <Text style={{fontFamily:'ProductSans-Bold',fontSize:27,color:'#202020',textAlign:'center'}}>Welcome to </Text>
             <Text style={{fontFamily:'ProductSans-Bold',fontSize:27,color:'#9f111b',textAlign:'center'}}> Better Health</Text>
             </View>
            
             <Image source={fruit} style={{height:200,width:200,resizeMode:'contain',marginTop:30}}/>
             <Text style={{fontFamily:'ProductSans-Regular',fontSize:18,color:'#808080',textAlign:'center',width:'80%',marginTop:20}}>Best way to manage your health and Diet</Text>
             </View>
             <View style={{justifyContent:'center',alignItems:'center',marginTop:'30%'}}>
             <View style={{flexDirection:'row'}}>
             <Text style={{fontFamily:'ProductSans-Bold',fontSize:27,color:'#202020',textAlign:'center'}}>Welcome to </Text>
             <Text style={{fontFamily:'ProductSans-Bold',fontSize:27,color:'#9f111b',textAlign:'center'}}> Better Health</Text>
             </View>
            
             <Image source={fruit} style={{height:200,width:200,resizeMode:'contain',marginTop:30}}/>
             <Text style={{fontFamily:'ProductSans-Regular',fontSize:18,color:'#808080',textAlign:'center',width:'80%',marginTop:20}}>Best way to manage your health and Diet</Text>
             </View>
             <View style={{justifyContent:'center',alignItems:'center',marginTop:'30%'}}>
             <View style={{flexDirection:'row'}}>
             <Text style={{fontFamily:'ProductSans-Bold',fontSize:27,color:'#202020',textAlign:'center'}}>Welcome to </Text>
             <Text style={{fontFamily:'ProductSans-Bold',fontSize:27,color:'#9f111b',textAlign:'center'}}> Better Health</Text>
             </View>
            
             <Image source={fruit} style={{height:200,width:200,resizeMode:'contain',marginTop:30}}/>
             <Text style={{fontFamily:'ProductSans-Regular',fontSize:18,color:'#808080',textAlign:'center',width:'80%',marginTop:20}}>Best way to manage your health and Diet</Text>
             </View>
             
           
           
             </Swiper>
            </View>
            <View style={{height:'20%',width:width,alignItems:'center'}}>
            <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.linearGradient}>
            <Image source={fb} style={{ width: 25, height: 25, marginRight: 15 }} />
                <Text style={styles.buttonText}>
                    Social Login
                </Text>
                </LinearGradient>
             <View style={{width:'90%',flexDirection:'row',marginTop:15}}>
             <Left>
             <Text style={{fontFamily:'ProductSans-Bold',fontSize:18,color:'#202020',textAlign:'center'}}>Signup</Text>
             </Left>
             <Right>
             <Text style={{fontFamily:'ProductSans-Bold',fontSize:18,color:'#9f111b',textAlign:'center'}}>Login</Text>
             </Right>
             </View>
            </View>

            </LinearGradient>


        
     
    );
  }
}
const styles = StyleSheet.create({
  wrapper: {
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
   fontFamily:'ProductSans-Bold'
  },
  linearGradient: {
   width:'90%',
    borderRadius: 25,
    height:50,
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'ProductSans-Regular',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
})



