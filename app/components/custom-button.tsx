import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import Colors from '../utils/colours';
import Fonts from '../utils/fonst';

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
    <TouchableOpacity onPress={onPress}>
      <View style={{...styles.screen, ...style}}>
        <Text style={{...styles.title, ...Fonts.brandRegular}}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  screen: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.brand,
    borderRadius: 24,
  },
  title: {
    color: Colors.white,
  },
});

export default CustomButton;
