//  Import libraries
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

//  Import types
import {
  EMPLOYEE_UPDATE,
  // EMPLOYEE_CREATE
} from './types';

//  Create and export actions
export const employeeUpdate = ({ prop, value }) => {
  return {
    type: EMPLOYEE_UPDATE,
    payload: { prop, value }
  };
};

export const employeeCreate = ({ name, phone, shift }) => {
  const { currentUser } = firebase.auth();

  return () => {
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
      .push({ name, phone, shift })
      .then(() => {
        Actions.employeeList({ type: 'reset' });
      });
  };
};
