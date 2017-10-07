import React, { Component } from 'react';
import styled from 'styled-components/native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducers from './reducers';
import * as Colors from './utils/colors';
import StatusBar from './components/StatusBar';
import Navigation from './components/Navigation';
import Container from './components/Container';
import { setLocalNotification } from './utils/notifications'

export default class App extends Component {
  componentDidMount() {
    setLocalNotification();
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <Container>
          <StatusBar color={Colors.green} barStyle='light-content' />
          <Navigation />
        </Container>
      </Provider>
    );
  }
}