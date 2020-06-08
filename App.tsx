import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';

import Header from './app/components/header';
import StartScreen from './app/screens/start-screen';
import GameScreen from './app/screens/game-screen';
import GameOverScreen from './app/screens/over-screen';

export default function App() {
  const [userNumber, setUserNumber] = useState<null | number>(null);
  const [guessRounds, setGuessRounds] = useState<number>(0);

  const configureNewGameHandler = () => {
    setGuessRounds(0);
    setUserNumber(null);
  };

  const startGameHandler = (selectedNumber: number | null) => {
    setUserNumber(selectedNumber);
  };

  const gameOverHandler = (numOfRounds: number) => {
    setGuessRounds(numOfRounds);
  };

  return (
    <View style={styles.screen}>
      <Header title="Guess a Number" />

      {userNumber && guessRounds <= 0 ? (
        <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />
      ) : guessRounds > 0 ? (
        <GameOverScreen
          roundsNumber={guessRounds}
          userNumber={userNumber}
          onRestart={configureNewGameHandler}
        />
      ) : (
        <StartScreen onStartGame={startGameHandler} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
