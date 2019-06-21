/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {PureComponent} from 'react';
import {Platform, StyleSheet, Text, View,ImageBackground,Dimensions,Image} from 'react-native';
import { Actions } from 'react-native-router-flux';


import Dashboard from './Dashboard';
import Timeline from './Timeline';
import Explorer from './Explorer';
import Profile from './Profile';

import { Icon } from "native-base";

var height = Dimensions.get('window').height;
var width = Dimensions.get('window').width;
import TabNavigator from 'react-native-tab-navigator';

export default class Tabs extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab:"Dashboard"
        };
        
      }
  render() {
    return (
     
        <TabNavigator tabBarStyle={{backgroundColor:'white',height:60}} >
        <TabNavigator.Item
          selected={this.state.selectedTab === 'Dashboard'}
          tabStyle={{backgroundColor:'white'}}
          renderIcon={() => <Icon name='home' style={{color:'#898989'}}/>}
          renderSelectedIcon={() => <Icon name='home' style={{color:'#DE1826'}}/>}
          title={'Dashboard'}
          titleStyle={{fontFamily:'ProductSans-Regular',color:'#898989',fontSize:15}}
          selectedTitleStyle={{fontFamily:'ProductSans-Regular',color:'#DE1826',fontSize:15}}
          onPress={() => this.setState({ selectedTab: 'Dashboard' })}>
          <Dashboard/>
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'Timeline'}
          tabStyle={{backgroundColor:'white'}}
          renderIcon={() => <Icon name='md-paper' style={{color:'#898989'}}/>}
          renderSelectedIcon={() => <Icon name='md-paper' style={{color:'#DE1826'}}/>}
          title={'Timeline'}
          titleStyle={{fontFamily:'ProductSans-Regular',color:'#898989',fontSize:15}}
          selectedTitleStyle={{fontFamily:'ProductSans-Regular',color:'#DE1826',fontSize:15}}
          onPress={() => this.setState({ selectedTab: 'Timeline' })}>
          <Timeline/>
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'Coach'}
          tabStyle={{backgroundColor:'white'}}
          renderIcon={() => <Icon name='md-person' style={{color:'#898989'}}/>}
          renderSelectedIcon={() => <Icon name='md-person' style={{color:'#DE1826'}}/>}
          title={'Coach'}
          titleStyle={{fontFamily:'ProductSans-Regular',color:'#898989',fontSize:15}}
          selectedTitleStyle={{fontFamily:'ProductSans-Regular',color:'#DE1826',fontSize:15}}
          onPress={() => this.setState({ selectedTab: 'Coach' })}>
          <Explorer/>
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'More'}
          tabStyle={{backgroundColor:'white'}}
          renderIcon={() => <Icon name='ios-more' style={{color:'#898989'}}/>}
          renderSelectedIcon={() => <Icon name='ios-more' style={{color:'#DE1826'}}/>}
          title={'More'}
          titleStyle={{fontFamily:'ProductSans-Regular',color:'#898989',fontSize:15}}
          selectedTitleStyle={{fontFamily:'ProductSans-Regular',color:'#DE1826',fontSize:15}}
          onPress={() => this.setState({ selectedTab: 'More' })}>
          <Profile/>
        </TabNavigator.Item>
       
       
      
      </TabNavigator>
     
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
