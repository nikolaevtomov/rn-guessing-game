import {Dimensions} from 'react-native';

import {
  MAX_WINDOW_HEIGHT,
  SM_AVATAR_DIMENSION,
  LG_AVATAR_DIMENSION,
} from '../utils/constants';

export const generateRandomBetween = (
  min: number,
  max: number,
  exclude: number,
): number => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const random = Math.floor(Math.random() * (max - min)) + min;
  if (random === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return random;
  }
};

const getAvatarDimension = (max: number, lg: number, sm: number): number => {
  return Dimensions.get('window').height > max ? lg : sm;
};

export const setAvatarDimensions = getAvatarDimension(
  MAX_WINDOW_HEIGHT,
  LG_AVATAR_DIMENSION,
  SM_AVATAR_DIMENSION,
);
