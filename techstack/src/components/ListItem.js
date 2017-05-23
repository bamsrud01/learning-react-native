//  Import libraries
import React, { Component } from 'react';
import { Text } from 'react-native';

//  Import components
import CardSection from './common';

//  Create component
class ListItem extends Component {
  render() {
    return (
      <CardSection>
        <Text>{this.props.library.title}</Text>
      </CardSection>
    );
  }
}

//  Export component
export default ListItem;
