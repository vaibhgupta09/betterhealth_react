

import { StyleSheet } from 'react-native';
const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eeeeee'

  },
  containerCenter: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'

  },
  bottomModal: {
    justifyContent: 'flex-start',
    margin: 0,
    alignItems: 'center'

},
  menu: {
    flex: 1,
    width: window.width,
    height: window.height,
    backgroundColor: '#f9f5ed',
    padding: 20,
  },
  titleText: {
    fontSize: 22,
    color: '#191919',
    width: '80%',
    fontFamily: 'ProductSans-Bold',
    marginTop: '10%'
  },
  titleText1: {
    fontSize: 22,
    color: '#191919',
    width: '80%',
    fontFamily: 'ProductSans-Bold',
    marginTop: '5%'
  },
  subTitleText:{ fontSize: 14, color: '#191919', marginTop: 10, fontFamily: 'ProductSans-Regular' },
  textInputText:{height: 50,marginLeft:10,marginRight:10,fontFamily:'ProductSans-Regular',fontSize:16},
  normalText:{ fontSize: 18, color: '#fff', fontFamily: 'ProductSans-Regular' },
  boldnormalColorText:{ fontSize: 18, color: '#9f111b', fontFamily: 'ProductSans-Bold' }

});
export default style;