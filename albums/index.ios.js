//  With React Native, only a single component is created per file.
    //  Others in src/components

//  Import React and React Native libraries
    //  Destructure ReactNative import to specify needed properties
import React from 'react';
import { AppRegistry } from 'react-native';

//  Import album components
import Header from './src/components/header';

//  Create a Component (using arrow function)
const App = () => (
  <Header />
);


//  Render component to device
    //  Name of the string in first argument must match the project name
    //  Use implicit return in arrow function to return app
AppRegistry.registerComponent('albums', () => App);

//  To run in Terminal, from project directory: react-native run-ios
