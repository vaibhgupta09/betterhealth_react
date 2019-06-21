import {AsyncStorage,BackHandler,Alert} from 'react-native';
import {Router,Stack,Scene,Actions} from 'react-native-router-flux';
import React from 'react';
import SplashScreen from './SplashScreen';
import LoginScreen from './LoginScreen';
import EmailLogin from './EmailLogin';
import Signup from './Signup';
import Verification from './Verification';
import Dashboard from './Dashboard';
import Timeline from './Timeline';
import Notifications from './Notifications';
import Events from './Events';
import Explorer from './Explorer';
import Tabs from './Tabs';
import AddGlass from './AddGlass';
import AddCalories from './AddCalories';
import SearchFood from './SearchFood';
import SearchDietician from './SearchDietician';
import ConnectTracker from './ConnectTracker';
import Settings from './Settings';
import AddInfo from './AddInfo';


onBackPress=()=>{
  console.log(Actions.currentScene);
  if (Actions.currentScene ==  "LoginScreen" || Actions.currentScene ==  "Tabs" || Actions.currentScene ==  "AddInfo") {
    Alert.alert(
        'Exit App',
        'Are sure want to exit', [{
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel'
        }, {
            text: 'OK',
            onPress: () => BackHandler.exitApp()
        }, ], {
            cancelable: false
        }
    )
    return true;
  }
  else{
    console.log('else');
    Actions.pop();
    return true;  
  }
}
 
const Routes = () => (
  <Router navigationBarStyle={{ backgroundColor: '#fff' }} backAndroidHandler={()=>this.onBackPress()} >
    <Stack key="root">
      <Scene key="SplashScreen" component={SplashScreen} hideNavBar initial  />
      <Scene key="LoginScreen" component={LoginScreen} hideNavBar   />
      <Scene key="EmailLogin" component={EmailLogin} hideNavBar />
      <Scene key="Signup" component={Signup} hideNavBar  />
      <Scene key="Verification" component={Verification} hideNavBar  />
      <Scene key="Dashboard" component={Dashboard} hideNavBar   />
      <Scene key="AddGlass" component={AddGlass} hideNavBar  />
      <Scene key="AddCalories" component={AddCalories} hideNavBar  />
      <Scene key="Timeline" component={Timeline} hideNavBar  />
      <Scene key="Notifications" component={Notifications} hideNavBar   />
      <Scene key="Events" component={Events} hideNavBar  />
      <Scene key="Explorer" component={Explorer} hideNavBar  />
      <Scene key="Tabs" component={Tabs} hideNavBar  />
      <Scene key="SearchFood" component={SearchFood} hideNavBar  />
      <Scene key="SearchDietician" component={SearchDietician} hideNavBar  />
      <Scene key="ConnectTracker" component={ConnectTracker} hideNavBar />
      <Scene key="Settings" component={Settings} hideNavBar />
      <Scene key="AddInfo" component={AddInfo} hideNavBar />
    </Stack>
  </Router>
);

export default Routes;