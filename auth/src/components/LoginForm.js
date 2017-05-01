//  Import libraries
import React, { Component } from 'react';
import { TextInput } from 'react-native';

//  Import components
import { Button, Card, CardSection } from './common';

//  Create LoginForm component
class LoginForm extends Component {
  state = { text: '' };

  render() {
    return (
      <Card>
        <CardSection>
          <TextInput
            value={this.state.text}
            onChangeText={text => this.setState({ text })}
            style={{ height: 20, width: 100 }}
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
