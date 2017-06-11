//  Import libraries
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';

//  Import components and reducers\
import LoginForm from './components/LoginForm';
import reducers from './reducers';

//  Create component
class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyDYvRk_3r8iHzthGgZvJxr6mFeD3kCky_A',
      authDomain: 'manager-544dd.firebaseapp.com',
      databaseURL: 'https://manager-544dd.firebaseio.com',
      projectId: 'manager-544dd',
      storageBucket: 'manager-544dd.appspot.com',
      messagingSenderId: '246178873814'
    };
  firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    
    return (
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
  }
}

//  Export component
export default App;
