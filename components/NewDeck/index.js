import React, { Component } from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import styled from 'styled-components/native';
import { newDeck } from '../../actions';
import * as Colors from '../../utils/colors';

const TextInput = styled.TextInput`
  color: ${Colors.white};
  font-size: 32;
  margin-bottom: 10px;
  border-radius: 0;
  border: 0;
  width: 300px;
  text-align: center;
`

const TextInputContainer = styled.View`
  margin-bottom: 30px;
  border-bottom-width: 1px;
  border-bottom-color: ${Colors.yellow};
`

const Title = styled.Text`
  color: ${Colors.white};
  font-size: 32;
  margin-bottom: 10;
`

const Button = styled.TouchableOpacity`
  background-color: ${Colors.pink};
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

class NewDeck extends Component {
  state = {
    text: '',
  }

  submit = () => {
    const entry = this.state.text;
    const { decks, newDeck, navigation } = this.props;

    if (decks[entry.text]) {
      Alert.alert(
        'Deck duplication',
        'A deck with that name already exists'
      );

      return void 0;
    } else {
      const input = entry.trim();

      if (input === '') {
        Alert.alert(
          "Deck's name is required",
          'Empty strings are not allowed'
        );

        return void 0;
      }

      newDeck({ title: input });
      this.setState({ text: '' });
      navigation.navigate(
        'Deck',
        { title: input, key: navigation.state.key }
      );
    }
  }

  render() {
    const { text } = this.state;
    return (
      <KeyboardAvoidingView style={styles.container} behavior='padding'>
        <Title>
          Name of the new deck
        </Title>

        <TextInputContainer>
          <TextInput
            underlineColorAndroid="transparent"
            value={text}
            onChangeText={text => this.setState({ text })}
          />
        </TextInputContainer>

        <Button onPress={this.submit}>
          <ButtonText>Submit</ButtonText>
        </Button>

      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 25,
    backgroundColor: Colors.black,
  }
});

const mapStateToProps = (state) => {
  return {
    decks: state,
  };
}

export default connect(mapStateToProps, {newDeck})(NewDeck);
