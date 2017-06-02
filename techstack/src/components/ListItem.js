//  Import libraries
import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';

//  Import components and actions
import { CardSection } from './common';
import * as actions from '../actions';

//  Create component
class ListItem extends Component {
  render() {
    const { titleStyle } = styles;
    console.log(this.props);
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
};

//  Export component
export default connect(null, actions)(ListItem);
