//  Import libraries
import React from 'react';
import { View, ActivityIndicator } from 'react-native';

//  Create Spinner component
const Spinner = ({ spinSize }) => {
  return (
    <View style={styles.spinnerStyle}>
      <ActivityIndicator size={spinSize || 'large'} />
    </View>
  );
};

//  Create styles
const styles = {
  spinnerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
};

//  Export component
export { Spinner };
