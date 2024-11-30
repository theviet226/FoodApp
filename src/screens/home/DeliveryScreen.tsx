import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import HeaderHome from '../../components/home/HeaderHome'
import Graphic from '../../components/home/Graphic'

const DeliveryScreen:React.FC = () => {
  return (
    <View style={styles.container}>
      <HeaderHome/>
      <Graphic/>
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