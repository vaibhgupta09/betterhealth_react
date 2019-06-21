import React, { PureComponent } from 'react';
import { Platform, StyleSheet, Text, View, ImageBackground, Logout,Dimensions, Image, Alert,AsyncStorage, StatusBar, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Icon, Left, Right, Body, Card } from 'native-base'
const {
    height: SCREEN_HEIGHT,
} = Dimensions.get('window');
const IS_IPHONE_X = SCREEN_HEIGHT === 812 || SCREEN_HEIGHT === 896;
const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 44 : 20) : 0;
const HEADER_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 88 : 64) : 64;
const NAV_BAR_HEIGHT = HEADER_HEIGHT - STATUS_BAR_HEIGHT;
var height = Dimensions.get('window').height;
var width = Dimensions.get('window').width;
import style from '../stylesheet/Styles';
import Drawer from 'react-native-drawer';
import Menu from './Menu'
import menu from '../assets/menu.png';
import * as Animatable from 'react-native-animatable';
import Modal from 'react-native-modal';
import chat from '../assets/chat.png';
import noti from '../assets/noti.png';
import event from '../assets/event.png';
import place from '../assets/place.png';
import search from '../assets/search.png';
import recomd from '../assets/camera.png';
import user from '../assets/user.png';
import close from '../assets/close.png';
import LoginScreen from './LoginScreen';
export default class Settings extends PureComponent {
    constructor(props) {
        super(props);
        this.state = { drawerOpen: null };
    };
    navigateTo(screenName)
    {
        if(screenName=="Search Dietician")
        {
            screenName="SearchDietician"
        }
        else if(screenName=="Logout")
        {
            Alert.alert(
                'Logout',
                'Are you sure want to logout?',
                [
                  {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                  },
                  {text: 'Logout', onPress: () => this.logout()},
                ],
                {cancelable: false},
              );
            
        }
        this.setState({showMenu:false})
        Actions.push(screenName);
    }
    logout()
    { 
        AsyncStorage.clear();
        Actions.push('LoginScreen');
    }

    render() {
        return (
            <ScrollView>
            <View style={style.container}>
                <StatusBar backgroundColor={'#DE1826'} />
                <View style={{ width: width, height: 20 }} />
                <View style={{ flexDirection: 'row', width: width, height: HEADER_HEIGHT }}>
                    <Left style={{ flex: 0.1, justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity
                                onPress={() => Actions.pop()}
                                style={{ height: '100%', width: 32, justifyContent: 'center', alignItems: 'center' }}
                            >
                                <Icon name={'ios-arrow-round-back'} style={{ fontSize: 40, color: '#202020', marginLeft: 10 }} />
                      </TouchableOpacity>
                    </Left>
                    <Body style={{ flex: 0.8, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ marginLeft: 0, fontFamily: 'ProductSans-Regular', fontSize: 22, color: '#202020' }}>Settings</Text>
                    </Body>
                    <Right style={{ flex: 0.1, justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                      
                    </Right>

                </View>
                 
                 <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                 <View style={{width:'95%',justifyContent:'center',alignItems:'center',marginBottom:20}}>
                 <FlatList
                    data={[{key: 'e',title:'Change Password',icon:'ios-paper'},{key: 'a',title:'Privacy & Policy',icon:'home'}, {key: 'b',title:'Terms & Condition',icon:'ios-calendar'},
                    {key: 'c',title:'About us',icon:'ios-cash'},{key: 'Logout',title:'Logout'}]}
                    renderItem={({item}) =>
                  
                    <Card style={{width:width-30,height:60,flexDirection:'row',borderRadius:15}}>
                     <TouchableOpacity onPress={()=>this.navigateTo(item.key)} style={{width:width-30,height:60,flexDirection:'row',borderRadius:15}}>
                    <Left style={{flex:0.1,justifyContent:'center',alignItems:'center'}}>
                        {/* <Icon name={item.icon} style={{fontSize:28,color:'#808080'}} /> */}
                    </Left>
                    <Body style={{flex:0.7,justifyContent:'center',alignItems:'flex-start'}}>
                    <Text style={{ marginLeft: 0, fontFamily: 'ProductSans-Regular', fontSize: 16, color: '#202020' }}>{item.title}</Text>
                    </Body>
                    <Right style={{flex:0.2,justifyContent:'center',alignItems:'center'}}>
                        <Icon name="ios-arrow-forward" style={{fontSize:25,color:'blue'}} />
                    </Right>
                    </TouchableOpacity>
                    </Card>
                    }
                    />
                 </View>
                
                 </View>
                      
               
                </View>
          </ScrollView>
        );
    }
}