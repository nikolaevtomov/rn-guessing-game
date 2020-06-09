import React from 'react';
import {View, Text, StyleSheet, Button, Image} from 'react-native';
import Fonts from '../utils/fonst';
import Colors from '../utils/colours';

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
      <Image
        style={styles.image}
        resizeMode="contain"
        source={require('../../assets/images/game-over.jpeg')}
      />
      <Text style={{...styles.text, ...Fonts.brandRegular}}>
        The Game is Over!
      </Text>
      <Text style={{...styles.text, ...Fonts.brandRegular}}>
        Number of rounds: {roundsNumber}
      </Text>
      <Text style={{...styles.text, ...Fonts.brandRegular}}>
        Number was: {userNumber}
      </Text>
      <Button color={Colors.brand} title="NEW GAME" onPress={onRestart} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 300,
  },
  text: {
    fontSize: 18,
  },
});

export default OverScreen;
