import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Statusbar, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from './src/home';
import { BmiCalculator } from './src';
import { Profile } from './src/profile';
import { Currencyconverter } from './src/currencyconverter';


const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerStyle: { height: 200, } }}>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='BMI' component={BmiCalculator} />
        <Stack.Screen name='Currency Converter' component={Currencyconverter} />
        <Stack.Screen name='Profile' component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>

  );
};



export default App