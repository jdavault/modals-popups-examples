import { StyleSheet, Text, View, Button, Dimensions } from 'react-native'
import React, { useState } from 'react';
import Modal from './Modal';

const ConfirmButton = (props) => {

  const { height, width } = Dimensions.get("window");
  const [timesPressed, setTimesPressed] = useState(0);

  const onPress = () => {
    setTimesPressed(prev => {
      if ([0, 1, 2].includes(prev + 1)) {
        return prev + 1
      } else {
        return 0
      }
    })
    if (timesPressed === 2) {
      props.action();
      setTimesPressed(0)
    }
  }


  return (
    <View style={styles.container}>
      <Button title={`${props.dialog[timesPressed]}`} onPress={() => onPress()} />
      {/* <Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
      /> */}
    </View>
  )
}

export default ConfirmButton

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
