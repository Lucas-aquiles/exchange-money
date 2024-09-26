import React, {useState} from 'react';
import {Dimensions, Linking, Text, TouchableOpacity, View} from 'react-native';

import {styles} from '../../config/theme/app-theme';

import Background from '../components/CustomBackround';
import Grafico from '../components/Grafico';

export const HistoryBlue = () => {
  const {width, height} = Dimensions.get('window');
  const [change, setChange] = useState(false);

  function handleUpdate() {
    setChange(prev => !prev); // Esto cambiará el valor y disparará el hook de nuevo
  }
  return (
    <View style={styles.containerScreen}>
      <Background>
        <View style={{position: 'absolute', top: height * 0.03}}>
          <TouchableOpacity
            onPress={handleUpdate}
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              width: 80,
              alignItems: 'center',
              alignSelf: 'flex-end',
              borderRadius: 20,
              marginBottom: height * 0.02,
            }}>
            <Text style={{color: 'white'}}>Update</Text>
          </TouchableOpacity>
          <Text
            style={{
              color: 'white',
              fontSize: width * 0.06,
            }}>
            Dólar Blue - Last 30 days
          </Text>
        </View>
        <Grafico change={change} />
      </Background>
    </View>
  );
};
