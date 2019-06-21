
import React, { PureComponent } from 'react';
import { Platform, StyleSheet, Text, View, ImageBackground, Dimensions, Image, AsyncStorage, StatusBar, TouchableOpacity, FlatList,ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';
var height = Dimensions.get('window').height;
var width = Dimensions.get('window').width;
const {
    height: SCREEN_HEIGHT,
} = Dimensions.get('window');
const IS_IPHONE_X = SCREEN_HEIGHT === 812 || SCREEN_HEIGHT === 896;
const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 44 : 20) : 0;
const HEADER_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 88 : 64) : 64;
const NAV_BAR_HEIGHT = HEADER_HEIGHT - STATUS_BAR_HEIGHT;
import fruits from '../assets/fruits.png'
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
import edit from '../assets/edit.png';
import time from '../assets/time.png';
import heart from '../assets/heart.png';
import height1 from '../assets/height.png';
import weight from '../assets/weight.png';
import dob from '../assets/dob.png';
import gender from '../assets/gender.png';
import settings from '../assets/settings.png';

import close from '../assets/close.png';
import {
    Container,
    Header,
    Content,
    Card,
    Textarea,
    Form,
    Left,
    ScrollableTab,
    Body,
    Right,
    Tab, Tabs,
    Icon,
    Row,
    Toast,
    Button,
    Title,
} from "native-base";
import style from '../stylesheet/Styles';
import { TextField } from 'react-native-material-textfield';
export default class Profile extends PureComponent {
    constructor(props) {
        super(props);
        this.state = { drawerOpen: null, showMenu: false, animation: 'slideInDown',name:'',user_email:'',profilepictureUrl:'',height:'',weight:'' };

        AsyncStorage.getItem("full_name").then((value) => {
            this.setState({name:value});
          })
          AsyncStorage.getItem("user_email").then((value) => {
            this.setState({user_email:value});
          })
          AsyncStorage.getItem("height").then((value) => {
            this.setState({height:value});
          })
          AsyncStorage.getItem("weight").then((value) => {
            this.setState({weight:value});
          })
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
            <ScrollView style={{flex:1,backgroundColor:'#eeeeee'}}>
            <View style={style.container}>
                <StatusBar backgroundColor={'#DE1826'} />
                <View style={{ width: width, height: 20 }} />
                <View style={{ flexDirection: 'row', width: width, height: HEADER_HEIGHT }}>
                    <Left style={{ flex: 0.1, justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity
                            onPress={() => this.setState({ showMenu: true })}
                            style={{ height: '100%', width: 32, justifyContent: 'center', alignItems: 'center' }}
                        >
                            <Image source={menu} style={{ height: 25, width: 25, resizeMode: 'contain', marginLeft: 15 }} />
                        </TouchableOpacity>
                    </Left>
                    <Body style={{ flex: 0.8, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ marginLeft: 0, fontFamily: 'ProductSans-Regular', fontSize: 22, color: '#202020' }}>Profile</Text>
                    </Body>
                    <Right style={{ flex: 0.1, justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                      
                    </Right>

                </View>
                 
                 <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                 <View style={{width:'95%',justifyContent:'center',alignItems:'center',marginBottom:20}}>
                  <Card style={{width:width-30,height:250,borderRadius: 20,justifyContent:'center',alignItems:'center'}}>
                    <View style={{width:'100%',height:'60%',flexDirection:'row'}}>
                        <Left style={{flex:0.3,justifyContent:'center',alignItems:'flex-end'}}>
                        <Image  source={{uri:this.state.profilepictureUrl}} style={{height: 80, width: 80, borderRadius: 40 }} />
                        </Left>
                        <Body style={{flex:0.5,alignItems:'center'}}>
                        <Text style={{ marginLeft: 10,width:'99%' ,fontFamily: 'ProductSans-Regular', fontSize: 16, color: '#202020' }}>{this.state.name}</Text>
                        <Text style={{ marginLeft: 10,width:'99%', fontFamily: 'ProductSans-Regular', fontSize: 14, color: '#808080' }}>{this.state.user_email}</Text>
                        </Body>
                        <TouchableOpacity style={{flex:0.2,justifyContent:'center',alignItems:'center'}}>
                        <Image  source={edit} style={{height: 28, width: 28 }} />
                        </TouchableOpacity>
                    </View>
                    <View style={{width:'80%',height:0.5,backgroundColor:'#808080'}}/>
                    <View style={{width:'100%',height:'40%',flexDirection:'row'}}>
                        <View style={{width:'50%',height:'100%',justifyContent:'center',alignItems:'center'}}>
                          <View style={{flexDirection:'row'}}>
                           <Image source={time} style={{height:30,width:30}}/>
                           <View style={{marginLeft:10}}>
                               <Text style={{fontFamily:'ProductSans-Regular',fontSize:16,color:'#DE1826'}}>
                               60</Text>
                               <Text style={{fontFamily:'ProductSans-Regular',fontSize:14,color:'#808080'}}>
                               move minutes</Text>
                           </View>

                          </View>
                        
                        </View>
                        <View style={{width:'50%',height:'100%',justifyContent:'center',alignItems:'center'}}>
                          <View style={{flexDirection:'row'}}>
                           <Image source={heart} style={{height:30,width:30}}/>
                           <View style={{marginLeft:10}}>
                               <Text style={{fontFamily:'ProductSans-Regular',fontSize:16,color:'#DE1826'}}>
                               60</Text>
                               <Text style={{fontFamily:'ProductSans-Regular',fontSize:14,color:'#808080'}}>
                               heart points</Text>
                           </View>

                          </View>
                        
                        </View>
                    </View>
                  </Card>
                  <Text style={{ marginLeft: 15,marginTop:15, fontFamily: 'ProductSans-Regular', fontSize: 22, color: '#202020',width:'100%' }}>About you</Text>
                  <Card style={{width:width-30,height:200,marginTop:20,borderRadius: 20,justifyContent:'center',alignItems:'center'}}>
                   <View style={{width:width,height:'50%',flexDirection:'row'}}>
                      <View style={{width:'50%',height:'100%',justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
                      <Image source={gender} style={{height:30,width:30}}/>
                           <View style={{marginLeft:15}}>
                               <Text style={{fontFamily:'ProductSans-Regular',fontSize:16,color:'#202020'}}>
                               Gender</Text>
                               <Text style={{fontFamily:'ProductSans-Regular',fontSize:14,color:'#808080'}}>
                               Male</Text>
                           </View>

                      </View>
                     
                      <View style={{width:'50%',height:'100%',justifyContent:'flex-start',alignItems:'center',flexDirection:'row'}}>
                      <Image source={dob} style={{height:30,width:30,marginLeft:0}}/>
                           <View style={{marginLeft:15}}>
                               <Text style={{fontFamily:'ProductSans-Regular',fontSize:16,color:'#202020'}}>
                               Date of Birth</Text>
                               <Text style={{fontFamily:'ProductSans-Regular',fontSize:14,color:'#808080'}}>
                               25-02-2000</Text>
                           </View>

                      </View>
                   </View>
                   <View style={{width:width,height:'50%',flexDirection:'row'}}>
                      <View style={{width:'50%',height:'100%',justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
                      <Image source={weight} style={{height:30,width:30}}/>
                           <View style={{marginLeft:15}}>
                               <Text style={{fontFamily:'ProductSans-Regular',fontSize:16,color:'#202020'}}>
                               Weight</Text>
                               <Text style={{fontFamily:'ProductSans-Regular',fontSize:14,color:'#808080'}}>
                               {this.state.weight} Kg</Text>
                           </View>

                      </View>
                     
                      <View style={{width:'50%',height:'100%',justifyContent:'flex-start',alignItems:'center',flexDirection:'row'}}>
                      <Image source={height1} style={{height:30,width:30,marginLeft:0}}/>
                           <View style={{marginLeft:15}}>
                               <Text style={{fontFamily:'ProductSans-Regular',fontSize:16,color:'#202020'}}>
                               Height</Text>
                               <Text style={{fontFamily:'ProductSans-Regular',fontSize:14,color:'#808080'}}>
                               {this.state.height} cms</Text>
                           </View>

                      </View>
                   </View>
                  </Card>
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
        fontWeight: 'bold',
    }
})



