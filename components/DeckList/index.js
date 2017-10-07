import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  FlatList,
  TouchableOpacity,
} from 'react-native';
import _ from 'lodash';
import { connect } from 'react-redux';
import styled from 'styled-components/native';
import { AppLoading} from 'expo';
import { receiveDecks } from '../../actions';
import { fetchFlashCards } from '../../utils/api'
import * as Colors from '../../utils/colors';
import Container from '../Container';

const Card = styled.View`
  flex: 1;
  background-color: ${Colors.pink};
  border-bottom-width: 1px;
  border-bottom-color: ${Colors.yellow};
  padding: 20px;
`;

const InnerCard = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
`

const TitleCard = styled.Text`
  color: ${Colors.white};
  font-size: 32px;
  font-weight: 900;
  margin-bottom: 10px;
`

const DetailsCard = styled.Text`
  color: ${Colors.green};
  font-size: 24px;
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
        onPress={() =>
          this.props.navigation.navigate('Deck', {
            title: item.title
          })
        }
        onLongPress={() =>
          console.log('delete deck')}
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

export default connect(mapStateToProps, {receiveDecks})(DeckList);