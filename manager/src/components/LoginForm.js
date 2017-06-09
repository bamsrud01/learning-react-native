//  Import libraries
import React, { Component } from 'react';

//  Import components
import { Card, CardSection, Input, Button } from './common';

//  Create component
class LoginForm extends Component {
  onEmailChange(text) {
    
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="email@gmail.com"
            onChangeText={this.onEmailChange.bind(this)}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            label="Password"
            placeholder="password"
          />
        </CardSection>

        <CardSection>
          <Button>
            Login
          </Button>
        </CardSection>
      </Card>
    );
  }
}

//  Export component
export default LoginForm;
