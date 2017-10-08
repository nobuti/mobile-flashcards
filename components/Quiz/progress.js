import React, { Component } from 'react';
import { View, Animated, StyleSheet } from 'react-native';
import * as Colors from '../../utils/colors';

class ProgressBar extends Component {
  componentWillMount() {
    this.animation = new Animated.Value(this.props.progress);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.progress !== this.props.progress) {
      Animated.timing(this.animation, {
        toValue: this.props.progress,
        duration: this.props.duration
      }).start();
    }
  }

  render() {
    const {
      height,
      barColor,
      fillColor
    } = this.props;

    const widthInterpolated = this.animation.interpolate({
      inputRange: [0, 1],
      outputRange: ["0%", "100%"],
      extrapolate: "clamp"
    })

    return (
      <View style={{ height }}>
        <View
          style={[StyleSheet.absoluteFill, { backgroundColor: fillColor }]}
        />
        <Animated.View
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: widthInterpolated,
            backgroundColor: barColor
          }}
        />
      </View>
    )
  }
}

ProgressBar.defaultProps = {
  height: 5,
  barColor: Colors.yellow,
  fillColor: 'transparent',
  duration: 100
}

export default ProgressBar;