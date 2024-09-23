import React from 'react';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {NavigationTopTabs} from './routes/NavigationTopTabs';

export const App = () => {
  return (
    <NavigationContainer>
      <NavigationTopTabs />
    </NavigationContainer>
  );
};
