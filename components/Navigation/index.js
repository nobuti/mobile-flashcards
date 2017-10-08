import React from 'react';
import { View } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { SimpleLineIcons } from '@expo/vector-icons';
import Dummy from '../Dummy';
import Decks from '../DeckList';
import NewDeck from '../NewDeck';
import Deck from '../Deck';
import NewCard from '../NewCard';
import Quiz from '../Quiz';
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
    initialRouteName: 'Decks',
    navigationOptions: {
      header: null,
    },
    tabBarOptions: {
      inactiveTintColor: Colors.white,
      activeTintColor: Colors.yellow,
      style: {
        height: 56,
        backgroundColor: Colors.blue
      }
    }
  }
);

const MainNavigator = StackNavigator(
  {
    Home: {
      screen: Tabs
    },
    Deck: {
      screen: Deck
    },
    NewCard: {
      screen: NewCard
    },
    Quiz: {
      screen: Quiz
    }
  }, {
    navigationOptions: {
      headerTintColor: Colors.white,
      headerStyle: {
        backgroundColor: Colors.blue,
        height: 40,
        justifyContent: 'center',
        paddingTop: 0
      },
      headerTitleStyle: {
        alignSelf: 'center',
        textAlign: 'center'
      },
      headerRight: (<View></View>)
    }
  }
);

export default MainNavigator;
