import React from 'react';
import {Dimensions, Linking, Text, TouchableOpacity, View} from 'react-native';
import {styles} from '../../config/theme/app-theme';
import Background from '../components/CustomBackround';

export const SettingScreen = () => {
  const {width, height} = Dimensions.get('window');

  const handlePress = () => {
    Linking.openURL('https://rootsoftware.com.ar/politicasgenerales');
  };

  return (
    <View style={styles.containerScreen}>
      <Background>
        <View style={{position: 'absolute', top: 40}}>
          <TouchableOpacity onPress={handlePress}>
            <Text
              style={{
                color: 'white',
                fontSize: width * 0.06,
              }}>
              Políticas de Privacidad
            </Text>
          </TouchableOpacity>
        </View>
      </Background>
    </View>
  );
};
