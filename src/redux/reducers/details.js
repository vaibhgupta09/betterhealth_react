import * as types from '../actions/actionTypes';
import {AsyncStorage} from 'react-native';

const initialState = {
  user_email:'',
  first_name:'',
  last_name:'',
  mobile:'',
  socialprovider:'',
  profilepictureUrl:'',
  socialmediaId:'',
  height:'',
  weight:'',
  age:'',
  gender:'',
  token:''
 
};
var email='';
export default function details(state = initialState, action = {}) {
    AsyncStorage.getItem("first").then((value) => {
      email=value
    })
  switch (action.type) {
 
    case types.ADD_DETAILS:
      return {
        user_email:value
      };
    case types.DECREMENT:
      return {
       
        count: state.count - 1,
        cartText: 'Add to cart'
      };
    case types.CHANGETEXT:
    return{
      ...state,
      cartText:'Goto cart'
    } 
    case types.CHANGETEXT1:
    return{
      ...state,
      cartText:'Add to cart'
    } 
    default:
      return state;
  }
}
