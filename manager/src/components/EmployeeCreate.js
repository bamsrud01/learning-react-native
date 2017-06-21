//  Import libraries
import React, { Component } from 'react';

//  Import components
import { Card, CardSection, Input, Button } from './common';

//  Create components
class EmployeeCreate extends Component {
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Name"
            placeholder="Jane"
          />
        </CardSection>

        <CardSection>
          <Input
            label="Phone"
            placeholder="111-555-1234"
          />
        </CardSection>

        <CardSection>
        </CardSection>

        <CardSection>
          <Button>
            Create
          </Button>
        </CardSection>
      </Card>
    );
  }
}

export default EmployeeCreate;
