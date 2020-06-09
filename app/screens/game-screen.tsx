import React, {useState, useRef, useEffect} from 'react';
import {View, Text, StyleSheet, Button, Alert} from 'react-native';

import NumberContainer from '../components/number-container';
import Card from '../components/card';
import {generateRandomBetween} from '../utils/helpers';
import Colors from '../utils/colours';
import Fonts from '../utils/fonst';

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
      <Text style={Fonts.brandRegular}>Opponent's Guess</Text>

      <NumberContainer>{currentGuess}</NumberContainer>

      <Card style={styles.buttonContainer}>
        <Button
          color={Colors.ternary}
          title="LOWER"
          onPress={() => nextGuessHandler(Direction.LOWER)}
        />

        <Button
          color={Colors.secondary}
          title="GREATER"
          onPress={() => nextGuessHandler(Direction.GREATER)}
        />
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    width: 300,
    maxWidth: '80%',
  },
});

export default GameScreen;
