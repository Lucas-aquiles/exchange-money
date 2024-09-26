import React, {useState} from 'react';
import {
  Text,
  View,
  ActivityIndicator,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Background from '../components/CustomBackround';
import {styles} from '../../config/theme/app-theme';
import {useFetchExchangeData} from '../hooks/UseFetchExchangeData';
import DifDolar from '../components/DifDolar';
import Conversor from '../components/Conversor';

export const ExchangeMoney = () => {
  const [shouldUpdate, setShouldUpdate] = useState(false);

  const {data, isLoading, error} = useFetchExchangeData(
    'https://dolarapi.com/v1/dolares',
    shouldUpdate,
  );

  function handleUpdate() {
    setShouldUpdate(prev => !prev); // Esto cambiará el valor y disparará el hook de nuevo
  }

  return (
    <View style={styles.containerScreen}>
      <Background>
        <ScrollView>
          <TouchableOpacity
            onPress={handleUpdate}
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              width: 80,
              alignItems: 'center',
              alignSelf: 'flex-end',
              marginRight: 20,
              borderRadius: 20,
              marginTop: 20,
            }}>
            <Text style={{color: 'white'}}>Update</Text>
          </TouchableOpacity>

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
            <Text style={{color: 'white', fontSize: 80}}>
              No data available
            </Text>
          )}
          <View>
            <Text
              style={{
                fontSize: 30,
                color: 'white',
                marginHorizontal: 'auto',
                marginBottom: 0,
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
