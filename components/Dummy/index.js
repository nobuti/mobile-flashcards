import React, { Component } from 'react';
import styled from 'styled-components/native';
import * as Colors from '../../utils/colors';

const View = styled.View`
  background-color: ${Colors.black};
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Text = styled.Text`
  color: ${Colors.white};
`;

export default class Dummy extends Component {
  render() {
    return (
      <View>
        <Text>
        {this.props.children}
        </Text>
      </View>
    );
  }
}
