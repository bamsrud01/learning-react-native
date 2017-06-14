//  Import libraries
import React from 'react';
import { Scene, Router } from 'react-native-router-flux';

//  Import components
import LoginForm from './components/LoginForm';

//  Create component
const RouterComponent = () => {
  return (
    <Router>
      <Scene key="login" component={LoginForm} title="Please Login" />
    </Router>
  );
};

//  Export component
export default RouterComponent;
