import { View, Text, StyleSheet } from 'react-native'
import React, { FC } from 'react'

const BreakText:FC<{text:string}> = ({text}) => {
  return (
    <View style={styles.breakerContainer}>
          <View style={styles.horizontalLine}></View>
          <Text style={styles.breakerText}>{text}</Text>
          <View style={styles.horizontalLine}></View>
        </View>
  )
}
const styles = StyleSheet.create({
    breakerContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
        overflow: 'hidden',
        width: '100%',
        marginTop: 20,
        marginBottom: 10,
      },
      horizontalLine: {
        height: 1,
        width: '100%',
        position: 'absolute',
        bottom: 18,
        backgroundColor: '#d7d4d4',
        zIndex: -1,
      },
      breakerText: {
        opacity: 0.8,
        backgroundColor: '#fff',
        paddingHorizontal: 10,
        color: '#000',
        fontSize: 16,
        fontWeight: '300',
      },
})
export default BreakText