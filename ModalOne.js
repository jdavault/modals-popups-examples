import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ModalOne = () => {
  return (
    <View style={styles.container}>
      <Text>Modal One</Text>
    </View>
  )
}

export default ModalOne

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
