import React from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {recommendedListData} from '../../utils/dummyData';
import BreakText from '../ui/BreakText';
import {navigate} from '../../utils/NavigationUtils';

const RestaurantList = () => {
  const renderItem = ({item}: {item: any}) => (
    <TouchableOpacity
      onPress={() => navigate('RestaurantScreen', {item: item})}
      style={styles.card}>
      <Image source={{uri: item.imageUrl}} style={styles.image} />

      <View style={styles.infoContainer}>
        <Text style={styles.name}>{item.name}</Text>

        {item.rating && (
          <Text style={[styles.rating, item.rating < 3 && styles.ratingLow]}>
            ⭐ {item.rating.toFixed(1)}
          </Text>
        )}

        {item.discount && (
          <Text style={styles.discount}>
            {item.discount} ({item.discountAmount})
          </Text>
        )}

        <Text style={styles.details}>
          <Image
            source={require('../../assets/images/clock.png')}
            style={styles.clockIcon}
          />
          {item.time} | {item.distance}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View>
      <BreakText text="ALL RESTAURANT" />

      <FlatList
        data={recommendedListData}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    padding: 16,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 16,
    padding: 8,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    alignItems: 'center',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 8,
  },
  infoContainer: {
    flex: 1,
    marginLeft: 12,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  discount: {
    fontSize: 14,
    color: '#FF5722',
    marginBottom: 4,
  },
  details: {
    fontSize: 12,
    color: '#777',
    marginBottom: 4,
  },
  rating: {
    fontSize: 14,
    color: '#4CAF50',
    fontWeight: 'bold',
  },
  ratingLow: {
    color: '#F44336',
  },
  clockIcon: {
    width: 14,
    height: 14,
    resizeMode: 'contain',
  },
});

export default RestaurantList;
