//  Import libraries
import React from 'react';
import { Text } from 'react-native';

//  Import components
import Card from './Card';
import CardSection from './CardSection';

//  Create component (functional)
    //  Album information passed to component using props.album
const AlbumDetail = (props) => {
  return (
    <Card>
      <CardSection>
        <Text>{props.album.title}</Text>
      </CardSection>
    </Card>
  );
};

//  Export component
export default AlbumDetail;
