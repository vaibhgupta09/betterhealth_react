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
import glassAdd from '../assets/glassFilled.png';
import search from '../assets/search.png';
import recomd from '../assets/camera.png';
import user from '../assets/user.png';
import close from '../assets/close.png';
import notification from '../assets/notification.png';
import LottieView from 'lottie-react-native';
import glassAnim from '../assets/json/glass.json';
import CalendarStrip from "react-native-calendar-strip";
import {bindActionCreators} from 'redux';
import * as counterActions from '../redux/actions/counterActions';
import { connect } from 'react-redux';
import moment from 'moment';
import URL from '../constants/constant';

class AddGlass extends PureComponent {
    constructor(props) {
        super(props);
   
        this.state = { drawerOpen: null, showMenu: false, animation: 'slideInDown',speed:0,showCalender:false,selectedDate:"Today"};
        AsyncStorage.getItem("token").then((value) => {
            this.setState({ token: value });
        })
    };

    addGlasstoServer() {
        const currentDate = new Date();
        fetch(URL+"services/userwatercount", {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization':this.state.token
            },
            body: JSON.stringify({
                userwaterIntake: {
                    "totalcount":this.props.state.count,
                    "date":currentDate
                },

            }),
        }).then(response => response.json())
            .then((responseJson) => {
                console.warn(responseJson);
                this.setState({isLoading:true});
                if (responseJson.status == true) {
                 
                    Actions.push('Tabs')
                }
                else {
                    Toast.show({
                        text: responseJson.message,
                        type: "danger"
                    });
                }
            })
            .catch(error => console.warn(error)) //to catch the errors if any}
    }
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
            <ScrollView style={{flex:1,backgroundColor:'#eeeeee'}}>
            <View style={style.container}>
                <StatusBar backgroundColor={'#DE1826'} />
                <View style={{ width: width, height: 20 ,backgroundColor:'#DE1826'}} />
                <View style={{ flexDirection: 'row', width: width, height: HEADER_HEIGHT ,backgroundColor:'#DE1826'}}>
                    <Left style={{ flex: 0.1, justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity
                            onPress={() => Actions.pop()}
                            style={{ height: '100%', width: 32, justifyContent: 'center', alignItems: 'center' }}
                        >
                        <Icon name={'ios-arrow-round-back'} style={{fontSize:40,color:'#ffffff',marginLeft:10}}/>
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
                {this.state.showCalender?
                          <CalendarStrip
                          calendarAnimation={{type: 'sequence', duration: 100}}
                          daySelectionAnimation={{type: 'background', duration: 600, highlightColor: '#eeeeee'}}
                          style={{height:70, paddingTop: 10, paddingBottom: 10}}
                          calendarHeaderStyle={{color: '#202020'}}
                          calendarColor={'white'}
                          dateNumberStyle={{color: '#898989'}}
                          dateNameStyle={{color: '#898989'}}
                          highlightDateNameStyle={{color:'#DE1826'}}
                          highlightDateNumberStyle={{color:'#202020'}}
                          showMonth={false}
                          markedDatesStyle={{borderRadius:0}}
                          onDateSelected={(date)=>this.checkDate(date)}
                          
                      
                          // iconLeft={require('./img/left-arrow.png')}
                          // iconRight={require('./img/right-arrow.png')}
                          iconContainer={{flex: 0.1}}
                      />
                        :null}
                <View style={{width:width,height:150,backgroundColor:'#DE1826',justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
                 <Image source={glass} style={{width:80,height:80}}/>
                 <Text style={{ marginLeft: 20, fontFamily: 'ProductSans-Bold', fontSize: 28, color: '#ffffff' }}>{this.props.state.count} of 10 Glasses</Text>
                 
                </View>
                <View style={{width:width,justifyContent:'center',alignItems:'center',flexDirection:'row',marginTop:'20%'}}>
                <TouchableOpacity onPress={()=>this.props.state.count>0?this.props.decrement():null}>
                 <Image source={minus} style={{width:50,height:50}}/>
                 </TouchableOpacity>
                 <Image source={glassAdd} style={{width:120,height:120,resizeMode:'contain'}}/>
                <TouchableOpacity onPress={()=>this.props.increment()}>
                 <Image source={plus} style={{width:50,height:50}}/>
                 </TouchableOpacity>
                </View>
                <View style={{width:width,justifyContent:'center',alignItems:'center',marginTop:10}}>
                <Text style={{  fontFamily: 'ProductSans-Regular', fontSize: 24, color: '#808080',marginBottom:20}}>1 Glass (250 ml)</Text>
                 <TouchableOpacity onPress={()=>this.addGlasstoServer()} style={{width:'50%',height:50,backgroundColor:'#DE1826',borderRadius:25,justifyContent:'center',alignItems:'center'}}>
                 <Text style={{ marginLeft: 0, fontFamily: 'ProductSans-Regular', fontSize: 20, color: '#ffffff' }}>Done</Text>
                 </TouchableOpacity>
                </View>
    
                </View>
          </ScrollView>
           
        );
    }
}
export default connect(state => ({
    state: state.counter
  
  }),
  (dispatch) => ({
    increment: () => { dispatch({ type: 'INCREMENT' }) },
    decrement: () => { dispatch({ type: 'DECREMENT' }) },
  })
  )(AddGlass);