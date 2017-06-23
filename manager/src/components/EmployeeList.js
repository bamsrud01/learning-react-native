//  Import libraries
import React, { Component } from 'react';
import { ListView, View, Text } from 'react-native';
import { connect } from 'react-redux';

//  Import action
import { employeesFetch } from '../actions';

//  Create component
class EmployeeList extends Component {
  componentWillMount() {
    this.props.employeesFetch();

    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }

  createDataSource({ employees }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(employees);
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
