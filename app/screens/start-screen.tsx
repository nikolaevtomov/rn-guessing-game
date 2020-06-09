import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from 'react-native';

import {COLOURS} from '../utils/colours';
// import Card from '../components/card';
import Input from '../components/input';
import NumberContainer from '../components/number-container';
import Fonts from '../utils/fonst';
import CustomButton from '../components/custom-button';
import Avatar from '../components/avatar';

interface Props {
  onStartGame: (n: number | null) => void;
}

const StartScreen: React.FunctionComponent<Props> = ({onStartGame}) => {
  const [enteredValue, setEnteredValue] = useState<string>('');
  const [confirmed, setConfirmed] = useState<boolean>(false);
  const [selectedNumber, setSelectedNumber] = useState<null | number>(null);

  const numberInputHandler = (inputText: string) => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ''));
  };

  const resetInputHandler = () => {
    setEnteredValue('');
    setConfirmed(false);
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredValue, 10);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        'Invalid number!',
        'Number has to be a number between 1 and 99.',
        [{text: 'Okay', style: 'destructive', onPress: resetInputHandler}],
      );
      return;
    }
    setConfirmed(true);
    setSelectedNumber(chosenNumber);
    setEnteredValue('');
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <View style={styles.screen}>
        <Avatar source={require('../../assets/images/start-game.png')} />

        {confirmed && (
          <View style={styles.result}>
            <Text style={Fonts.brandRegular}>You selected</Text>

            <NumberContainer>{selectedNumber}</NumberContainer>

            <CustomButton
              title="START GAME"
              onPress={() => onStartGame(selectedNumber)}
            />
          </View>
        )}

        {!confirmed && (
          <View style={styles.result}>
            <Text style={Fonts.brandRegular}>Select a Number</Text>

            <Input
              style={styles.input}
              blurOnSubmit
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="number-pad"
              maxLength={2}
              onChangeText={numberInputHandler}
              value={enteredValue}
            />

            <View style={styles.buttonContainer}>
              <CustomButton
                title="Reset"
                onPress={resetInputHandler}
                style={{backgroundColor: COLOURS.ternary}}
              />

              <CustomButton
                title="Confirm"
                onPress={confirmInputHandler}
                style={{backgroundColor: COLOURS.secondary}}
              />
            </View>
          </View>
        )}
      </View>
    </TouchableWithoutFeedback>
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
  input: {
    width: 50,
    textAlign: 'center',
    fontSize: 22,
  },
  result: {
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
});

export default StartScreen;
