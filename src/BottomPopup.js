import { Modal, StyleSheet, Dimensions, Text, View, FlatList, TouchableWithoutFeedback } from 'react-native'
import React from 'react'

const deviceHeight = Dimensions.get("window").height;

export class BottomPopup extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      showModal: false
    }
  }

  show = () => {
    console.log("INSIDE POPUP Component")
    this.setState({ showModal: true })
  }

  close = () => {
    this.setState({ showModal: false })
  }


  renderOutsideTouchable = (onTouch) => {
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

  renderTitle = () => {
    const { title } = this.props
    return (<View style={styles.titleContainer}>
      <Text style={styles.modalText}>{title}
      </Text>
    </View>)
  }

  renderItem = ({ item }) => {
    return (<View style={{ height: 50, flex: 1, alignItems: 'flex-start', justifyContent: 'center', marginLeft: 20 }}>
      <Text style={{ fontSize: 18, fontWeight: 'normal', color: '#182E44' }}>{item.name}
      </Text>
    </View>)
  }

  renderSeparator = () => {
    <View style={{ opacity: 0.1, backgroundColor: '#182E44', height: 1 }}>
    </View>
  }

  renderContent = () => {
    const { data } = this.props

    return (<View>
      <FlatList
        style={{ marginBottom: 20 }}
        showsVerticalScrollIndicator={false}
        data={data}
        renderItem={this.renderItem}
        extraData={data}
        keyExtractor={(item, index) => index.toString()}
        ItemSeparatorComponent={this.renderSeparator}
        contentContainerStyles={{ paddingBottom: 40 }}
      />
    </View>)
  }

  render() {
    let { showModal } = this.state
    const { onTouchOutside } = this.props
    return (
      <Modal
        animationType={'fade'}
        transparent={true}
        visible={showModal}
        onRequestClose={this.close}
      >
        <View style={styles.container}>
          {this.renderOutsideTouchable(onTouchOutside)}
          <View style={styles.titleText}>
            {this.renderTitle()}
            {this.renderContent()}
          </View>
        </View>
      </Modal>

    )
  }
}

export default BottomPopup

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000000aa",
    flex: 1,
    justifyContent: 'flex-end'
  },
  // titleText: {
  //   backgroundColor: "#000000aa",
  //   flex: 1
  // },
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