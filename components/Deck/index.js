import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import { connect } from 'react-redux';
import styled from 'styled-components/native';
import * as Colors from '../../utils/colors';

const Container = styled.View`
    flex: 1;
    background-color: ${Colors.black};
    justify-content: center;
`;

const InnerCard = styled.View`
  flex-direction: column;
  align-items: center;
  margin-bottom: 50;
`

const TitleCard = styled.Text`
  color: ${Colors.white};
  font-size: 32px;
  font-weight: 900;
  margin-bottom: 10px;
`

const DetailsCard = styled.Text`
  color: ${Colors.white};
  font-size: 24px;
`

const ButtonColors = {
  new: Colors.pink,
  quiz: Colors.green
}

const Button = styled.TouchableOpacity`
  background-color: ${props => ButtonColors[props.type]};
  margin-bottom: 10;
  height: 60;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  margin-left: 20;
  margin-right: 20
`

const ButtonText = styled.Text`
  fontSize: 24;
  color: ${Colors.white};
`

class Deck extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: navigation.state.params.title
  })

  render() {
    const { navigation, deck } = this.props;

    return (
      <Container>
          <InnerCard>
            <TitleCard>{deck.title}</TitleCard>
            <DetailsCard>{deck.questions.length} cards</DetailsCard>
          </InnerCard>

          <Button
            type='new'
            onPress={() => navigation.navigate(
              'NewCard',
              { deck: deck.title }
            )}
          >
            <ButtonText>Add card</ButtonText>
          </Button>


        {
          deck.questions.length !== 0 && <Button
            type='quiz'
            onPress={() => {
              if (deck.questions.length !== 0) {
                navigation.navigate(
                  'Quiz',
                  { deck: deck.title }
                )
              }
            }}
          >
              <ButtonText>Quiz</ButtonText>
          </Button>
        }

      </Container>
    )
  }
}

function mapStateToProps ( decks, { navigation }) {
  const { title } = navigation.state.params

  return {
    deck: decks[title]
  }
}

export default connect(mapStateToProps)(Deck);
