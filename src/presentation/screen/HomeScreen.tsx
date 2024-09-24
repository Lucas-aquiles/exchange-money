import React from 'react';
import {
  Text,
  View,
  ImageBackground,
  StyleSheet,
  Image,
  StatusBar,
  Dimensions,
} from 'react-native';
import Background from '../components/CustomBackround';
const {width, height} = Dimensions.get('window'); // Obtener dimensiones de la pantalla

export const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} backgroundColor={'black'} />

      <Background>
        <Text style={styles.text}>Zero-Rate</Text>
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
    width: width * 0.11,

    color: 'white', // Cambia el color según el fondo
    fontSize: width * 0.13,
    fontWeight: '800',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
});
