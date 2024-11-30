import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React, {FC} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const SocicalLogin: FC = () => {
  return (
    <View style={styles.socialContainer}>
      <TouchableOpacity style={styles.iconContainer}>
        <Image
          source={require('../../assets/images/google.png')}
          style={styles.gimg}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconContainer}>
        <Icon name="apple" color="#000" size={24} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconContainer}>
        <Icon name="ellipsis-h" color="#000" size={24} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  socialContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 60,
    marginTop: 20,
  },
  iconContainer: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
    elevation: 5,
    shadowRadius: 4,
    shadowColor: '#000',
    borderColor: '#000',
    borderRadius: 10,
  },
  gimg: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
});

export default SocicalLogin;
