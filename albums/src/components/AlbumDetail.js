//  Import libraries
import React from 'react';
import { Text, View } from 'react-native';

//  Import components
import Card from './Card';
import CardSection from './CardSection';

//  Create component (functional)
    //  Album information passed to component using props.album
const AlbumDetail = (props) => {
  return (
    <Card>
      <CardSection>
        <View>

        </View>
        <View style={styles.headerContentStyle}>
          <Text>{props.album.title}</Text>
          <Text>{props.album.artist}</Text>
        </View>
      </CardSection>
    </Card>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  }
};

//  Export component
export default AlbumDetail;
