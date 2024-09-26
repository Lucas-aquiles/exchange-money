import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {HomeScreen} from '../presentation/screen/HomeScreen';
import {SettingScreen} from '../presentation/screen/SettingScreen';
import {ExchangeMoney} from '../presentation/screen/ExchangeMoney';
import {colors} from '../config/theme/app-theme';
import {PixelRatio, StyleSheet, Dimensions} from 'react-native';
import {HistoryBlue} from '../presentation/screen/HistoryBlue';

const Tab = createMaterialTopTabNavigator();
const {width, height} = Dimensions.get('window');

export const NavigationTopTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: true,
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: colors.primary,
        tabBarStyle: {
          backgroundColor: colors.secondary,
        },
        tabBarIndicatorStyle: {
          backgroundColor: 'white',
          height: 2,
          width: width * 0.15,
          marginLeft: width * 0.055,
        },
        tabBarItemStyle: {
          paddingVertical: 1,
        },
      }}>
      <Tab.Screen key="home-tab" name="Home" component={HomeScreen} />
      <Tab.Screen
        key="exchange-tab"
        name="Exchange"
        component={ExchangeMoney}
      />
      <Tab.Screen key="history-tab" name="History" component={HistoryBlue} />

      <Tab.Screen key="setting-tab" name="Settings" component={SettingScreen} />
    </Tab.Navigator>
  );
};
