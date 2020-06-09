import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {COLOURS} from '../utils/colours';
import Fonts from '../utils/fonts';

interface Props {
  title: string;
}

const Header: React.FunctionComponent<Props> = ({title}) => {
  return (
    <View style={styles.header}>
      <Text style={{...styles.title, ...Fonts.brandRegular}}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 90,
    paddingTop: 36,
    backgroundColor: COLOURS.brand,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  title: {
    color: COLOURS.dark,
    fontSize: 18,
  },
});

export default Header;
