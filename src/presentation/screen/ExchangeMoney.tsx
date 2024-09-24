import React from 'react';
import {Text, View, ActivityIndicator, ScrollView} from 'react-native';
import Background from '../components/CustomBackround';
import {styles} from '../../config/theme/app-theme';
import {useFetchExchangeData} from '../hooks/UseFetchExchangeData';
import DifDolar from '../components/DifDolar';
import Conversor from '../components/Conversor';

export const ExchangeMoney = () => {
  const {data, isLoading, error} = useFetchExchangeData(
    'https://dolarapi.com/v1/dolares',
  );

  return (
    <View style={styles.containerScreen}>
      <Background>
        <ScrollView>
          {isLoading ? (
            <ActivityIndicator size="large" color="#0000ff" />
          ) : error ? (
            <Text>{error}</Text>
          ) : data ? (
            <View>
              <Text
                style={{
                  color: 'white',
                  fontSize: 30,
                  marginHorizontal: 'auto',
                }}>
                Dólares
              </Text>
              <View style={styles.gridContainer}>
                {data.map((e, index) => (
                  <DifDolar
                    key={index}
                    compra={e.compra}
                    moneda={e.moneda}
                    nombre={e.nombre}
                    venta={e.venta}
                    casa={e.casa}
                  />
                ))}
              </View>
            </View>
          ) : (
            <Text>No data available</Text>
          )}
          <View>
            <Text
              style={{
                fontSize: 30,
                color: 'white',
                marginHorizontal: 'auto',
              }}>
              Conversor
            </Text>
            {data && <Conversor data={data} />}
          </View>
        </ScrollView>
      </Background>
    </View>
  );
};
