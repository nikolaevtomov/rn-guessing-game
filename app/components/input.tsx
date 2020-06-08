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
    borderBottomColor: COLOURS.grey,
    borderBottomWidth: 1,
    marginVertical: 10,
  },
});

export default Input;
