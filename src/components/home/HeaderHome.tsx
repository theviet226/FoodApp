import { View, Text, StyleSheet } from 'react-native'
import React, { FC } from 'react'
import LocationHeader from './LocationHeader'

import SearchBar from './Search'
import Graphic from './Graphic'

const HeaderHome:FC = () => {
  return (
    <View style={styles.container}>
      <LocationHeader/>
      <Graphic/>
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