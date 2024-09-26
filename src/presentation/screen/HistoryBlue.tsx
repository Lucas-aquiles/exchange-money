import React from 'react';
import {Dimensions, Linking, Text, TouchableOpacity, View} from 'react-native';

import {styles} from '../../config/theme/app-theme';

import Background from '../components/CustomBackround';
import Grafico from '../components/Grafico';

export const HistoryBlue = () => {
  const {width, height} = Dimensions.get('window');

  return (
    <View style={styles.containerScreen}>
      <Background>
        <View style={{position: 'absolute', top: height * 0.03}}>
          <Text
            style={{
              color: 'white',
              fontSize: width * 0.06,
            }}>
            Dólar Blue - Last 30 days
          </Text>
        </View>
        <Grafico />
      </Background>
    </View>
  );
};
