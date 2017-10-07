import React from 'react';
import { Platform } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { SimpleLineIcons } from '@expo/vector-icons';
import Dummy from '../Dummy';
import Decks from '../DeckList';
import NewDeck from '../NewDeck';
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
      screen: NewDeck,
      navigationOptions: {
        tabBarLabel: 'New Deck',
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

const MainNavigator = StackNavigator(
  {
    Home: {
      screen: Tabs,
      navigationOptions: { title: 'Decks' },
    },
    Deck: {
      screen: () => <Dummy>Deck</Dummy>
    },
    NewCard: {
      screen: () => <Dummy>New Card</Dummy>
    },
    Quiz: {
      screen: () => <Dummy>Quiz</Dummy>
    }
  }, {
    navigationOptions: {
      headerTintColor: Colors.white,
      headerStyle: {
        backgroundColor: Colors.blue,
        height: 40,
        justifyContent: 'center',
        paddingTop: 0
      }
    }
  }
);

export default MainNavigator;
