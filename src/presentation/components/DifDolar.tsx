import React from 'react';
import {Text, View, Dimensions} from 'react-native';

interface PropsDolar {
  compra: string;
  moneda: string;
  nombre: string;
  venta: string;
  casa: string;
}
const {width, height} = Dimensions.get('window');

const DifDolar = ({compra, venta, moneda, nombre, casa}: PropsDolar) => {
  const nameCCL = 'Ccl';
  return (
    <View
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        width: width * 0.4,
        padding: width * 0.03,
        marginVertical: height * 0.02,
        borderRadius: 20,
        shadowOpacity: 0.9,
        opacity: 1,
      }}>
      {casa === 'contadoconliqui' ? (
        <Text
          style={{fontSize: width * 0.07, color: 'white', fontWeight: '400'}}>
          {nameCCL}
        </Text>
      ) : (
        <Text
          style={{fontSize: width * 0.07, color: 'white', fontWeight: '400'}}>
          {nombre}
        </Text>
      )}
      <View>
        <View style={{display: 'flex', flexDirection: 'row'}}>
          <Text
            style={{
              fontSize: width * 0.04,
              color: '#57cc99',
              fontWeight: '400',
            }}>
            Compra
          </Text>
          <Text
            style={{fontSize: width * 0.04, color: 'white', fontWeight: '400'}}>
            : $ {compra}
          </Text>
        </View>
        <View style={{display: 'flex', flexDirection: 'row'}}>
          <Text
            style={{
              fontSize: width * 0.04,
              color: '#ff4d6d',
              fontWeight: '500',
            }}>
            Venta
          </Text>
          <Text
            style={{fontSize: width * 0.04, color: 'white', fontWeight: '500'}}>
            : $ {venta}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default DifDolar;
