import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

import {COLOURS} from '../utils/colours';
import Fonts from '../utils/fonts';

interface Props {
  title: string;
  style?: Record<string, string | number>;
  onPress: () => void;
}

const CustomButton: React.FunctionComponent<Props> = ({
  title,
  onPress,
  style,
}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <View style={{...styles.screen, ...style}}>
        <Text style={{...styles.title, ...Fonts.brandRegular}}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  screen: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 12,
    backgroundColor: COLOURS.brand,
    borderRadius: 24,
  },
  title: {
    color: COLOURS.white,
  },
});

export default CustomButton;
