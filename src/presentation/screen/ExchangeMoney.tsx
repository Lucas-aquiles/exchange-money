import React from 'react';
import {Text, View} from 'react-native';
import Background from '../components/CustomBackround';
import {styles} from '../../config/theme/app-theme';

export const ExchangeMoney = () => {
  return (
    <View style={styles.containerScreen}>
      <Background>
        <Text>HomeScreen</Text>
      </Background>
    </View>
  );
};
