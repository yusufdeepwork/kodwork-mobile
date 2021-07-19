/**
 * Sample React Native Router
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Jobs from './screens/Jobs';
import Detail from './screens/Detail';
import Favorites from './screens/Favorites';
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

import FavoritesJobProvider from './context/Provider';

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
        options={({route}) => ({title: route.params.job.name})}
        component={Detail}
      />
    </Stack.Navigator>
  );
};

const Router = () => {
  return (
    <FavoritesJobProvider>
      <NavigationContainer>
        <Drawer.Navigator
          drawerContentOptions={{
            activeTintColor: '#e91e63',
            labelStyle: {fontSize: 15},
          }}>
          <Drawer.Screen name="Jobs" component={JobStack} />
          <Drawer.Screen name="Favorites" component={Favorites} />
        </Drawer.Navigator>
      </NavigationContainer>
    </FavoritesJobProvider>
  );
};

export default Router;
