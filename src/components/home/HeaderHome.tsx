import { View, Text, StyleSheet } from 'react-native'
import React, { FC } from 'react'
import LocationHeader from './LocationHeader'
import Graphic from './Graphic'
import SearchBar from './Search'

const HeaderHome:FC = () => {
  return (
    <View style={styles.container}>
      <LocationHeader/>
      {/* <SearchBar/> */}
    </View>
  )
}
const styles = StyleSheet.create({
  container : {
    // flexDirection : 'row',
    // justifyContent: 'center'
  }
})
export default HeaderHome