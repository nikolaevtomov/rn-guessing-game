import React from 'react';
import {View, StyleSheet} from 'react-native';
import {COLOURS} from '../utils/colours';

interface Props {
  children: React.ReactNode;
  style?: Record<string, string | number>;
}

const Card: React.FunctionComponent<Props> = (props) => {
  return <View style={{...styles.card, ...props.style}}>{props.children}</View>;
};

const styles = StyleSheet.create({
  card: {
    shadowColor: COLOURS.dark,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    backgroundColor: COLOURS.white,
    elevation: 5,
    padding: 20,
    borderRadius: 10,
  },
});

export default Card;
