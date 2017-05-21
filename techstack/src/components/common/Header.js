//  Import libraries
import React from 'react';
import { Text, View } from 'react-native';

//  Create components
const Header = (props) => {
  //  Destructure to reference only appropriate properties from styles object
  const { textStyle, viewStyle } = styles;
  //  Apply styles as props
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

//  Add styling
const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    //  Apply flexbox properties to center vertically and horizontally
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    //  Apply shadow as border on bottom of <View>
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20
  }
};

//  Make component available to the rest of app
export { Header };
