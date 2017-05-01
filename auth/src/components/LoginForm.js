//  Import libraries
import React, { Component } from 'react';
import { View } from 'react-native';

//  Import components
import { Button, Card, CardSection } from './common';

//  Create LoginForm component
class LoginForm extends Component {
  render() {
    return (
      <Card>
        <CardSection />
        <CardSection />
        <CardSection>
          <Button>
            Log In
          </Button>
        </CardSection>
      </Card>
    );
  }
}

//  Export component
export default LoginForm;
