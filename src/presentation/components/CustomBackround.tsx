import React from 'react';
import {ImageBackground, StyleSheet} from 'react-native';

const Background = ({children}: any) => {
  return (
    <ImageBackground
      source={require('../../assets/images/1.png')}
      resizeMode="cover"
      style={styles.image}>
      {children}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Background;
