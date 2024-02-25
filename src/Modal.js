import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react'
//import nft from './nft.jpg';

const Modal = ({ open, onClose }) => {

  if (!open) return null;

  return (
    <TouchableOpacity onPress={onClose} style={styles.overlay}>
      <View style={styles.modalContainer}>
        <Image source={require('./nft.jpg')} style={styles.modalImage} />
        <View style={styles.modalRight}>
          <Text style={styles.closeBtn} onPress={onClose}>
            X
          </Text>
          <View style={styles.content}>
            <Text>Do you want a</Text>
            <Text style={styles.largeText}>$20 CREDIT</Text>
            <Text>for your first trade?</Text>
          </View>
          <View style={styles.btnContainer}>
            <TouchableOpacity style={[styles.btnPrimary, styles.btnContainerButton]}>
              <Text style={[styles.bold, styles.btnTextColor]}>YES, I love NFT's</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.btnOutline, styles.btnContainerButton]}>
              <Text style={[styles.bold, styles.btnTextColor]}>NO, thanks</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default Modal

const styles = StyleSheet.create({
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    position: 'absolute',
    width: '100%',
    height: '100%'
  },
  modalContainer: {
    maxWidth: 500,
    flex: 1,
    flexDirection: "row",
    width: '90%',
    position: 'absolute',
    top: '20%',
    left: '18%',
    transform: [{ translateX: -50 }, { translateY: 50 }],
    display: 'flex',
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.75,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 8,
  },
  modalImage: {
    width: 180,
    height: '100%',
    resizeMode: 'cover',
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  modalRight: {
    width: '100%',
    flex: 1
  },
  closeBtn: {
    position: 'absolute',
    top: 8,
    right: 8
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
    marginTop: 36,
    paddingVertical: 16,
    paddingHorizontal: 24,
  },
  largeText: {
    fontWweight: '500',
    fontSize: 30
  },
  btnContainer: {
    display: 'flex',
    paddingTop: 16,
    paddingBottom: 16
  },
  btnTextColor: {
    color: 'white'
  },
  btnContainerButton: {
    width: '100%',
    margin: .5,
    paddingTop: 16,
    paddingBottom: 0,
    borderColor: "#411b57",
    // borderStyle: 'solid',
    // borderWidth: 1
  },
  btnPrimary: {
    backgroundColor: '#411b57',
    color: 'white'
  },
  btnOutline: {
    /* background-color: #a76a99', */
    backgroundColor: '#a76a99',
    color: 'white'
  },
  bold: {
    fontWeight: '600',
  }
})