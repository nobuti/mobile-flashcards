import React, { Component } from 'react';
import styled from 'styled-components/native';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import promise from "redux-promise";

import reducers from './reducers';
import * as Colors from './utils/colors';
import StatusBar from './components/StatusBar';
import Navigation from './components/Navigation';
import Container from './components/Container';
import { setLocalNotification } from './utils/notifications'

const createStoreWithMiddlewares = applyMiddleware(promise)(createStore);

export default class App extends Component {
  componentDidMount() {
    setLocalNotification();
  }

  render() {
    return (
      <Provider store={createStoreWithMiddlewares(reducers)}>
        <Container>
          <StatusBar backgroundColor={Colors.black} barStyle='light-content' />
          <Navigation />
        </Container>
      </Provider>
    );
  }
}