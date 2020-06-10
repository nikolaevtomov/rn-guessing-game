import React from 'react';
import {View, StyleSheet, Image, ImageSourcePropType} from 'react-native';

import {LG_AVATAR_DIMENSION} from '../utils/constants';

interface Props {
  source: ImageSourcePropType;
  dimension?: number;
}

const Avatar: React.FunctionComponent<Props> = ({source, dimension}) => {
  return (
    <View
      style={{
        ...styles.imageWrapper,
        ...(dimension && {width: dimension, height: dimension}),
      }}>
      <Image
        style={{
          ...styles.image,
          ...(dimension && {width: dimension, height: dimension}),
        }}
        resizeMode="contain"
        source={source}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imageWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    width: LG_AVATAR_DIMENSION,
    height: LG_AVATAR_DIMENSION,
    marginVertical: 20,
    borderRadius: LG_AVATAR_DIMENSION,
    overflow: 'hidden',
  },
  image: {
    width: LG_AVATAR_DIMENSION,
    borderRadius: LG_AVATAR_DIMENSION,
  },
});

export default Avatar;
