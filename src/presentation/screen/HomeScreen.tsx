import React from 'react';
import {
  StyleSheet,
  Image,
  StatusBar,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import Background from '../components/CustomBackround';
const {width, height} = Dimensions.get('window');

export const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'light-content'} backgroundColor={'black'} />
      <Background>
        <Image
          source={require('../../assets/images/2.png')}
          style={{
            position: 'absolute',
            width: '20%',
            height: '80%',
            resizeMode: 'contain',
          }}
        />
      </Background>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
  },
  text: {
    width: width * 0.11,

    color: 'white',
    fontSize: width * 0.13,
    fontWeight: '800',
  },
});
