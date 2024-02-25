import { StyleSheet, SafeAreaView, Modal, View, Button, Dimensions } from 'react-native'
import React, { useState } from 'react';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

const ModalBasarat = () => {

  const { height, width } = Dimensions.get("window");
  // https://www.youtube.com/watch?v=Nw1St1h5Ylc
  // React Native Modal Component Tutorial - 8k views basarat (2023)

  const [visible, setVisible] = useState(false);

  const show = () => {
    setVisible(true)
  }

  const hide = () => {
    setVisible(false)
  }

  return (
    <SafeAreaView style={styles.fill}>
      <Button title="Show" onPress={show} />
      <Modal
        visible={visible}
        animationType="fade"
        onRequestClose={hide} //for android back button
        transparent={true}
      >
        <Pressable style={styles.overlay} onPress={hide} />
        <View style={styles.modalContent}>
          <Button title="Hide" onPress={hide} />
        </View>
      </Modal>
    </SafeAreaView>
  )
}

export default ModalBasarat

const styles = StyleSheet.create({
  fill: {
    flex: 1
  },
  overlay: {
    height: 100,
    backgroundColor: '#DDD',
    opacity: .5
  },
  modalContent: {
    flex: 1,
    backgroundColor: 'white'
  }

});
