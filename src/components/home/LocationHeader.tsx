import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'

const LocationHeader = () => {
  return (
    <View style={styles.locationContainer}>
        <View style={styles.flexRowGap}>
           <Icon name='location' size={30} color={'#fff'}/>
        </View>
        <TouchableOpacity style={styles.flexRow}>
            <Text style={styles.locationText}>Thanh Khê, Đà Nẵng</Text>
        </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
    locationContainer:{
        marginTop : 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    flexRowGap: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4
    },
    flexRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    locationText:{
        color : '#fff',
        fontSize: 18,
        fontWeight: '600'
    }
})
export default LocationHeader