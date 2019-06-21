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
import settings from '../assets/settings.png';

export default class Explorer extends PureComponent {
    constructor(props) {
        super(props);
        this.state = { drawerOpen: null };
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
                        <Text style={{ marginLeft: 0, fontFamily: 'ProductSans-Regular', fontSize: 22, color: '#202020' }}>Explorer</Text>
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
                 
                 <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                 <View style={{width:'95%',justifyContent:'center',alignItems:'center',marginBottom:20}}>
                 <FlatList
                    data={[{key: 'a',title:'Home',icon:'home'}, {key: 'b',title:'Member Bookings',icon:'ios-calendar'},
                    {key: 'c',title:'Payments',icon:'ios-cash'},{key: 'd',title:'Friends & Family',icon:'ios-people'},{key: 'g',title:'Friends and Family',icon:'ios-people'},{key: 'e',title:'Activity',icon:'ios-paper'},{key: 'f',title:'Articles & Tips',icon:'ios-list'}]}
                    renderItem={({item}) =>
                  
                    <Card style={{width:width-30,height:70,flexDirection:'row',borderRadius:15}}>
                    <Left style={{flex:0.2,justifyContent:'center',alignItems:'center'}}>
                        <Icon name={item.icon} style={{fontSize:28,color:'#808080'}} />
                    </Left>
                    <Body style={{flex:0.6,justifyContent:'center',alignItems:'flex-start'}}>
                    <Text style={{ marginLeft: 0, fontFamily: 'ProductSans-Regular', fontSize: 16, color: '#202020' }}>{item.title}</Text>
                    </Body>
                    <Right style={{flex:0.2,justifyContent:'center',alignItems:'center'}}>
                        <Icon name="ios-arrow-forward" style={{fontSize:25,color:'blue'}} />
                    </Right>
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