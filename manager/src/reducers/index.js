//  Import libraries
import { combineReducers } from 'redux';

//  Import other reducers
import AuthReducer from './AuthReducer';

//  Export reducers
export default combineReducers({
  auth: AuthReducer
});
