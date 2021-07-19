/**
 * Sample React Native Router
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import 'react-native-gesture-handler';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Jobs from './screens/Jobs';
import Detail from './screens/Detail';
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const JobStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerTitleStyle: {
          color: '#ef5350',
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen name="Jobs" component={Jobs} />
      <Stack.Screen
        name="Detail"
        options={({route}) => ({title: route.params.name})}
        component={Detail}
      />
    </Stack.Navigator>
  );
};

const Router = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Jobs" component={JobStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Router;
