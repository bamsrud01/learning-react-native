//  Import React and React Native libraries
    //  Destructure ReactNative import to specify needed properties
import React from 'react';
import { Text, AppRegistry } from 'react-native';

//  Create a Component (using arrow function)
const App = () => (
  <Text>Some text</Text>
);


//  Render component to device
    //  Name of the string in first argument must match the project name
    //  Use implicit return in arrow function to return app
AppRegistry.registerComponent('albums', () => App);

//  To run in Terminal, from project directory: react-native run-ios
