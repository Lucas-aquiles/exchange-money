import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {HomeScreen} from '../presentation/screen/HomeScreen';
import {SettingScreen} from '../presentation/screen/SettingScreen';

const Tab = createMaterialTopTabNavigator();

export const NavigationTopTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: true,
        tabBarActiveTintColor: 'green',
        tabBarInactiveTintColor: 'red',
        tabBarLabelStyle: {
          marginBottom: 5,
        },
      }}>
      <Tab.Screen key="home-tab" name="Home" component={HomeScreen} />
      <Tab.Screen key="setting-tab" name="Settings" component={SettingScreen} />
    </Tab.Navigator>
  );
};
