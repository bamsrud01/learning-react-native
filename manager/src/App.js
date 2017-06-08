//  Import libraries
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';

//  Import components and reducers\
import LoginForm from './components/LoginForm';
import reducers from './reducers';

//  Create component
class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyDYvRk_3r8iHzthGgZvJxr6mFeD3kCky_A',
      authDomain: 'manager-544dd.firebaseapp.com',
      databaseURL: 'https://manager-544dd.firebaseio.com',
      projectId: 'manager-544dd',
      storageBucket: 'manager-544dd.appspot.com',
      messagingSenderId: '246178873814'
    };
  firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <LoginForm />
      </Provider>
    );
  }
}

//  Export component
export default App;
