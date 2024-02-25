import { SafeAreaView, StyleSheet, StatusBar, Text, View, Modal, Button } from 'react-native'
import React, { useState } from 'react'

const ModalOne = () => {

  const [showModal, setShowModal] = useState(false)

  return (
    // https://www.youtube.com/watch?v=BCZdglzNgdI
    // React-Native tutorial #14 Modal (popup) by Code Step by Step 45k views 7:53 seconds
    <View style={styles.container}>
      <Text style={styles.mainText}>Normal Text</Text>
      <Button title="Show Modal" onPress={() => setShowModal(true)} />
      <Modal
        transparent={true}
        visible={showModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modal}>
            <Text style={styles.modalText}>Modal Text</Text>
            <Button title="Close Modal" onPress={() => setShowModal(false)} />
          </View>
        </View>
      </Modal>
    </View>
  )
}

export default ModalOne

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  mainText: {
    fontSize: 80
  },
  modalText: {
    fontSize: 50
  },
  modalContainer: {
    backgroundColor: "#000000aa",
    flex: 1
  }, modal: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 10,
    margin: 50,
    padding: 40
  }
});
