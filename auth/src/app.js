//  Import libraries
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';

//  Import components from index.js
import { Header } from './components/common';

//  Create App component
class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDjzZXnXMonB6eHEX9tOBapZmN99vLxSg4',
      authDomain: 'authentication-babc2.firebaseapp.com',
      databaseURL: 'https://authentication-babc2.firebaseio.com',
      projectId: 'authentication-babc2',
      storageBucket: 'authentication-babc2.appspot.com',
      messagingSenderId: '445470958576'
  });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <Text>An App!</Text>
      </View>
    );
  }
}

//  Export App component
export default App;
