//  Import action types
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED
} from '../actions/types';

//  Set initial state
const INITIAL_STATE = {
  email: '',
  password: ''
};

//  Create and export reducer
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    default:
      return state;
  }
};