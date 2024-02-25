import { Modal, StyleSheet, Dimensions, Text, View, FlatList, TouchableWithoutFeedback } from 'react-native'
import React, { useState } from 'react'

const deviceHeight = Dimensions.get("window").height;

const BottomPopup = (props) => {
  const [showModal, setShowModal] = useState(false)

  const close = () => {
    setShowModal(false)
  }

  const show = () => {
    setShowModal(true)
  }

  const renderOutsideTouchable = (onTouch) => {
    const view = <View
      style={{ flex: 1, width: '100%' }}
    />
    if (!onTouch) return view

    return (
      <TouchableWithoutFeedback
        onPress={onTouch}
        style={{ flex: 1, width: '100%' }}
      >
        {view}
      </TouchableWithoutFeedback>)
  }

  const { onTouchOutside, title, ref, data } = props;

  const renderTitle = () => {
    const { title } = this.props
    return (<View style={styles.titleContainer}>
      <Text style={styles.modalText}>{title}
      </Text>
    </View>)
  }

  const renderItem = ({ item }) => {
    return (<View style={{ height: 50, flex: 1, alignItems: 'flex-start', justifyContent: 'center', marginLeft: 20 }}>
      <Text style={{ fontSize: 18, fontWeight: 'normal', color: '#182E44' }}>{item.name}
      </Text>
    </View>)
  }

  const renderSeparator = () => {
    <View style={{ opacity: 0.1, backgroundColor: '#182E44', height: 1 }}>
    </View>
  }

  const renderContent = () => {
    const { title } = props;
    return (<View>
      <FlatList
        style={{ marginBottom: 20 }}
        showsVerticalScrollIndicator={false}
        data={data}
        renderItem={renderItem}
        extraData={data}
        keyExtractor={(item, index) => index.toString()}
        ItemSeparatorComponent={renderSeparator}
        contentContainerStyles={{ paddingBottom: 40 }}
      />
    </View>)

  }

  return (
    <Modal
      animationType={'fade'}
      transparent={true}
      visible={showModal}
      onRequestClose={close}
    >
      <View style={styles.container}>
        {renderOutsideTouchable(onTouchOutside)}
        <View style={styles.titleText}>
          {renderTitle()}
          {renderContent()}
        </View>
      </View>
    </Modal>

  )
}

export default BottomPopup

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000000aa",
    flex: 1,
    justifyContent: 'flex-end'
  },
  titleContainer: {
    alignItems: 'center'
  },
  titleText: {
    flex: 1,
    backgroundColor: "#fff",
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    width: '100%',
    maxHeight: deviceHeight * 0.4,
    margin: 50,
    paddingHorizontal: 40
  },
  modalText: {
    color: '#182E44',
    fontSize: 20,
    fontWeight: '500',
    marginTop: 15,
    marginBottom: 30
  },
});