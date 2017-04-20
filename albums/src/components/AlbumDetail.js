//  Import libraries
import React from 'react';
import { Text, View, Image } from 'react-native';

//  Import components
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

//  Create component (functional)
    //  Album information passed to component using props.album
const AlbumDetail = ({ album }) => {
  const { title, artist, image, thumbnail_image } = album;
  const {
    thumbnailStyle,
    thumbnailContainerStyle,
    headerTextStyle,
    headerContentStyle,
    imageStyle
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
      <CardSection>
        <Image style={imageStyle} source={{ uri: image }} />
      </CardSection>
      <CardSection>
        <Button onPress={}/>
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
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
};

//  Export component
export default AlbumDetail;
