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
    width: 300,
    height: 300,
    borderRadius: 300,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  image: {
    width: 300,
    borderRadius: 300,
  },
});

export default Avatar;
