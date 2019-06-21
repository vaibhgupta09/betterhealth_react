import React, { PureComponent } from 'react';
import { Platform, StyleSheet, Text, View, ImageBackground, Dimensions, Image, AsyncStorage, StatusBar, TouchableOpacity, FlatList, ScrollView } from 'react-native';
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
import glass from '../assets/glass.png';
import plus from '../assets/plus.png';
import minus from '../assets/minus.png';
import place from '../assets/place.png';
import search from '../assets/search.png';
import recomd from '../assets/camera.png';
import user from '../assets/user.png';
import cal from '../assets/cal.png';
import notification from '../assets/notification.png';
import LottieView from 'lottie-react-native';
import glassAnim from '../assets/json/glass.json';

export default class ConnectTracker extends PureComponent {
    constructor(props) {
        super(props);

        this.state = { drawerOpen: null, showMenu: false, animation: 'slideInDown', speed: 0 };
    };

    render() {
        return (
            <ScrollView style={{ flex: 1, backgroundColor: '#eeeeee' }}>
                <View style={style.container}>
                    <StatusBar backgroundColor={'#DE1826'} />
                    <View style={{ width: width, height: 20 }} />
                    <View style={{ flexDirection: 'row', width: width, height: HEADER_HEIGHT, backgroundColor: '#DE1826' }}>
                        <Left style={{ flex: 0.1, justifyContent: 'center', alignItems: 'center' }}>
                            <TouchableOpacity
                                onPress={() => Actions.pop()}
                                style={{ height: '100%', width: 32, justifyContent: 'center', alignItems: 'center' }}
                            >
                                <Icon name={'ios-arrow-round-back'} style={{ fontSize: 40, color: '#ffffff', marginLeft: 10 }} />
                            </TouchableOpacity>
                        </Left>
                        <Body style={{ flex: 0.8, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ marginLeft: 0, fontFamily: 'ProductSans-Regular', fontSize: 22, color: '#ffffff' }}>Today</Text>
                        </Body>
                        <Right style={{ flex: 0.1, justifyContent: 'flex-end', alignItems: 'flex-end' }}>

                        </Right>

                    </View>

                    <View style={{ width: width, height: 150, backgroundColor: '#DE1826', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                       
                            <Text style={{ marginLeft: 0, fontFamily: 'ProductSans-Bold', fontSize: 28, color: '#ffffff' }}>0 of 10,000 Cal</Text>
                    
                    </View>
                    <Text style={{ marginLeft: 0, fontFamily: 'ProductSans-Regular', fontSize: 18, color: '#202020',marginLeft:25 ,marginTop:20}}>Connect to Application</Text>
                    <View style={{ flex: 1, alignItems: 'center',justifyContent:'center'}}>
                            <View style={{ width: '95%',alignItems: 'center',justifyContent:'center',marginBottom:20 }}>
    
                               
                                <FlatList
                                    data={[{key: 'Google Fit'}, {key: 'Apple WatchKit'}]}
                                    renderItem={({item}) => 
                                    <Card style={{ marginTop: 20, height: 60, width: width-30, borderRadius: 10,flexDirection:'row' }}>
                                    <View style={{width:'20%',height:'100%',justifyContent:'center',alignItems:'center'}}>
                                    <Image source={plus} style={{width:50,height:50}}/>
                                
                                     </View>
                                     <View style={{width:'50%',height:'100%',justifyContent:'center',alignItems:'flex-start'}}>
                                     <Text style={{ marginLeft: 0, fontFamily: 'ProductSans-Regular', fontSize: 16, color: '#202020',marginLeft:0 }}>{item.key}</Text>
                                    
                                    
                                     </View>
                                     <TouchableOpacity onPress={()=>Actions.push('SearchFood')} style={{width:'30%',height:'100%',alignItems:'center',justifyContent:'center'}}>
                                     <Text style={{ marginLeft: 0, fontFamily: 'ProductSans-Regular', fontSize: 16, color: '#DE1826',marginLeft:0 }}>Connect</Text>
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