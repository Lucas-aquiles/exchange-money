// Background.js
import React from 'react';
import {ImageBackground, StyleSheet, Image} from 'react-native';

const Background = ({children}: any) => {
  return (
    <ImageBackground
      source={require('../../assets/images/1.png')} // Cambia la ruta según sea necesario
      resizeMode="cover"
      style={styles.image}>
      {children}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1, // Para que cubra toda la pantalla
    justifyContent: 'center', // Centrar el contenido
    alignItems: 'center', // Centrar el contenido
  },
});

export default Background;
