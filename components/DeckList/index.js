import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  FlatList,
  TouchableOpacity,
  Alert
} from 'react-native';
import _ from 'lodash';
import { connect } from 'react-redux';
import styled from 'styled-components/native';
import { AppLoading} from 'expo';
import { receiveDecks, removeDeck } from '../../actions';
import { fetchFlashCards } from '../../utils/api'
import * as Colors from '../../utils/colors';
import Container from '../Container';

const Card = styled.View`
  background-color: ${Colors.pink};
  border-bottom-width: 1;
  border-bottom-color: ${Colors.yellow};
  padding-left: 20;
  padding-right: 20;
  padding-top: 20;
  padding-bottom: 20;
`;

const InnerCard = styled.View`
  flex-direction: column;
  align-items: center;
`

const TitleCard = styled.Text`
  color: ${Colors.white};
  font-size: 32;
  font-weight: 900;
  margin-bottom: 10;
`

const DetailsCard = styled.Text`
  color: ${Colors.yellow};
  font-size: 24;
`

class DeckList extends Component {
  state = {
    ready: false
  }

  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'Decks'
  })

  componentDidMount() {
    const { receiveDecks } = this.props;
    fetchFlashCards()
      .then(decks => {
        receiveDecks(decks);
      });
  }

  renderItem = ({ item }) => (
    <Card>
      <TouchableOpacity
        style={{flex: 1}}
        onPress={() =>
          this.props.navigation.navigate('Deck', {
            title: item.title
          })
        }
        onLongPress={() =>
          Alert.alert(
            'Are you sure you want to delete this deck and all of its cards?',
            null,
            [
              {text: 'Cancel'},
              {text: 'OK', onPress: () => this.props.removeDeck({ title: item.title })},
            ],
            { cancelable: false }
          )
        }
      >
        <InnerCard>
          <TitleCard>{item.title}</TitleCard>
          <DetailsCard>{item.questions.length} cards</DetailsCard>
        </InnerCard>
      </TouchableOpacity>
    </Card>
  );

  render() {
    const { decks } = this.props;

    if (_.isEmpty(decks)) {
      return <AppLoading />
    }

    return (
      <Container>
        <FlatList
          data={Object.values(decks).sort((a, b) => a.title > b.title)}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => index}
        />
      </Container>
    );
  }
}

DeckList.PropTypes = {
  decks: PropTypes.object
}

const mapStateToProps = (state) => {
  return {
    decks: state
  }
};

export default connect(mapStateToProps, {receiveDecks, removeDeck})(DeckList);