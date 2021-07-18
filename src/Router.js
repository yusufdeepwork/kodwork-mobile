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
import Jobs from './screens/Jobs';
import Detail from './screens/Detail';
const Stack = createStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
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
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default Router;
