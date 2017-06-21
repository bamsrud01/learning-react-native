//  Import libraries
import { combineReducers } from 'redux';

//  Import other reducers
import AuthReducer from './AuthReducer';
import EmployeeFormReducer from './EmployeeFormReducer';

//  Export reducers
export default combineReducers({
  auth: AuthReducer,
  employeeForm: EmployeeFormReducer
});
