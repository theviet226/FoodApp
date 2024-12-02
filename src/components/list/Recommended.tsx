import {
  View,
  Text,
  ScrollView,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import ScalePress from '../ui/ScalePress';
import {theme} from '../../themes';
import {navigate} from '../../utils/NavigationUtils';
import {recommendedListData} from '../../utils/dummyData';
import CustomGradient from '../global/CustomGradient';
import BreakText from '../ui/BreakText';

const Recommended = () => {
  const [recommended, setRecommended] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  ]);
  const renderItem = ({item}: {item: any}) => {
    return (
      <ScalePress
        style={styles.itemContainer}
        onPress={() => {
          navigate('RestaurantScreen', {item: item});
        }}>
        <View style={styles.imageContainer}>
          <Image source={{uri: item.imageUrl}} style={styles.itemImage} />
          {item?.discount && (
            <View style={styles.discountContainer}>
              <Text style={styles.discountText}>{item?.discount}</Text>
              {item?.discountAmount && (
                <Text style={styles.discountAmountText}>
                  {' '}
                  {item?.discountAmount}
                </Text>
              )}
            </View>
          )}
          <CustomGradient position="bottom" />
        </View>
        <View style={styles.itemInfo}>
          <Text style={styles.itemName}>{item.name}</Text>
          <View style={styles.flexRow}>
            <Image
              source={require('../../assets/images/clock.png')}
              style={styles.clockIcon}
            />
            <Text
              style={{
                color: '#9197A6',
              }}>{`${item.time} • ${item.distance}`}</Text>
          </View>
        </View>
      </ScalePress>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <BreakText text="RECOMMENDED"/>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <FlatList
          numColumns={Math.ceil(recommendedListData?.length / 2)}
          data={recommendedListData}
          renderItem={renderItem}
          scrollEnabled={false}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.listContainer}
          style={styles.recommendedContainer}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // marginBottom: 32,
    flex: 1,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 10,
    // marginBottom: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    letterSpacing: 1,
  },
  text: {
    fontSize: 18,
    color: theme.text,
    fontWeight: 'bold',
  },
  listContainer: {
    paddingHorizontal: 15,
  },
  recommendedContainer: {
    marginTop: 15,
    // paddingLeft: 10,
  },
  itemContainer: {
    marginRight: 15,
    width: theme.width * 0.3,
    overflow: 'hidden',
    marginBottom: 15,
  },
  imageContainer: {
    borderRadius: 12,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#000',
  },
  itemImage: {
    width: '100%',
    height: 100,
  },
  centerText: {
    textAlign: 'center',
    opacity: 0.4,
    marginVertical: 10,
  },
  discountContainer: {
    position: 'absolute',
    bottom: 8,
    left: 8,
    zIndex: 2,
  },
  discountText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
  },
  discountAmountText: {
    fontSize: 10,
    color: '#fff',
    lineHeight: 11,
  },
  itemInfo: {
    marginTop: 8,
  },
  itemName: {
    fontSize: 14,
    color: '#000',
    fontWeight: '600',
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  clockIcon: {
    width: 14,
    height: 14,
    resizeMode: 'contain',
  },
});

export default Recommended;
