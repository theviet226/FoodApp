import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import DeliveryScreen from '../home/DeliveryScreen';
import OdersScreen from '../home/OdersScreen';
import FavoriteScreen from '../home/FavoriteScreen';
import AccountScreen from '../home/AccountScreen';

import Icon from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();
const UserBottomTab: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          height: 60,
          paddingBottom: 10,
          paddingTop: 5,
          borderTopWidth: 1,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: 'bold',
        },
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: '#7f8c8d',
      }}>
      <Tab.Screen
        name="Delivery"
        component={DeliveryScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="delivery-dining" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Oders"
        component={OdersScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="list-alt" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={FavoriteScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="favorite-border" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="account-circle" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default UserBottomTab;
