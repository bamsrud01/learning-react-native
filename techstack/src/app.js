//  Import libraries
import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

//  Import components and files
import reducers from './reducers';

//  Create App component
const App = () => {
  return (
    <Provider store={createStore(reducers)}>
      <View />
    </Provider>
  );
};

//  Export component
export default App;
