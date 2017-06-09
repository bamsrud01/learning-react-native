//  Import action types
import { EMAIL_CHANGED } from './types';

//  Create and export actions
export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};
