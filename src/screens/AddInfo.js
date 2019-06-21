import React, { PureComponent } from 'react';
import { Platform, StyleSheet, Text, View, ImageBackground, Dimensions, ActivityIndicator,Image, AsyncStorage, StatusBar, TouchableOpacity, FlatList, ScrollView } from 'react-native';
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
import name from '../assets/name.png';
import gender from '../assets/gender1.png';
import phone from '../assets/phone.png';
import age from '../assets/age.png';
import height1 from '../assets/height.png';
import weight from '../assets/weight.png';
import user from '../assets/user.png';
import close from '../assets/close.png';
import { TextField } from 'react-native-material-textfield';
import { bindActionCreators } from 'redux';
import * as counterActions from '../redux/actions/addDetails';
import { connect } from 'react-redux';
import URL from '../constants/constant';
var apiURL='';
class AddInfo extends PureComponent {
    constructor(props) {
        super(props);
        this.state = { name: '', gender: 'Male', user_email: '', height: '', weight: '',token:'',isLoading:false,phone:this.props.phoneNumber };
        AsyncStorage.getItem("full_name").then((value) => {
            this.setState({ name: value });
        })
        AsyncStorage.getItem("user_email").then((value) => {
           apiURL= URL+'users/updateuser/'+value;
        })
        AsyncStorage.getItem("token").then((value) => {
            this.setState({ token: value });
        })
    };
    navigateTo(screenName) {
        if (screenName == "Search Dietician") {
            screenName = "SearchDietician"
        }
        this.setState({ showMenu: false })
        Actions.push(screenName);
    }
    addInfo() {
        console.warn(apiURL)
        fetch(apiURL, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization':this.state.token
            },
            body: JSON.stringify({
                height: this.state.height,
                weight: this.state.weight,
                city: "",
                zipcode: "",
                state: "",
                country: "",
                hospital: "",

            }),
        }).then(response => response.json())
            .then((responseJson) => {
                console.warn(responseJson);
                this.setState({isLoading:true});
                if (responseJson.status == true) {
                    AsyncStorage.setItem('height',""+this.state.height);
                    AsyncStorage.setItem('weight',""+this.state.weight);
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
    render() {
        if(this.state.isLoading){
            return(
              <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
              <ActivityIndicator size="large" color="#DE1826" />
              </View>
              
            )
          }
        return (


            <View style={style.container}>
                <StatusBar backgroundColor={'#DE1826'} />
                <View style={{ width: width, height: 20 }} />
                <View style={{ flexDirection: 'row', width: width, height: HEADER_HEIGHT }}>
                    <Left style={{ flex: 0.1, justifyContent: 'center', alignItems: 'center' }}>

                    </Left>
                    <Body style={{ flex: 0.8, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ marginLeft: 0, fontFamily: 'ProductSans-Regular', fontSize: 22, color: '#202020' }}>Update Information</Text>
                    </Body>
                    <Right style={{ flex: 0.1, justifyContent: 'flex-end', alignItems: 'flex-end' }}>

                    </Right>

                </View>
                <ScrollView>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Card style={{ width: width - 30, height: 70, flexDirection: 'row', borderRadius: 15 }}>
                            <Left style={{ flex: 0.2, justifyContent: 'center', alignItems: 'center' }}>
                                <Image source={name} style={{ height: 30, width: 30 }} />
                            </Left>
                            <Body style={{ flex: 0.8, alignItems: 'center', justifyContent: 'center' }}>
                                <TextField
                                    label='Name'
                                    value={this.state.name}
                                    containerStyle={{ width: '90%', height: '90%', marginBottom: 15 }}
                                    onChangeText={(name) => this.setState({ name })}
                                    tintColor={'#DE1826'}
                                />

                            </Body>

                        </Card>
                        <Card style={{ width: width - 30, height: 70, flexDirection: 'row', borderRadius: 15, marginTop: 10 }}>
                            <Left style={{ flex: 0.2, justifyContent: 'center', alignItems: 'center' }}>
                                <Image source={gender} style={{ height: 30, width: 30 }} />
                            </Left>
                            <View style={{ flex: 0.8, alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                                <TouchableOpacity onPress={() => this.setState({ gender: 'Male' })} style={this.state.gender == "Male" ? styles.color : styles.noncolor}>
                                    <Text style={{ marginLeft: 0, fontFamily: 'ProductSans-Regular', fontSize: 16, color: '#202020' }}>Male</Text>
                                </TouchableOpacity>
                                <View style={{ width: '3%' }} />
                                <TouchableOpacity onPress={() => this.setState({ gender: 'Female' })} style={this.state.gender == "Female" ? styles.color : styles.noncolor}>
                                    <Text style={{ marginLeft: 0, fontFamily: 'ProductSans-Regular', fontSize: 16, color: '#202020' }}>Female</Text>
                                </TouchableOpacity>

                            </View>

                        </Card>
                        <Card style={{ width: width - 30, height: 70, flexDirection: 'row', borderRadius: 15, marginTop: 10 }}>
                            <Left style={{ flex: 0.2, justifyContent: 'center', alignItems: 'center' }}>
                                <Image source={phone} style={{ height: 30, width: 30 }} />
                            </Left>
                            <Body style={{ flex: 0.8, alignItems: 'center', justifyContent: 'center' }}>
                                <TextField
                                    label='Phone Number'
                                    value={this.state.phone}
                                    keyboardType={'numeric'}
                                    containerStyle={{ width: '90%', height: '90%', marginBottom: 15 }}
                                    onChangeText={(phone) => this.setState({ phone })}
                                    tintColor={'#DE1826'}
                                />

                            </Body>

                        </Card>
                        <Card style={{ width: width - 30, height: 70, flexDirection: 'row', borderRadius: 15, marginTop: 10 }}>
                            <Left style={{ flex: 0.2, justifyContent: 'center', alignItems: 'center' }}>
                                <Image source={phone} style={{ height: 30, width: 30 }} />
                            </Left>
                            <Body style={{ flex: 0.8, alignItems: 'center', justifyContent: 'center' }}>
                                <TextField
                                    label='Email Number'
                                    value={this.state.user_email}
                            
                                    containerStyle={{ width: '90%', height: '90%', marginBottom: 15 }}
                                    onChangeText={(user_email) => this.setState({ user_email })}
                                    tintColor={'#DE1826'}
                                />

                            </Body>

                        </Card>
                        <Card style={{ width: width - 30, height: 70, flexDirection: 'row', borderRadius: 15, marginTop: 10 }}>
                            <Left style={{ flex: 0.2, justifyContent: 'center', alignItems: 'center' }}>
                                <Image source={age} style={{ height: 30, width: 30 }} />
                            </Left>
                            <Body style={{ flex: 0.8, alignItems: 'center', justifyContent: 'center' }}>
                                <TextField
                                    label='Age'
                                    value={this.state.age}
                                    keyboardType={'numeric'}
                                    maxLength={2}
                                    containerStyle={{ width: '90%', height: '90%', marginBottom: 15 }}
                                    onChangeText={(age) => this.setState({ age })}
                                    tintColor={'#DE1826'}
                                />

                            </Body>

                        </Card>

                        <Card style={{ width: width - 30, height: 70, flexDirection: 'row', borderRadius: 15, marginTop: 10 }}>
                            <Left style={{ flex: 0.2, justifyContent: 'center', alignItems: 'center' }}>
                                <Image source={weight} style={{ height: 30, width: 30 }} />
                            </Left>
                            <Body style={{ flex: 0.8, alignItems: 'center', justifyContent: 'center' }}>
                                <TextField
                                    label='Weight (In Kgs)'
                                    value={this.state.weight}
                                    keyboardType={'numeric'}
                                    maxLength={2}
                                    containerStyle={{ width: '90%', height: '90%', marginBottom: 15 }}
                                    onChangeText={(weight) => this.setState({ weight })}
                                    tintColor={'#DE1826'}
                                />

                            </Body>

                        </Card>
                        <Card style={{ width: width - 30, height: 70, flexDirection: 'row', borderRadius: 15, marginTop: 10 }}>
                            <Left style={{ flex: 0.2, justifyContent: 'center', alignItems: 'center', marginBottom: 15 }}>
                                <Image source={height1} style={{ height: 30, width: 30 }} />
                            </Left>
                            <Body style={{ flex: 0.8, alignItems: 'center', justifyContent: 'center' }}>
                                <TextField
                                    label='Height (In cm)'
                                    value={this.state.height}
                                    keyboardType={'numeric'}
                                    maxLength={3}
                                    containerStyle={{ width: '90%', height: '90%', marginBottom: 15 }}
                                    onChangeText={(height) => this.setState({ height })}
                                    tintColor={'#DE1826'}
                                />

                            </Body>

                        </Card>
                    </View>

                </ScrollView>
                <TouchableOpacity onPress={() => this.addInfo()} style={{ width: width, height: 50, backgroundColor: '#DE1826', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ marginLeft: 0, fontFamily: 'ProductSans-Regular', fontSize: 18, color: '#fff' }}>Next</Text>
                </TouchableOpacity>

            </View>

        );
    }
}
const styles = StyleSheet.create({
    wrapper: {
    },
    color: {
        width: '45%',
        height: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#DE1826',
        borderWidth: 1
    },
    noncolor: {
        width: '45%',
        height: '60%',
        borderColor: '#dddddd',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
export default connect(state => ({
    state: state.details
}),
    (dispatch) => ({
        actions: bindActionCreators(counterActions, dispatch)
    })
)(AddInfo);