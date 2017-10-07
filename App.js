import React, { Component } from 'react';
import styled from 'styled-components/native';

import * as Colors from './utils/colors';
import StatusBar from './components/StatusBar';
import Navigation from './components/Navigation';

const Container = styled.View`
    flex: 1;
    background-color: ${Colors.black};
`;

export default class App extends Component {
  render() {
    return (
      <Container>
        <StatusBar backgroundColor={Colors.black} barStyle='light-content' />
        <Navigation />
      </Container>
    );
  }
}