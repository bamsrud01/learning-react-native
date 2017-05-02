//  Import libraries
import React from 'react';
import { TextInput, View, Text } from 'react-native';

//  Create Input component
const Input = ({ label, value, onChangeText }) => {
  return (
    <View>
      <Text>{label}</Text>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        style={{ height: 20, width: 100 }}
      />
    </View>
  );
};

//  Export component
export { Input };
