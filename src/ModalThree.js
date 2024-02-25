import { StyleSheet, Text, View, Button, Dimensions } from 'react-native'
import React, { useState } from 'react';
import Modal from './Modal';

const ModalThree = () => {

  const { height, width } = Dimensions.get("window");
  // https://www.youtube.com/watch?v=D5oswSO9y-k
  // Build A Custom React JS Modal - Using Hooks (Pop-up Windoww) 36k Code Commerce (2023)

  const [openModal, setOpenModal] = useState(false);

  return (
    <View style={styles.container}>
      <Button title="Modal" onPress={() => setOpenModal(true)} />
      <Modal
        open={openModal}
        onClose={() => setOpenModal(false)} />
    </View>
  )
}

export default ModalThree

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalButton: {
    position: 'absolute',
    top: '40%',
    left: '50%',
    transform: [{ translateX: -50 }, { translateY: 50 }],
    zIndex: -1,
    paddingTop: 12,
    paddingBottom: 24
  }


});
