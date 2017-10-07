import React from 'react';
import { View, StatusBar } from 'react-native';
import { Constants } from 'expo';
import PropTypes from 'prop-types';

const Bar = ({color, ...props}) => {
  return (
    <View style={{backgroundColor: color, height: Constants.statusBarHeight}}>
      <StatusBar translucent backgroundColor={color} {...props} />
    </View>
  )
}

Bar.PropTypes = {
  color: PropTypes.string
}

export default Bar;