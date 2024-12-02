import {View, Text} from 'react-native';
import React from 'react';
// import { createStackNavigator } from '@react-navigation/stack'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import LoginScreen from '../screens/auth/LoginScreen';
import UserBottomTab from '../screens/tabs/UserBottomTab';
import { navigationRef } from '../utils/NavigationUtils';
import RestaurantScreen from '../screens/restaurant/RestaurantScreen';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="RestaurantScreen" component={RestaurantScreen}/>
        <Stack.Screen name='UserBottomTab' component={UserBottomTab}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
