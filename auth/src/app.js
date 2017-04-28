//  Import libraries
import React, { Component } from 'react';
import { View, Text } from 'react-native';

//  Import components from index.js
import { Header } from './components/common';


//  Create App component
class App extends Component {
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
