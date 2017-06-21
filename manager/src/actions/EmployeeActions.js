//  Import types
import {
  EMPLOYEE_UPDATE
} from './types';

//  Create and export actions
export const employeeUpdate = ({ prop, value }) => {
  return {
    type: EMPLOYEE_UPDATE,
    payload: { prop, value }
  };
};
