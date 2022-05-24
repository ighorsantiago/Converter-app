import React from 'react';
import { Platform } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { FontAwesome5 } from '@expo/vector-icons';

import { Length } from '../screens/Length';
import { Temperature } from '../screens/Temperature';
import { Weight } from '../screens/Weight';
import { Time } from '../screens/Time';

const AppTab = createBottomTabNavigator();

export function AppTabRoutes() {
  return (
    <AppTab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor:"#33FF33",
      }}
    >
      <AppTab.Screen
        name="Comprimento"
        component={Length}
        options={{
          tabBarIcon: (({ size, color}) => (
            <FontAwesome5
              name="ruler"
              size={size}
              color={color}
            />
          ))
        }}
      />

      <AppTab.Screen
        name="Temperatura"
        component={Temperature}
        options={{
          tabBarIcon: (({ size, color}) => (
            <FontAwesome5
              name="temperature-low"
              size={size}
              color={color}
            />
          ))
        }}
      />
      <AppTab.Screen
        name="Peso"
        component={Weight}
        options={{
          tabBarIcon: (({ size, color}) => (
            <FontAwesome5
              name="weight"
              size={size}
              color={color}
            />
          ))
        }}
      />

      <AppTab.Screen
        name="Tempo"
        component={Time}
        options={{
          tabBarIcon: (({ size, color}) => (
            <FontAwesome5
              name="clock"
              size={size}
              color={color}
            />
          ))
        }}
      />
    </AppTab.Navigator>
  )
}
