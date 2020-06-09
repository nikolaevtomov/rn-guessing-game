import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  Image,
} from 'react-native';

import Card from '../components/card';
import Input from '../components/input';
import NumberContainer from '../components/number-container';
import Colors from '../utils/colours';
import Fonts from '../utils/fonst';

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
        <View style={styles.imageWrapper}>
          <Image
            style={styles.image}
            resizeMode="contain"
            source={require('../../assets/images/start-game.png')}
          />
        </View>

        <Text style={{...styles.title, ...Fonts.brandRegular}}>
          Start a New Game!
        </Text>

        <Card style={styles.inputContainer}>
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
            <View style={styles.button}>
              <Button
                title="Reset"
                onPress={resetInputHandler}
                color={Colors.ternary}
              />
            </View>

            <View style={styles.button}>
              <Button
                title="Confirm"
                onPress={confirmInputHandler}
                color={Colors.secondary}
              />
            </View>
          </View>
        </Card>

        {confirmed && (
          <Card style={styles.summaryContainer}>
            <Text style={Fonts.brandRegular}>You selected</Text>

            <NumberContainer>{selectedNumber}</NumberContainer>

            <Button
              color={Colors.brand}
              title="START GAME"
              onPress={() => onStartGame(selectedNumber)}
            />
          </Card>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  inputContainer: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  button: {
    width: 100,
  },
  input: {
    width: 50,
    textAlign: 'center',
    fontSize: 22,
  },
  summaryContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  imageWrapper: {
    width: 300,
    height: 300,
    borderRadius: 300,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  image: {
    width: 300,
    borderRadius: 300,
  },
});

export default StartScreen;
