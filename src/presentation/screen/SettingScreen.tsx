import React from 'react';
import {Text, View} from 'react-native';
import {styles} from '../../config/theme/app-theme';
import Background from '../components/CustomBackround';

export const SettingScreen = () => {
  return (
    <View style={styles.containerScreen}>
      <Background>
        <Text>SettingaaaScreen</Text>
      </Background>
    </View>
  );
};
