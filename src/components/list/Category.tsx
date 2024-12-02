import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import {theme} from '../../themes';
import BreakText from '../ui/BreakText';
import {regularFoodData} from '../../utils/dummyData';
import ScalePress from '../ui/ScalePress';
import {navigate} from '../../utils/NavigationUtils';

const Category = () => {
  const renderItem = ({item}: {item: any}) => {
    return (
      <ScalePress style={styles.itemContainer}>
        <Image source={{uri: item?.imageUrl}} style={styles.regularFoodImage} />
      </ScalePress>
    );
  };

  return (
    <View style={styles.container}>
      <BreakText text="WHAT'S ON YOUR MIND?"/>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <FlatList
          numColumns={Math.ceil(regularFoodData?.length / 2)}
          data={regularFoodData}
          renderItem={renderItem}
          scrollEnabled={false}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.listContainer}
          style={styles.regularFoodContainer}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    paddingHorizontal: 15,
  },
  regularFoodContainer: {
    marginVertical: 10,
  },
  itemContainer: {
    marginRight: 15,
    width: theme.width * 0.3,
    overflow: 'hidden',
    marginBottom: 15,
  },
  regularFoodImage: {
    width: theme.width * 0.28,
    height: theme.width * 0.28,
    resizeMode: 'cover',
  },
  container: {
    marginTop: theme.bannerHeight,
  },
});

export default Category;
