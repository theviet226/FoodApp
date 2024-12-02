import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import HeaderHome from '../../components/home/HeaderHome';
import Category from '../../components/list/Category';
import { theme } from '../../themes';
import Graphic from '../../components/home/Graphic';
import Recommended from '../../components/list/Recommended';
import RestaurantList from '../../components/list/RestaurantList';

const DeliveryScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <ScrollView
      showsHorizontalScrollIndicator={false}>

      <View>
        <Graphic/>
      </View>
      <View style={styles.topHeader}>

      <HeaderHome />
      </View>
      <Category/>
      <Recommended/>
      <RestaurantList/>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.background,
  },
  topHeader: {
    zIndex: 11,
    // alignSelf: 'center',
    paddingHorizontal: 10,
},
});

export default DeliveryScreen;
