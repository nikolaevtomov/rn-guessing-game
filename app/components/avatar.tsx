import React from 'react';
import {View, StyleSheet, Image, ImageSourcePropType} from 'react-native';

interface Props {
  source: ImageSourcePropType;
}

const Avatar: React.FunctionComponent<Props> = ({source}) => {
  return (
    <View style={styles.imageWrapper}>
      <Image style={styles.image} resizeMode="contain" source={source} />
    </View>
  );
};

const styles = StyleSheet.create({
  imageWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    height: 300,
    marginVertical: 20,
    borderRadius: 300,
    overflow: 'hidden',
  },
  image: {
    width: 300,
    borderRadius: 300,
  },
});

export default Avatar;
