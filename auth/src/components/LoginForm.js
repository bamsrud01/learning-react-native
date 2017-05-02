//  Import libraries
import React, { Component } from 'react';

//  Import components
import { Button, Card, CardSection, Input } from './common';

//  Create LoginForm component
class LoginForm extends Component {
  state = { email: '' };

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            placeholder="user@gmail.com"
            label="Email"
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
          />
        </CardSection>

        <CardSection>

        </CardSection>

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
