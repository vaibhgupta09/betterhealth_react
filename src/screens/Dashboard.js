import React, { PureComponent } from 'react';
import { Platform, StyleSheet, Text, View, ImageBackground, Dimensions, Image, AsyncStorage, StatusBar, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Icon, Left, Right, Body, Card, Header } from 'native-base'
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
import Menu from './Menu'
import LottieView from 'lottie-react-native';
import {
    LineChart,

} from 'react-native-chart-kit'
import Modal from 'react-native-modal';
import chat from '../assets/chat.png';
import noti from '../assets/noti.png';
import addblue from '../assets/addblue.png';
import addyellow from '../assets/addyellow.png';

import event from '../assets/event.png';
import place from '../assets/place.png';
import search from '../assets/search.png';
import recomd from '../assets/camera.png';
import user from '../assets/user.png';
import close from '../assets/close.png';
import menu from '../assets/menu.png';
import add from '../assets/add.png';
import card1 from '../assets/card1.png';
import card2 from '../assets/card3.png';
import card3 from '../assets/card.png';
import settings from '../assets/settings.png';
import trademill from '../assets/json/trademill.json';
import heartbeat from '../assets/json/heartbeat.json';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import * as Animatable from 'react-native-animatable';
import CalendarStrip from "react-native-calendar-strip";
import {bindActionCreators} from 'redux';
import * as counterActions from '../redux/actions/counterActions';
import { connect } from 'react-redux';
import moment from 'moment';
import URL from '../constants/constant';
 class Dashboard extends PureComponent {
    constructor(props) {
        super(props);
        this.state = { drawerOpen: null, showMenu: false, animation: 'slideInDown',selectedDate:'Today',showCalender:false };
        AsyncStorage.getItem("profilepictureUrl").then((value) => {
            this.setState({profilepictureUrl:value});
          })
        
    };
    componentWillMount()
    {

        AsyncStorage.getItem("token").then((value) => {
            fetch(URL+"services/getwatercount", {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization':value
                }
            })
        .then((response) => response.json())
        .then((responseJson) => {
          console.log(responseJson)
        })
        .catch((error) => {
          console.error(error);
        });
        })
       

    }
  navigateTo(screenName)
  {
      if(screenName=="Search Dietician")
      {
          screenName="SearchDietician"
      }
      this.setState({showMenu:false})
      Actions.push(screenName);
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
 compare(dateTimeA, dateTimeB) {
   
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
                        <TouchableOpacity onPress={()=>this.setState({showCalender:!this.state.showCalender})} style={{flexDirection:'row'}}>
                            <Text style={{ marginLeft: 0, fontFamily: 'ProductSans-Regular', fontSize: 22, color: '#202020' }}>{this.state.selectedDate}</Text>
                            <Icon name='ios-arrow-down' style={{fontSize:22,color:'#202020',marginLeft:10,marginTop:5}}/>
                            </TouchableOpacity>
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
                  
                    <View style={{ height: 180, width: width, flexDirection: 'row',justifyContent:'center' }}>
                        <View style={{ height: '100%', width: '30%', justifyContent: 'center', alignItems: 'center' }}>
                            <AnimatedCircularProgress
                                size={100}
                                width={7}
                                fill={30}
                                tintColor="#473AFF"
                                backgroundColor="#cccccc">
                                {
                                    (fill) => (
                                        <TouchableOpacity onPress={()=>Actions.push('AddCalories')}>
                                            <Text style={{ fontSize: 27, color: '#473AFF', fontFamily: 'ProductSans-Bold', textAlign: 'center' }}>
                                                220</Text>
                                            <Text  style={{ fontSize: 13, color: '#898989', fontFamily: 'ProductSans-Regular', textAlign: 'center' }}>
                                                of 2000</Text>
                                        </TouchableOpacity>

                                    )
                                }
                            </AnimatedCircularProgress>
                            <TouchableOpacity onPress={()=>Actions.push('AddCalories')} style={{flexDirection:'row', marginTop: 10}}>
                            <Image source={addblue} style={{width:22,height:22}}/>
                            <Text style={{ fontSize: 15, color: '#202020', fontFamily: 'ProductSans-Regular', textAlign: 'center',marginLeft:5,marginTop:2 }}>
                            Calories</Text>
                            </TouchableOpacity>
                           
                        </View>
                        <View style={{ height: '100%',marginLeft:'3%' ,width: '30%', justifyContent: 'center', alignItems: 'center' }}>
                            <AnimatedCircularProgress
                                size={100}
                                width={7}
                                fill={parseInt(this.props.state.count)*10}
                                tintColor="orange"
                                backgroundColor="#cccccc">
                                {
                                    (fill) => (
                                        <TouchableOpacity onPress={()=>Actions.push('AddGlass')}>
                                            <Text style={{ fontSize: 27, color: 'orange', fontFamily: 'ProductSans-Bold', textAlign: 'center' }}>
                                            {this.props.state.count}</Text>
                                            <Text style={{ fontSize: 13, color: '#898989', fontFamily: 'ProductSans-Regular', textAlign: 'center' }}>
                                                of 10</Text>
                                        </TouchableOpacity>

                                    )
                                }
                            </AnimatedCircularProgress>
                            <TouchableOpacity onPress={()=>Actions.push('AddGlass')} style={{flexDirection:'row', marginTop: 10}}>
                            <Image source={addyellow} style={{width:22,height:22}}/>
                            <Text style={{ fontSize: 15, color: '#202020', fontFamily: 'ProductSans-Regular', textAlign: 'center',marginLeft:5,marginTop:2 }}>
                            Glasses</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ height: '100%',marginLeft:'3%', width: '30%', justifyContent: 'center', alignItems: 'center' }}>
                            <AnimatedCircularProgress
                                size={100}
                                width={7}
                                fill={20}
                                tintColor="#3497FD"
                                backgroundColor="#cccccc">
                                {
                                    (fill) => (
                                        <TouchableOpacity onPress={()=>Actions.push('AddGlass')}>
                                            <Text style={{ fontSize: 27, color: '#3497FD', fontFamily: 'ProductSans-Bold', textAlign: 'center' }}>
                                           52</Text>
                                           
                                        </TouchableOpacity>

                                    )
                                }
                            </AnimatedCircularProgress>
                            <TouchableOpacity style={{flexDirection:'row', marginTop: 10}}>
                          
                            <Text style={{ fontSize: 15, color: '#202020', fontFamily: 'ProductSans-Regular', textAlign: 'center',marginLeft:5,marginTop:2 }}>
                            Cal Burned</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                    <TouchableOpacity onPress={()=>Actions.push('ConnectTracker')}  style={{ height: '5%', width: '100%', alignItems: 'center', flexDirection: 'row' }}>
                        <Image source={add} style={{ height: 30, width: 30, marginLeft: '5%' }} />
                        <Text style={{ fontSize: 17, color: '#202020', fontFamily: 'ProductSans-Regular', textAlign: 'center', marginLeft: 15 }}>
                            Connect to smart tracker</Text>

                    </TouchableOpacity>
                    <View style={{ width: width, justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
                        <View style={{ width: '100%', flexDirection: 'row' }}>
                            <View style={{ width: '50%', alignItems: 'center', height: 220 }}>
                                <Image style={{ height: 220, width: '100%', position: 'absolute' }} source={card1} />
                                <View style={{ width: '70%', height: '30%', flexDirection: 'row', marginTop: '15%' }}>
                                    <View style={{ width: 56, height: 56, backgroundColor: '#7189FF', justifyContent: 'center', alignItems: 'center', borderRadius: 28 }}>
                                        <Text style={{ fontSize: 22, color: 'white', fontFamily: 'ProductSans-Bold' }}>
                                            95</Text>
                                    </View>
                                    <LottieView source={trademill} autoPlay loop style={{ height: 80, width: 50 }} />
                                </View>
                                <View style={{ width: '70%', height: '23%', flexDirection: 'row', marginTop: 10 }}>

                                    <Text style={{ fontSize: 19, color: 'white', marginLeft: 5, fontFamily: 'ProductSans-Bold' }}>
                                        Steps</Text>

                                </View>
                                <View style={{ width: '70%', height: 2, backgroundColor: 'white' }} />
                                <View style={{ width: '70%', height: '20%', flexDirection: 'row', marginTop: 10 }}>

                                    <Text style={{ fontSize: 12, width: '60%', color: 'white', marginLeft: 0, fontFamily: 'ProductSans-Regular' }}>
                                        Total steps</Text>
                                    <Text style={{ fontSize: 12, color: 'white', marginLeft: 5, fontFamily: 'ProductSans-Regular' }}>
                                        Set goals</Text>

                                </View>




                            </View>
                            <View style={{ width: '50%', alignItems: 'center', height: 220 }}>
                                <Image style={{ height: 220, width: '100%', position: 'absolute' }} source={card2} />
                                <View style={{ width: '70%', height: '30%', flexDirection: 'row', marginTop: '15%' }}>
                                    <View style={{ width: 56, height: 56, backgroundColor: '#FF9292', justifyContent: 'center', alignItems: 'center', borderRadius: 28 }}>
                                        <Text style={{ fontSize: 22, color: 'white', fontFamily: 'ProductSans-Bold' }}>
                                            120</Text>
                                    </View>
                                    <View style={{ width: 56, height: 56, justifyContent: 'flex-end', alignItems: 'flex-end', }}>
                                        <LottieView source={heartbeat} autoPlay loop style={{ height: 25, width: 25, marginBottom: 10 }} />
                                    </View>

                                </View>
                                <View style={{ width: '70%', height: '23%', flexDirection: 'row', marginTop: 10 }}>

                                    <Text style={{ fontSize: 19, color: 'white', marginLeft: 5, fontFamily: 'ProductSans-Bold' }}>
                                        Calories</Text>

                                </View>
                                <View style={{ width: '70%', height: 2, backgroundColor: 'white' }} />
                                <View style={{ width: '70%', height: '20%', flexDirection: 'row', marginTop: 10 }}>

                                    <Text style={{ fontSize: 12, width: '60%', color: 'white', marginLeft: 0, fontFamily: 'ProductSans-Regular' }}>
                                        Total steps</Text>
                                    <Text style={{ fontSize: 12, color: 'white', marginLeft: 5, fontFamily: 'ProductSans-Regular' }}>
                                        Set goals</Text>

                                </View>

                            </View>

                        </View>
                        
                    </View>
                    <View style={{ width: width, justifyContent: 'center', alignItems: 'center', marginTop: 10,marginBottom:20 }}>
                           <View style={{width:'90%',height:170}}>
                           <Image source={card3} style={{height:170,width:'100%',resizeMode:'cover',borderRadius:20,position:'absolute'}}/>
                           <View style={{ width: '70%', height: '23%', flexDirection: 'row', marginTop: 20,marginLeft:20 }}>

                                <Text style={{ fontSize: 19, color: 'white', marginLeft: 5, fontFamily: 'ProductSans-Bold' }}>
                                    Statistics</Text>

                                </View>
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
    bottomModal: {
        justifyContent: 'flex-start',
        margin: 0,
        alignItems: 'center'

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
export default connect(state => ({
    state: state.counter
  
  }),

  )(Dashboard);