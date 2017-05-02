//  Import libraries
import React, { Component } from 'react';

//  Import components
import { Button, Card, CardSection, Input } from './common';

//  Create LoginForm component
class LoginForm extends Component {
  state = { text: '' };

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            value={this.state.text}
            onChangeText={text => this.setState({ text })}
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
