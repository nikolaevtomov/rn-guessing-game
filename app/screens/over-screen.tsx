import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Fonts from '../utils/fonts';
import CustomButton from '../components/custom-button';
import Avatar from '../components/avatar';
import {STYLES} from '../utils/styles';

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
    <View style={STYLES.screen}>
      <Avatar source={require('../../assets/images/game-over.jpeg')} />

      <View style={STYLES.result}>
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
  text: {
    fontSize: 18,
  },
  buttons: {
    marginVertical: 18,
  },
});

export default OverScreen;
