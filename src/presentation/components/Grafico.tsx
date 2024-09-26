import * as React from 'react';
import {StyleSheet, View, ActivityIndicator, Text} from 'react-native';
import {CartesianChart, Line, useChartPressState} from 'victory-native';
import {Circle, useFont} from '@shopify/react-native-skia';
import type {SharedValue} from 'react-native-reanimated';
import inter from '../../assets/fonts/inter_medium.ttf';
import {useState} from 'react';
import {useFetchHistoryData} from '../hooks/useFetchHistoryData';
const initChartPressState = {x: 0, y: {highTmp: 0}} as const;
export default function Grafico() {
  const [shouldUpdate, setShouldUpdate] = useState(false);

  const {data, isLoading, error} = useFetchHistoryData(
    'https://api.argentinadatos.com/v1/cotizaciones/dolares/blue/',
    shouldUpdate,
  );

  const font = useFont(inter, 12);

  const {state: firstPress, isActive: isFirstPressActive} =
    useChartPressState(initChartPressState);
  const {state: secondPress, isActive: isSecondPressActive} =
    useChartPressState(initChartPressState);

  const newData = [
    {venta: 1350, fecha: '2024-08-25'},
    {venta: 1350, fecha: '2024-08-26'},
    {venta: 1340, fecha: '2024-08-27'},
  ];

  const DATA = (data ? data : newData).map((item, index) => ({
    day: index,
    highTmp: item.venta,
  }));
  return (
    <View
      style={{
        flex: 1,
        maxHeight: 350,
        width: '100%',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
      }}>
      {isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : error ? (
        <Text>{error}</Text>
      ) : (
        <CartesianChart
          data={DATA}
          padding={30}
          domainPadding={20}
          xKey="day"
          yKeys={['highTmp']}
          axisOptions={{
            font,
            lineColor: '#f7f7fe',
            labelColor: '#f7f7fe',
          }}
          chartPressState={[firstPress, secondPress]}>
          {({points}) => (
            <>
              <Line
                points={points.highTmp}
                color="#ffffff"
                strokeWidth={2}
                animate={{type: 'timing', duration: 300}}
              />
              {isFirstPressActive && (
                <ToolTip
                  x={firstPress.x.position}
                  y={firstPress.y.highTmp.position}
                />
              )}
              {isSecondPressActive && (
                <ToolTip
                  x={secondPress.x.position}
                  y={secondPress.y.highTmp.position}
                />
              )}
            </>
          )}
        </CartesianChart>
      )}
    </View>
  );
}

function ToolTip({x, y}: {x: SharedValue<number>; y: SharedValue<number>}) {
  return <Circle cx={x} cy={y} r={8} color="black" />;
}

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
    backgroundColor: 'red',
  },
});
