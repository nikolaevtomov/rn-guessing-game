import {StyleSheet} from 'react-native';

import {COLOURS} from '../utils/colours';

export const STYLES = StyleSheet.create({
  screen: {
    flex: 1,
    paddingVertical: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: COLOURS.white,
  },
  result: {
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: 300,
    maxWidth: '80%',
  },
  input: {
    width: 50,
    textAlign: 'center',
    fontSize: 22,
  },
});
