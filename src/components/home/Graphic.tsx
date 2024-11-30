import { View, Text, StyleSheet, Dimensions, Platform } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native'
const {width,height} = Dimensions.get('window')
const Graphic = () => {
  return (
    <View style={styles.lottieContainer} pointerEvents='none'>
      <LottieView
      style={styles.lottie}
      source={require('../../assets/animation/event.json')}
      hardwareAccelerationAndroid
      loop={true}
      autoPlay

      />
    </View>
  )
}
const styles = StyleSheet.create({
    lottieContainer: {
        width: width,
        backgroundColor: '#CC152D',
        height:  height * 0.5,
        justifyContent: "flex-end",
        position: "absolute",
        zIndex: -3,
        alignSelf: 'center'
    },
    lottie: {
        width: '100%',
        bottom: -1,
        height: width,
    },
})
export default Graphic