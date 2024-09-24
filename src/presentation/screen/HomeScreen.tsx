import React from 'react';
import {
  Text,
  View,
  ImageBackground,
  StyleSheet,
  Image,
  StatusBar,
} from 'react-native';
import Background from '../components/CustomBackround';

export const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} backgroundColor={'black'} />

      <Background>
        <Text style={styles.text}>Zero Rate</Text>
      </Background>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1, // Para que la imagen de fondo cubra toda la pantalla
    justifyContent: 'center', // Centrar el contenido
    alignItems: 'center', // Centrar el contenido
  },
  container: {
    flex: 1, // Permitir que el contenedor ocupe toda la pantalla
  },
  text: {
    color: 'white', // Cambia el color según el fondo
    fontSize: 57,
    fontFamily: 'Poppins',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
});
