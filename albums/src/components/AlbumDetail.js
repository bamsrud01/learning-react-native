//  Import libraries
import React from 'react';
import { View, Text } from 'react-native';

//  Create component (functional)
    //  Album information passed to component using props.album
const AlbumDetail = (props) => {
  return (
    <View>
      <Text>{props.album.title}</Text>
    </View>
  );
};

//  Export component
export default AlbumDetail;
