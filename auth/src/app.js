//  Import libraries
import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';

//  Import components from index.js
import { Header, Button, CardSection, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

//  Create App component
class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDjzZXnXMonB6eHEX9tOBapZmN99vLxSg4',
      authDomain: 'authentication-babc2.firebaseapp.com',
      databaseURL: 'https://authentication-babc2.firebaseio.com',
      projectId: 'authentication-babc2',
      storageBucket: 'authentication-babc2.appspot.com',
      messagingSenderId: '445470958576'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <CardSection>
            <Button onPress={() => firebase.auth().signOut()}>
              Log Out
            </Button>
          </CardSection>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

//  Export App component
export default App;
