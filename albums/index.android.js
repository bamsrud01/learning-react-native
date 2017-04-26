//  This file is for Android

/*  MUST TEST IN ANDROID EMULATOR!!!  */

//  Import libraries
import React from 'react';
import { AppRegistry, View } from 'react-native';

//  Import album components
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

//  Create App component
const App = () => (
  //  Components must return a single top-level element
  //  Use headerText prop to dynamically change content of <Header>
  <View style={{ flex: 1 }}>
    <Header headerText={'Albums!'} />
    <AlbumList />
  </View>
);

//  Render component to device
AppRegistry.registerComponent('albums', () => App);
