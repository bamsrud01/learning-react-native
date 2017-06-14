//  Import libraries
import React from 'react';
import { Scene, Router } from 'react-native-router-flux';

//  Import components
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';

//  Create component
const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene key="login" component={LoginForm} title="Please Login" />
      <Scene key="employeeList" component={EmployeeList} title="Employees" />
    </Router>
  );
};

//  Export component
export default RouterComponent;
