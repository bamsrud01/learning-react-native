//  Import libraries
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

//  Import action
import { employeesFetch } from '../actions';

//  Create component
class EmployeeList extends Component {
  componentWillMount() {
    this.props.employeesFetch();
  }

  render() {
    return (
      <View>
        <Text>Employee List</Text>
      </View>
    );
  }
}

//  Export component
export default connect(null, { employeesFetch })(EmployeeList);
