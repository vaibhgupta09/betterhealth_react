import React, { PureComponent } from 'react';
import { Platform, StyleSheet, Text, View, ImageBackground, Dimensions, Image, AsyncStorage, StatusBar, TouchableOpacity, FlatList,ScrollView } from 'react-native';
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
import LottieView from 'lottie-react-native';
import {
    LineChart,

} from 'react-native-chart-kit'
import settings from '../assets/settings.png';
import card from '../assets/card.png';
import card2 from '../assets/card2.png';
import trademill from '../assets/json/trademill.json';
import heartbeat from '../assets/json/heartbeat.json';
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

export default class Timeline extends PureComponent {
    constructor(props) {
        super(props);
        this.state = { drawerOpen: null, showMenu: false, animation: 'slideInDown' };
        AsyncStorage.getItem("profilepictureUrl").then((value) => {
            this.setState({profilepictureUrl:value});
          })
    };
    navigateTo(screenName)
    {
        if(screenName=="Search Dietician")
        {
            screenName="SearchDietician"
        }
        this.setState({showMenu:false})
        Actions.push(screenName);
    }


    render() {
        return (
         
            <ScrollView>
            <View style={style.container}>
                <StatusBar backgroundColor={'#DE1826'} />
                <View style={{ width: width, height: 20 }} />
                <View style={{ flexDirection: 'row', width: width, height: HEADER_HEIGHT }}>
                    <Left style={{ flex: 0.15, justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity
                            onPress={() => this.setState({ showMenu: true })}
                            style={{ height: '100%', width: 32, justifyContent: 'center', alignItems: 'center' }}
                        >
                            <Image source={menu} style={{ height: 25, width: 25, resizeMode: 'contain', marginLeft: 15 }} />
                        </TouchableOpacity>
                    </Left>
                    <Body style={{ flex: 0.7, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ marginLeft: 0, fontFamily: 'ProductSans-Regular', fontSize: 22, color: '#202020' }}>Timeline</Text>
                    </Body>
                    <Right style={{ flex: 0.15, justifyContent: 'center', alignItems: 'center' }}>
                            <TouchableOpacity
                                onPress={() => Actions.pop()}
                                style={{ height: 32, width: 32 }}
                            >
                                <Icon name={'ios-search'} style={{ fontSize: 30, color: '#DE1826' }} />
                            </TouchableOpacity>
                        </Right>

                </View>
                 
                        <View style={{ flex: 1, alignItems: 'center',justifyContent:'center'}}>
                            <View style={{ width: '95%',alignItems: 'center',justifyContent:'center',marginBottom:20 }}>
    
                               
                                <FlatList
                                    data={[{key: 'a'}, {key: 'b'},{key: 'c'}, {key: 'd'}]}
                                    renderItem={({item}) => 
                                    <Card style={{ marginTop: 20, height: 250, width: width-30, borderRadius: 20 }}>
                                    <View style={{width:'100%',flexDirection:'row',height:'30%',marginTop:10}}>
                                     <Left style={{flex:0.5,alignItems:'center',flexDirection:'row'}}>
                                     <Image source={{uri:'https://i.imgur.com/9b2RCqO.jpg'}} style={{width:50,height:50,borderRadius:25,marginLeft:20}}/>
                                     <View>
                                     <Text style={{marginLeft:10,fontSize:16,color:'#191919',fontFamily:'ProductSans-Regular'}}>Leonel Messi</Text>
                                     <Text style={{marginLeft:10,fontSize:13,color:'#999999',fontFamily:'ProductSans-Regular'}}>5 Days Ago</Text>
                                     </View>
                                    
                                     </Left>
                                   
                                     <Right style={{flex:0.5}}>
                                     <Icon name='md-share' style={{fontSize:25,marginRight:20,color:'#808080'}}/>
                                     </Right>

                                    
                                    </View>
                                    <View style={{width:'90%',alignItems:'center',marginTop:3,marginLeft:20,marginRight:20}}>
                                    <Text numberOfLines={2} style={{fontSize:15,color:'#808080',fontFamily:'ProductSans-Regular'}}>The Display Message link shows what is on the HTML tab for your Template in a browser window.  There isn't another link to pull from the Plain Text tab</Text>
                                    <Image source={{uri:'https://i.imgur.com/h9a6nPt.jpg'}} style={{height:'55%',width:'100%',marginTop:10,borderRadius:10}}/>
                                    </View>
                                   
                                    </Card>
                                  }
                                    />
                               
                             
                            </View>
                        </View>
                        <Modal
                        isVisible={this.state.showMenu}
                        // onSwipeComplete={() => this.setState({ showLogin: null })}
                        // swipeDirection={['up', 'down']}
                        style={style.bottomModal}
                        transparent={true}
                        animationOut={'slideOutUp'}
                        animationIn={'slideInDown'}
                        animationOutTiming={1000}
                        backdropColor={'#ffffff'}
                        backdropOpacity={0.5}
                        onBackdropPress={() => this.setState({ showMenu: false, top: '47%', titleSize: 42, subSize: 16 })}
                    >
                        <View style={{ position: 'absolute', width: width }}>
                            <Animatable.View duration={600} animation='slideInDown' style={{ width: (width * 2.2), height: height / 1.3, backgroundColor: '#f24b56', borderBottomRightRadius: 250, position: 'absolute', right: 0 }} />
                            <Animatable.View duration={600} animation='slideInDown' delay={100} style={{ width: width * 2, height: height / 1.3, backgroundColor: '#DE1826', borderBottomRightRadius: width, position: 'absolute', right: 0, }}>
                                <View style={{ height: HEADER_HEIGHT }} />
                                <FlatList
                                    data={[{ key: 'Chats', icon: chat }, { key: 'Notifications', icon: noti }, { key: 'Events', icon: event },
                                    { key: 'Recommandations', icon: recomd }, { key: 'Food Places', icon: place }, { key: 'Search Dietician', icon: search } ,{ key: 'Settings', icon: settings }]}
                                    renderItem={({ item }) => <Animatable.View duration={1000} animation="slideInDown" style={{ justifyContent: 'flex-start', alignItems: 'flex-start', marginLeft: width, flexDirection: 'row' }}>
                                        <TouchableOpacity onPress={()=>this.navigateTo(item.key)} style={{flexDirection:'row'}}>
                                        <Image source={item.icon} style={{ height: 20, width: 20, marginLeft: 20, marginBottom: 30 }} />
                                        <Text style={{ fontSize: 20, color: 'white', fontFamily: 'ProductSans-Regular', textAlign: 'center', marginLeft: 20, marginBottom: 25 }}>
                                            {item.key}</Text>
                                            </TouchableOpacity>
                                    </Animatable.View>}
                                />
                                <Animatable.Image duration={1500} animation='slideInRight' source={{uri:this.state.profilepictureUrl}} style={{ position: 'absolute', height: 70, width: 70, borderRadius: 35, right: 30, top: 0, marginTop: HEADER_HEIGHT }} />
                            </Animatable.View>
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: (height / 1.3) + 30 }}>

                                <Animatable.View duration={1500} animation='slideInUp' delay={100} style={{ width: 40, height: 40, backgroundColor: '#fff', borderRadius: 20, position: 'absolute' }}>
                                    <TouchableOpacity onPress={() => this.setState({ showMenu: false, animation: 'slideOutUp', closeMenu: true })} style={{ height: '100%', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                                        <Image source={close} style={{ height: 40, width: 40 }} />
                                    </TouchableOpacity>
                                </Animatable.View>
                            </View>
                        </View>
                    </Modal>
                </View>
          </ScrollView>
           
        );
    }
}