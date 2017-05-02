//  Import libraries
import React from 'react';
import { TextInput, View, Text } from 'react-native';

//  Create Input component
const Input = ({ label }) => {
  return (
    <View>
      <Text>{label}</Text>
    </View>
  );
};

//  Export component
export { Input };
