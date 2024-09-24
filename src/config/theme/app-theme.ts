import {PixelRatio, StyleSheet, Dimensions} from 'react-native';

export const colors = {
  primary: '#636086',
  secondary: '#0a021d',
  orange: '#FF9427',

  textPrimary: 'white',
  textSecondary: '#666666',
  background: '#000000',
};
const {width, height} = Dimensions.get('window'); // Obtener dimensiones de la pantalla
const isSpecialResolution = width === 360;

export const styles = StyleSheet.create({
  containerScreen: {
    flex: 1,
  },
});
