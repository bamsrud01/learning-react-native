//  Import libraries
import firebase from 'firebase';

//  Import action types
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED
} from './types';

//  Create and export actions
export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};

export const loginUser = ({ email, password }) => {
  return (dispatch) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => console.log(user));
  };
};
