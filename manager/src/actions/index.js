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