//  Import libraries
import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { connect } from 'react-redux';

//  Import components and actions
import { CardSection } from './common';
import * as actions from '../actions';

//  Create component
class ListItem extends Component {
  render() {
    const { titleStyle } = styles;
    const { id, title } = this.props.library;

    return (
      <TouchableWithoutFeedback
        onPress={() => this.props.selectLibrary(id)}
      >
        <View>
          <CardSection>
            <Text style={titleStyle}>
              {title}
            </Text>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
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
