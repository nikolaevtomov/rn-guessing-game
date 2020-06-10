import React from 'react';
import {StyleSheet, TextInput, TextInputProps} from 'react-native';

import {COLOURS} from '../utils/colours';

interface Props extends Partial<TextInputProps> {
  style?: Record<string, string | number>;
}

const Input: React.FunctionComponent<Props> = (props) => {
  return <TextInput {...props} style={{...styles.input, ...props.style}} />;
};

const styles = StyleSheet.create({
  input: {
    height: 50,
    marginVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: COLOURS.grey,
  },
});

export default Input;
