import React, { PureComponent } from 'react';
import { Platform, StyleSheet, Text, View, ImageBackground, Dimensions, Image, AsyncStorage, StatusBar, TouchableOpacity, FlatList, ScrollView ,TextInput} from 'react-native';
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

export default class SearchFood extends PureComponent {
    constructor(props) {
        super(props);

        this.state = { drawerOpen: null, showMenu: false, animation: 'slideInDown', speed: 0 };
    };

    render() {
        return (
            <ScrollView style={{ flex: 1, backgroundColor: '#eeeeee' }}>
                <View style={style.container}>
                    <StatusBar backgroundColor={'#DE1826'} />
                    <View style={{ width: width, height: 20, backgroundColor: '#DE1826' }} />
                    <View style={{ flexDirection: 'row', width: width, height: HEADER_HEIGHT, backgroundColor: 'white' }}>
                        <Left style={{ flex: 0.1, justifyContent: 'center', alignItems: 'center' }}>
                            <TouchableOpacity
                                onPress={() => Actions.pop()}
                                style={{ height: '100%', width: 32, justifyContent: 'center', alignItems: 'center' }}
                            >
                                <Icon name={'ios-arrow-round-back'} style={{ fontSize: 40, color: '#202020', marginLeft: 10 }} />
                            </TouchableOpacity>
                        </Left>
                        <Body style={{ flex: 0.8,  alignItems: 'center' }}>
                        <TextInput
                                style={{height: 40,width:'100%',fontFamily:'ProductSans-Regular',fontSize:18,marginLeft:15}}
                                onChangeText={(text) => this.setState({text})}
                                value={this.state.text}
                                placeholder={'What did you have for breakfast?'}
                            />
                        </Body>
                        <Left style={{ flex: 0.1, justifyContent: 'center', alignItems: 'center' }}>
                            <TouchableOpacity
                                onPress={() => Actions.pop()}
                                style={{ height: '100%', width: '100%', justifyContent: 'center', alignItems: 'center' }}
                            >
                                <Icon name={'ios-search'} style={{ fontSize: 30, color: '#202020', marginRight: 10 }} />
                            </TouchableOpacity>
                        </Left>

                    </View>

                    <Text style={{ marginLeft: 0, fontFamily: 'ProductSans-Regular', fontSize: 18, color: '#202020',marginLeft:25 ,marginTop:20}}>Frequently tracked food</Text>
                    <View style={{ flex: 1, alignItems: 'center',justifyContent:'center'}}>
                            <View style={{ width: '95%',alignItems: 'center',justifyContent:'center',marginBottom:20 }}>
                           
                               
                                <FlatList
                                    data={[{key: 'a'}, {key: 'b'},{key: 'c'}, {key: 'd'}]}
                                    renderItem={({item}) => 
                                    <Card style={{ marginTop: 20, height: 80, width: width-30, borderRadius: 10,flexDirection:'row' }}>
                                     <View style={{width:'80%',height:'100%',justifyContent:'center',alignItems:'flex-start'}}>
                                     <Text style={{ marginLeft: 0, fontFamily: 'ProductSans-Regular', fontSize: 16, color: '#202020',marginLeft:25 }}>Banana,rip</Text>
                                     <Text style={{ marginLeft: 0, fontFamily: 'ProductSans-Regular', fontSize: 16, color: '#808080',marginLeft:25 ,marginTop:5}}>117 cal</Text>
                                    
                                     </View>
                                     <TouchableOpacity style={{width:'20%',height:'100%',alignItems:'center',justifyContent:'center'}}>
                                     <Image source={plus} style={{width:50,height:50}}/>
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