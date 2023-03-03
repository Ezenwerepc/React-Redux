import {configureStore} from '@reduxjs/toolkit';
import counterReducer from './counter';
import authReducer from './auth';

//const initialState = {counter:0, showCounter: true};


//const counterReducer = (state= initialState, action) => {
 //if (action.type === 'increment') {
  //return {
   //counter: state.counter + 1,
   //showCounter: state.showCounter
  //};
 //}

 //if (action.type === 'decrement') {
  //return {
   //counter: state.counter - 1,
   //showCounter: state.showCounter
  //};
 //}

 //if (action.type === 'increaseBy5') {
  //return {
   //counter: state.counter + action.amount,
   //showCounter: state.showCounter
  //};
 //}

 //if (action.type === 'toggle') {
  //return {
   //showCounter: !state.showCounter,
   //counter: state.counter
  //};
 //}
//return state;
//};

const store = configureStore({
 reducer:{counter: counterReducer, auth: authReducer},
});

 
 
export default store;