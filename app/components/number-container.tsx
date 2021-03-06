import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {COLOURS} from '../utils/colours';

interface Props {
  children: React.ReactNode;
}

const NumberContainer: React.FunctionComponent<Props> = ({children}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.number}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    marginVertical: 24,
    borderRadius: 10,
    padding: 10,
    borderColor: COLOURS.dark,
  },
  number: {
    fontSize: 22,
  },
});

export default NumberContainer;
