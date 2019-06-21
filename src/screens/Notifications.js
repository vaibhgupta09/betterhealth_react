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
import chat from '../assets/chat.png';
import noti from '../assets/noti.png';
import event from '../assets/event.png';
import place from '../assets/place.png';
import search from '../assets/search.png';
import recomd from '../assets/camera.png';
import user from '../assets/user.png';
import close from '../assets/close.png';
import notification from '../assets/notification.png';

export default class Notifications extends PureComponent {
    constructor(props) {
        super(props);
        this.state = { drawerOpen: null, showMenu: false, animation: 'slideInDown' };
    };

    render() {
        return (
            <ScrollView style={{flex:1,backgroundColor:'#eeeeee'}}>
            <View style={style.container}>
                <StatusBar backgroundColor={'#DE1826'} />
                <View style={{ width: width, height: 20 }} />
                <View style={{ flexDirection: 'row', width: width, height: HEADER_HEIGHT }}>
                    <Left style={{ flex: 0.1, justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity
                            onPress={() => Actions.pop()}
                            style={{ height: '100%', width: 32, justifyContent: 'center', alignItems: 'center' }}
                        >
                        <Icon name={'ios-arrow-round-back'} style={{fontSize:40}}/>
                        </TouchableOpacity>
                    </Left>
                    <Body style={{ flex: 0.8, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ marginLeft: 0, fontFamily: 'ProductSans-Regular', fontSize: 22, color: '#202020' }}>Notifications</Text>
                    </Body>
                    <Right style={{ flex: 0.1, justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                      
                    </Right>

                </View>
                 
                        <View style={{ flex: 1, alignItems: 'center',justifyContent:'center'}}>
                            <View style={{ width: '95%',alignItems: 'center',justifyContent:'center',marginBottom:20 }}>
    
                               
                                <FlatList
                                    data={[{key: 'a'}, {key: 'b'},{key: 'c'}, {key: 'd'}]}
                                    renderItem={({item}) => 
                                    <Card style={{ marginTop: 20, height: 80, width: width-30, borderRadius: 10,flexDirection:'row' }}>
                                     <View style={{width:'20%',height:'100%',justifyContent:'center',alignItems:'center'}}>
                                     <Image source={notification} style={{width:50,height:50}}/>
                                    
                                     </View>
                                     <View style={{width:'80%',height:'100%',alignItems:'center',justifyContent:'center'}}>
                                     <Text numberOfLines={2} style={{fontSize:14,color:'#808080',fontFamily:'ProductSans-Regular',marginLeft:5,marginRight:15}}>The Display Message link shows what is on the HTML tab for your Template in a browser window.  There isn't another link to pull from the Plain Text tab</Text>
                                     <Text numberOfLines={2} style={{fontSize:14,color:'#999999',fontFamily:'ProductSans-Regular',marginLeft:5,marginRight:15,marginTop:5,width:'90%'}}>
                                     5 June 2019 14:20
                                     </Text>
                                     </View>
                                   
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