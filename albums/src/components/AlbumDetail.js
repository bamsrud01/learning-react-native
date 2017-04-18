//  Import libraries
import React from 'react';
import { Text, View, Image } from 'react-native';

//  Import components
import Card from './Card';
import CardSection from './CardSection';

//  Create component (functional)
    //  Album information passed to component using props.album
const AlbumDetail = ({ album }) => {
  const { title, artist, thumbnail_image } = album;
  const {
    thumbnailStyle,
    thumbnailContainerStyle,
    headerTextStyle,
    headerContentStyle
  } = styles;

  return (
    <Card>
      <CardSection>
        <View style={thumbnailContainerStyle}>
          <Image
            style={thumbnailStyle}
            source={{ uri: thumbnail_image }}
          />
        </View>
        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>
    </Card>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  }
};

//  Export component
export default AlbumDetail;
