//  Import types
import {
  EMPLOYEES_FETCH_SUCCESS
} from '../actions/types';

//  Create reducer
const INITIAL_STATE = {};

//  Export reducer
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEES_FETCH_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};
