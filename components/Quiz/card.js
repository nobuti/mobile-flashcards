import React, { Component } from 'react';
import styled from 'styled-components/native';
import {
  TouchableOpacity,
  View,
  StyleSheet
} from 'react-native';
import FlipCard from 'react-native-flip-card';
import Progress from './progress';
import * as Colors from '../../utils/colors';

const ButtonColors = {
  yay: Colors.green,
  nay: Colors.red
}

const Container = styled.View`
  flex: 1;
  background-color: ${Colors.black};
  justify-content: center;
  padding-bottom: 10;
`;

const Holder = styled.ScrollView`
  flex: 1;
  margin-bottom: 40;
  padding-left: 20;
  padding-right: 20;
  padding-top: 20;
`;

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

const Text = styled.Text`
  color: ${Colors.white};
  font-size: 32;
  margin-bottom: 30;
  align-self: stretch;
`

const SmallText = styled.Text`
  color: ${Colors.white};
  font-size: 20;
`

const Fill = styled.Text`
  background-color: transparent;
  position: absolute;
  top: 72;
  left: 0;
  width: 200;
  text-align: center;
  color: ${Colors.white};
  font-size: 50;
  font-weight: 900;
`

export default ({onToggle, onCorrect, onIncorrect, step, questions, showAnswer}) => {
  return (
    <Container>
      <Progress
        height={3}
        progress={(step + 1) / questions.length}
        duration={500}
      />

      <Holder>
        <FlipCard
          style={styles.flip}
          flipHorizontal={true}
          flipVertical={false}
          flip={showAnswer}
          clickable={false}
          friction={10}
          perspective={6000}
        >
          <View style={styles.inner}>
            <Text>{questions[step].question}</Text>
            <TouchableOpacity
              onPress={onToggle}
            >
              <SmallText>View answer</SmallText>
            </TouchableOpacity>
          </View>

          <View style={styles.inner}>
            <Text>{questions[step].answer}</Text>
            <TouchableOpacity
              onPress={onToggle}
            >
              <SmallText>View question</SmallText>
            </TouchableOpacity>
          </View>
        </FlipCard>
        </Holder>
      <Button
        type='yay'
        onPress={onCorrect}
      >
        <ButtonText>Yay!</ButtonText>
      </Button>

      <Button
        type='nay'
        onPress={onIncorrect}
      >
        <ButtonText>Nay!</ButtonText>
      </Button>

    </Container>
  );
}

const styles = StyleSheet.create({
  flip: {
    flex: 1,
    justifyContent: 'center',
    borderWidth: 0,
    alignSelf: 'stretch'
  },
  inner: {
    alignItems: 'flex-start',
    alignSelf: 'stretch'
  }
});
