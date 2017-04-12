//  Import libraries
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

//  Create component (requires a render method returning JSX)
class AlbumList extends Component {
  //  This method will run when component is about to be rendered
  componentWillMount() {
    //  Axios method, returns a promise
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => console.log(response));
  }
  render() {
    return (
      <View>
        <Text>Album List!</Text>
      </View>
    );
  }
}

//  Export component
export default AlbumList;
