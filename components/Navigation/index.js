import React from 'react';
import { Platform } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { SimpleLineIcons } from '@expo/vector-icons';
import Dummy from '../Dummy';
import Decks from '../DeckList';
import * as Colors from '../../utils/colors';

const Tabs = TabNavigator(
  {
    Decks: {
      screen: Decks,
      navigationOptions: {
        tabBarLabel: 'Decks',
        tabBarIcon: ({ tintColor }) => (
          <SimpleLineIcons name="layers" size={30} color={tintColor} />
        ),
      },
    },
    NewDeck: {
      screen: () => <Dummy>New Deck</Dummy>,
      navigationOptions: {
        tabBarLabel: 'Add Deck',
        tabBarIcon: ({ tintColor }) => (
          <SimpleLineIcons name="note" size={30} color={tintColor} />
        ),
      },
    },
  },
  {
    navigationOptions: {
      header: null,
    },
    tabBarOptions: {
      inactiveTintColor: Colors.white,
      activeTintColor: Colors.yellow,
      style: {
        height: 56,
        backgroundColor: Colors.blue,
        shadowColor: 'rgba(0, 0, 0, 0.24)',
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowRadius: 6,
        shadowOpacity: 1
      },
    },
  }
);

const MainNavigator = StackNavigator({
  Home: {
    screen: Tabs,
    navigationOptions: { title: 'Home' },
  },
  Deck: {
    screen: () => <Dummy>Deck</Dummy>,
    navigationOptions: {
      headerTintColor: Colors.white,
      headerStyle: {
        backgroundColor: Colors.blue,
      },
    },
  },
  NewCard: {
    screen: () => <Dummy>New Card</Dummy>,
    navigationOptions: {
      title: 'New Card',
      headerTintColor: Colors.white,
      headerStyle: {
        backgroundColor: Colors.blue,
      },
    },
  },
  Quiz: {
    screen: () => <Dummy>Quiz</Dummy>,
    navigationOptions: {
      title: 'Quiz',
      headerTintColor: Colors.white,
      headerStyle: {
        backgroundColor: Colors.blue,
      },
    },
  },
});

export default MainNavigator;
