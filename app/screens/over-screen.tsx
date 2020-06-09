import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Fonts from '../utils/fonst';
import CustomButton from '../components/custom-button';
import Avatar from '../components/avatar';
import {COLOURS} from '../utils/colours';

interface Props {
  roundsNumber: number;
  userNumber: number | null;
  onRestart: () => void;
}

const OverScreen: React.FunctionComponent<Props> = ({
  roundsNumber,
  userNumber,
  onRestart,
}) => {
  return (
    <View style={styles.screen}>
      <Avatar source={require('../../assets/images/game-over.jpeg')} />

      <View style={styles.result}>
        <Text style={{...styles.text, ...Fonts.brandRegular}}>
          The Game is Over ...!
        </Text>

        <Text style={{...styles.text, ...Fonts.brandRegular}}>
          Number of rounds: ........... {roundsNumber}
        </Text>

        <Text style={{...styles.text, ...Fonts.brandRegular}}>
          Number was: ...... {userNumber}
        </Text>

        <View style={styles.buttons}>
          <CustomButton title="NEW GAME" onPress={onRestart} />
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
  text: {
    fontSize: 18,
  },
  buttons: {
    marginVertical: 18,
  },
  result: {
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
});

export default OverScreen;
