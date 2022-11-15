import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Explore from '../screens/Explore';
import Repositories from '../screens/Repositories';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Splash from '../screens/Splash';

const Tab = createMaterialTopTabNavigator();
const Stack = createNativeStackNavigator();

function TabNav() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Explore" component={Explore} />
      <Tab.Screen name="Repositories" component={Repositories} />
    </Tab.Navigator>
  );
}
export const MainNav = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerLeft: () => (
          <Image
            source={require('../../picture/logo.png')}
            style={{height: 30, width: 140}}
          />
        ),
        title: '',
        headerRight: () => <Icon size={25} name="magnify" color="#aaa" />,
      }}>
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Tab" component={TabNav} />
    </Stack.Navigator>
  );
};
