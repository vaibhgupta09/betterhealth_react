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
import CalendarStrip from "react-native-calendar-strip";
import moment from 'moment';

export default class AddCalories extends PureComponent {
    constructor(props) {
        super(props);

        this.state = { drawerOpen: null, showMenu: false,showBreakfast:false, animation: 'slideInDown', speed: 0, showCalender: false, selectedDate: "Today" };
    };
    checkDate(date)
    {
    
      const yourDate = new Date();
      var check = moment(date, 'YYYY/MM/DD');
  
      var month = check.format('MMMM');
      var day   = check.format('D');
      
      if(moment(yourDate).format("YYYY-MM-DD") === moment(date).format("YYYY-MM-DD"))
      {
          this.setState({selectedDate:'Today'});
      }
     
      else{
          this.setState({selectedDate:day+" "+month});
      }
      
      
    }
    render() {
        return (
            <ScrollView style={{ flex: 1, backgroundColor: '#eeeeee' }}>
                <View style={style.container}>
                    <StatusBar backgroundColor={'#DE1826'} />
                    <View style={{ width: width, height: 20, backgroundColor: '#DE1826' }} />
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
                            
                        <TouchableOpacity onPress={()=>this.setState({showCalender:!this.state.showCalender})} style={{flexDirection:'row'}}>
                            <Text style={{ marginLeft: 0, fontFamily: 'ProductSans-Regular', fontSize: 22, color: '#ffffff' }}>{this.state.selectedDate}</Text>
                            <Icon name='ios-arrow-down' style={{fontSize:22,color:'#ffffff',marginLeft:10,marginTop:5}}/>
                            </TouchableOpacity>
                          </Body>
                        <Right style={{ flex: 0.1, justifyContent: 'flex-end', alignItems: 'flex-end' }}>

                        </Right>

                    </View>
                    {this.state.showCalender ?
                        <CalendarStrip
                            calendarAnimation={{ type: 'sequence', duration: 100 }}
                            daySelectionAnimation={{ type: 'background', duration: 600, highlightColor: '#eeeeee' }}
                            style={{ height: 70, paddingTop: 10, paddingBottom: 10 }}
                            calendarHeaderStyle={{ color: '#202020' }}
                            calendarColor={'white'}
                            dateNumberStyle={{ color: '#898989' }}
                            dateNameStyle={{ color: '#898989' }}
                            highlightDateNameStyle={{ color: '#DE1826' }}
                            highlightDateNumberStyle={{ color: '#202020' }}
                            showMonth={false}
                            markedDatesStyle={{ borderRadius: 0 }}
                            onDateSelected={(date) => this.checkDate(date)}


                            // iconLeft={require('./img/left-arrow.png')}
                            // iconRight={require('./img/right-arrow.png')}
                            iconContainer={{ flex: 0.1 }}
                        />
                        : null}
                    <View style={{ width: width, height: 150, backgroundColor: '#DE1826', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                        <Image source={cal} style={{ width: 80, height: 80 }} />
                        <View>
                            <Text style={{ marginLeft: 20, fontFamily: 'ProductSans-Bold', fontSize: 28, color: '#ffffff' }}>0 of 2150 Cal</Text>
                            <TouchableOpacity style={{ width: '100%', height: 45, backgroundColor: 'white', borderRadius: 22, marginTop: 10, marginLeft: 10, justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ marginLeft: 0, fontFamily: 'ProductSans-Regular', fontSize: 18, color: '#DE1826' }}>My Diet Plan</Text>
                            </TouchableOpacity>

                        </View>


                    </View>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <View style={{ width: '95%', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>

                        <Card style={{ marginTop: 20, width: width - 30, borderRadius: 10}}>
                                  <View style={{width:'100%',marginTop:10,marginBottom:10,flexDirection:"row"}}>
                                        <TouchableOpacity onPress={()=>this.setState({showBreakfast:!this.state.showBreakfast})} style={{ width: '60%', justifyContent: 'center', alignItems: 'flex-start' }}>
                                            <Text style={{ marginLeft: 0, fontFamily: 'ProductSans-Regular', fontSize: 18, color: '#202020', marginLeft: 25 }}>Breakfast</Text>
                                           

                                        </TouchableOpacity>
                                        <Text style={{ marginLeft: 0, fontFamily: 'ProductSans-Regular', fontSize: 16, color: '#808080', marginTop: 5,marginRight:10 }}>0 of 210 Cal</Text>
                                        <TouchableOpacity onPress={() => Actions.push('SearchFood')} style={{ width: '10%', alignItems: 'center', justifyContent: 'center' }}>
                                            <Image source={plus} style={{ width: 30, height: 30 }} />
                                        </TouchableOpacity>
                                        </View>
                                      
                                        {this.state.showBreakfast?
                                          <FlatList
                                          data={[{key: 'a'}, {key: 'b'}]}
                                          renderItem={({item}) => 
                                          <View style={{width:'100%',marginTop:10,marginBottom:10,flexDirection:"row"}}>
                                        <TouchableOpacity style={{ width: '60%', justifyContent: 'center', alignItems: 'flex-start' }}>
                                            <Text style={{ marginLeft: 0, fontFamily: 'ProductSans-Regular', fontSize: 15, color: '#202020', marginLeft: 25 }}>Tawa Roti</Text>
                                            <Text style={{ marginLeft: 0, fontFamily: 'ProductSans-Regular', fontSize: 14, color: '#929292', marginLeft: 25,marginTop:5 }}>1 Roti</Text>

                                        </TouchableOpacity>
                                        <Text style={{ marginLeft: 0, fontFamily: 'ProductSans-Regular', fontSize: 16, color: '#808080', marginTop: 5,marginRight:10 }}>30 Cal</Text>
                                    
                                        </View>
                                      
                                      }
                                          />:null  
                                    
                                      }
                                    </Card>


                        </View>
                    </View>


                </View>
            </ScrollView>

        );
    }
}