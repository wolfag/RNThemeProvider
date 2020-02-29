/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import MainScreen from './screens/Main';
import SettingScreen from './screens/Setting';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: 'pink',
          },
          headerTintColor: 'green',
          headerTitleStyle: {
            fontWeight: '500',
          },
        }}>
        <Stack.Screen name="main" component={MainScreen} />
        <Stack.Screen
          name="setting"
          component={SettingScreen}
          initialParams={{name: 'Noname'}}
          options={({route}) => ({
            title: route.params.name,
            headerStyle: {
              backgroundColor: 'red',
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
