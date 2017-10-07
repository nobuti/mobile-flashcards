import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  StyleSheet
} from 'react-native';
import { connect } from 'react-redux';
import styled from 'styled-components/native';

import { newCard } from '../../actions';
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

const Title = styled.Text`
  color: ${Colors.white};
  font-size: 32;
  margin-bottom: 30;
`

class NewCard extends Component {
  state = {
    question: '',
    answer: ''
  }

  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'New Card'
  })

  addCard = () => {
    const { question, answer } = this.state;
    const { navigation, newCard, questions } = this.props;
    const { deck } = navigation.state.params;

    const questionInput = question.trim();
    const answerInput = answer.trim();

    if (questionInput === '' || answerInput === '') {
      Alert.alert(
        'Question or answer cannot be blank',
        null,
        [{text: 'OK'}],
        { cancelable: false }
      )
      return
    }

    if (questions.indexOf(questionInput) !== -1 && questionInput !== oldQuestion) {
      Alert.alert(
        'This question has been added',
        null,
        [{text: 'OK'}],
        { cancelable: false }
      )
      return void 0;
    }

    newCard({ title: deck, question: questionInput, answer: answerInput });
    navigation.goBack();
  }

  render() {
    const { question, answer } = this.state;

    return (
      <KeyboardAvoidingView style={styles.container} behavior='padding'>

        <Title>
          New Card
        </Title>

        <TextInputContainer>
          <TextInput placeholder='Question'
            underlineColorAndroid='transparent'
            placeholderTextColor='#929292'
            value={question}
            onChangeText={(input) => { this.setState({ question: input }) }}
          />
        </TextInputContainer>

        <TextInputContainer>
          <TextInput placeholder='Answer'
            underlineColorAndroid='transparent'
            placeholderTextColor='#929292'
            value={answer}
            onChangeText={(input) => { this.setState({ answer: input }) }}
            multiline = {true}
            numberOfLines={4}
          />
        </TextInputContainer>

        <Button
          onPress={this.addCard}
        >
          <ButtonText>Save card</ButtonText>
        </Button>

      </KeyboardAvoidingView>
    )
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

const mapStateToProps = (decks, { navigation }) => {
  const { deck } = navigation.state.params;

  return {
    questions: decks[deck].questions.reduce((result, current) => {
      result.push(current.question)
      return result
    }, [])
  }
}

export default connect(mapStateToProps, { newCard })(NewCard);
