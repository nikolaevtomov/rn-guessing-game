import React, {useState, useRef, useEffect} from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';

import NumberContainer from '../components/number-container';
import {generateRandomBetween} from '../utils/helpers';
import Fonts from '../utils/fonst';
import CustomButton from '../components/custom-button';
import Avatar from '../components/avatar';
import {COLOURS} from '../utils/colours';

interface Props {
  userChoice: number;
  onGameOver: (n: number) => void;
}

enum Direction {
  LOWER = 'lower',
  GREATER = 'greater',
}

const GameScreen: React.FunctionComponent<Props> = ({
  userChoice,
  onGameOver,
}) => {
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomBetween(1, 100, userChoice),
  );
  const [rounds, setRounds] = useState(0);
  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  useEffect(() => {
    if (currentGuess === userChoice) {
      onGameOver(rounds);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentGuess, userChoice, onGameOver]);

  const nextGuessHandler = (direction: Direction) => {
    if (
      (direction === Direction.LOWER && currentGuess < userChoice) ||
      (direction === Direction.GREATER && currentGuess > userChoice)
    ) {
      Alert.alert('Not cheating, right?', 'Give another chance?', [
        {text: 'Okay', style: 'cancel'},
      ]);
      return;
    }
    if (direction === Direction.LOWER) {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess;
    }
    const nextNumber = generateRandomBetween(
      currentLow.current,
      currentHigh.current,
      currentGuess,
    );
    setCurrentGuess(nextNumber);
    setRounds((curRounds: number) => curRounds + 1);
  };

  return (
    <View style={styles.screen}>
      <Avatar source={require('../../assets/images/game-forest.png')} />

      <View style={styles.result}>
        <Text style={Fonts.brandRegular}>Opponent's Guess</Text>

        <NumberContainer>{currentGuess}</NumberContainer>

        <View style={styles.buttonContainer}>
          <CustomButton
            style={{backgroundColor: COLOURS.ternary}}
            title="LOWER"
            onPress={() => nextGuessHandler(Direction.LOWER)}
          />

          <CustomButton
            style={{backgroundColor: COLOURS.secondary}}
            title="GREATER"
            onPress={() => nextGuessHandler(Direction.GREATER)}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingVertical: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: COLOURS.white,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: 300,
    maxWidth: '80%',
  },
  result: {
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
});

export default GameScreen;
