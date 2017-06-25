//  Import libriaries
import React, { Component } from 'react';
import { connect } from 'react-redux';

//  Import components
import { Card, CardSection, Button } from './common';
import EmployeeForm from './EmployeeForm';

//  Create component
class EmployeeEdit extends Component {
  render() {
    return (
      <Card>
        <EmployeeForm />
        <CardSection>
          <Button>
            Save Changes
          </Button>
        </CardSection>
      </Card>
    );
  }
}

//  Export component
export default connect()(EmployeeEdit);
