import React, { Component } from 'react';
import styled from 'styled-components/native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

import { clearLocalNotification } from '../../utils/notifications';
import * as Colors from '../../utils/colors';

const Container = styled.View`
  flex: 1;
  background-color: ${Colors.black};
  justify-content: center;
  align-items: center;
`;

const Holder = styled.View`
  margin-bottom: 40;
`;

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

const Text = styled.Text`
  color: ${Colors.white};
  font-size: 32;
  margin-bottom: 30;
  font-weight: 900;
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

export default class Result extends Component {
  componentDidMount() {
    clearLocalNotification();
  }

  render () {
    const {correct, questions, onRetry} = this.props;

    return (
      <Container>
        {
          (correct === questions) ?
            <Text>Perfect!</Text> :
            <Text>Almost there!</Text>
        }

        <Holder>
          <AnimatedCircularProgress
            size={200}
            width={20}
            fill={(correct/questions) * 100}
            tintColor={Colors.green}
            backgroundColor={Colors.yellow}
            friction={10}>
            {
              (fill) => (
                <Fill>
                  { Math.round(fill) }
                </Fill>
              )
            }
          </AnimatedCircularProgress>
        </Holder>

        <Button
          onPress={onRetry}
        >
          <ButtonText>Retry</ButtonText>
        </Button>
      </Container>
    );
  }
}

