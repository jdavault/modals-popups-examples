import { SafeAreaView, StyleSheet, StatusBar, Text, View, Modal, Button, TouchableWithoutFeedback } from 'react-native'
import React, { useState } from 'react'
import BottomPopup from './BottomPopup'

const ModalTwo = () => {

  let popupRef = React.createRef()
  const popuplist = [
    {
      id: 1,
      name: 'Task'
    },
    {
      id: 2,
      name: 'Message'
    }, {
      id: 3,
      name: 'Note'
    },
  ]

  const onShowPopup = () => {
    console.log("onShowPopup")
    popupRef.show()
  }
  const onClosePopup = () => {
    console.log("onClosePopup")
    popupRef.close()
  }

  return (
    // https://www.youtube.com/watch?v=nZWW7Ue9TD0
    // React-Native Show Popup by Lirs Tech Tips 60k views 10:53 seconds
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <TouchableWithoutFeedback onPress={onShowPopup}>
          <Text
            style={styles.textStyle}
          >Show PopUp!</Text>
        </TouchableWithoutFeedback>
        <BottomPopup
          title="Demo Popup"
          ref={(target) => popupRef = target}
          onTouchOutside={onClosePopup}
          data={popuplist}
        />
      </SafeAreaView>
    </>
  )
}

export default ModalTwo

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textStyle: {
    fontSize: 20
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
