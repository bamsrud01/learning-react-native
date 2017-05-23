//  Import libraries
import React, { Component } from 'react';
import { Text } from 'react-native';

//  Import components
import { CardSection } from './common';

//  Create component
class ListItem extends Component {
  render() {
    const { titleStyle } = styles;
    return (
      <CardSection>
        <Text style={titleStyle}>
          {this.props.library.title}
        </Text>
      </CardSection>
    );
  }
}

//  Add styles
const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
}

//  Export component
export default ListItem;
