//  Import libraries
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

//  Create component
const Button = () => {
  const { buttonStyle, textStyle } = styles;

  return (
    <TouchableOpacity style={buttonStyle}>
      <Text style={textStyle}>
        Click me!!!
      </Text>
    </TouchableOpacity>
  );
};

//  Styling for Button component
const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',   //  Flexbox property, stretch to fill
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5
  }
};

//  Export component
export default Button;
