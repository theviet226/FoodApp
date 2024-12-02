import React from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
// import { MaterialIcons } from "@expo/vector-icons";
import Icon from 'react-native-vector-icons/AntDesign'
import { restaurantItemsData } from "../../utils/dummyData";



const RestaurantScreen = () => {
  const renderMenuItem = ({ item }: { item: any }) => (
    <View style={styles.menuCard}>
      <Image source={{ uri: item.image }} style={styles.menuImage} />
      <View style={styles.menuInfo}>
        <Text style={styles.menuName}>{item.name}</Text>
        <Text style={styles.menuDescription}>{item.description}</Text>
        <Text style={styles.menuPrice}>₹{item.price}</Text>
        {item.isVeg ? (
          <Text style={[styles.vegIndicator, { color: "green" }]}>Veg</Text>
        ) : (
          <Text style={[styles.vegIndicator, { color: "red" }]}>Non-Veg</Text>
        )}
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{
            uri: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/dpventcrozvfni0lqb10",
          }}
          style={styles.restaurantImage}
        />
        <TouchableOpacity style={styles.heartIcon}>
          <Icon name="heart" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      <View style={styles.restaurantInfo}>
        <Text style={styles.restaurantName}>Your Restaurant Name</Text>
        <Text style={styles.restaurantDescription}>
          Delicious food, great atmosphere, and excellent service!
        </Text>
      </View>

      <FlatList
        data={restaurantItemsData}
        keyExtractor={(item) => item.id}
        renderItem={renderMenuItem}
        contentContainerStyle={styles.menuList}
        ListHeaderComponent={() => (
          <Text style={styles.menuHeader}>Menu</Text>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
  },
  header: {
    position: "relative",
  },
  restaurantImage: {
    width: "100%",
    height: 200,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  heartIcon: {
    position: "absolute",
    top: 16,
    right: 16,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: 50,
    padding: 8,
  },
  restaurantInfo: {
    padding: 16,
    backgroundColor: "#fff",
    marginBottom: 8,
    borderBottomWidth: 1,
    borderColor: "#eee",
  },
  restaurantName: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 4,
    color: "#333",
  },
  restaurantDescription: {
    fontSize: 14,
    color: "#777",
  },
  menuList: {
    paddingHorizontal: 16,
  },
  menuHeader: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#333",
  },
  menuCard: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 8,
    marginBottom: 16,
    overflow: "hidden",
    elevation: 2,
  },
  menuImage: {
    width: 80,
    height: 80,
  },
  menuInfo: {
    flex: 1,
    padding: 8,
  },
  menuName: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
    color: "#333",
  },
  menuDescription: {
    fontSize: 12,
    color: "#777",
    marginBottom: 8,
  },
  menuPrice: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
  },
  vegIndicator: {
    fontSize: 12,
    fontWeight: "bold",
  },
});

export default RestaurantScreen;
