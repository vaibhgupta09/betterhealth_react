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

export default class Events extends PureComponent {
    constructor(props) {
        super(props);
        this.state = { drawerOpen: null };
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
                        <Text style={{ marginLeft: 0, fontFamily: 'ProductSans-Regular', fontSize: 22, color: '#202020' }}>Events</Text>
                    </Body>
                    <Right style={{ flex: 0.1, justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                      
                    </Right>

                </View>
                 
                        <View style={{ flex: 1, alignItems: 'center',justifyContent:'center'}}>
                            <View style={{ width: '95%',alignItems: 'center',justifyContent:'center',marginBottom:20 }}>
    
                               
                                <FlatList
                                    data={[{key: 'a'}, {key: 'b'},{key: 'c'}, {key: 'd'}]}
                                    renderItem={({item}) => 
                                    <View style={{ marginTop: 20, height: 200, width: width-30, borderRadius: 10,justifyContent:'center',alignItems:'center' }}>
                                    <Image source={{uri:'https://i.imgur.com/8h3JdK9.jpg'}} style={{width:'100%',height:200,borderRadius:10,position:'absolute'}}/>
                                    <View style={{width:'100%',height:200,borderRadius:10,backgroundColor:'black',opacity:0.6,position:'absolute'}}/>
                                    <Text style={{ marginLeft: 0, fontFamily: 'ProductSans-Bold', fontSize: 32, color: '#ffffff' }}>Marathon</Text>
                                   
                                    </View>
                                  }
                                    />
                               
                             
                            </View>
                        </View>
                  

                      
                </View>
          </ScrollView>
        );
    }
}