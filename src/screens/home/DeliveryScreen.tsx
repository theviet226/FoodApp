import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import HeaderHome from '../../components/home/HeaderHome'


const DeliveryScreen:React.FC = () => {
  return (
    

    <View style={styles.container}>
      <HeaderHome/>
    </View>
    
  )
}
const styles= StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: '#fff'
    }
})

export default DeliveryScreen