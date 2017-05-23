//  Import from redux
import { combineReducers } from 'redux';

//  Import reducers
import LibraryReducer from './LibraryReducer';
import SelectionReducer from './SelectionReducer';

export default combineReducers({
  //  libraries is a key in the store's state, with value from LibraryReducer
  //  { libraries: [{ id, title, description }] }
  libraries: LibraryReducer,
  selectedLibraryId: SelectionReducer
});
