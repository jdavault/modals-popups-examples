import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const ProductDialogModal = ({ message, onDialog }) => {
  return (
    < TouchableOpacity style={{
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0,0,0,0.5)"
    }}
      onPress={() => onDialog(false)}

    >
      < TouchableOpacity
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "absolute",
          top: "30%",
          left: "25%",
          right: "0%",
          backgroundColor: "white",
          transform: [{ translateX: -50 }, { translateY: 50 }],
          background: "white",
          padding: 30,
          borderRadius: 10
        }}

      >
        <Text style={{ color: "black", fontSize: 20 }}>{message}</Text>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <TouchableOpacity title="Yes" style={{
            marginRight: 10,
            marginLeft: 10,
            marginTop: 10,
            padding: 15,
            borderRadius: 8,
            borderWidth: 1,
            borderColor: '#fff',
            backgroundColor: "green"
          }}
            onPress={() => onDialog(true)}>
            <Text style={{
              fontWeight: "600",
              color: '#fff',
              textAlign: 'center',
              fontSize: 20,
              paddingLeft: 10,
              paddingRight: 10
            }}>Yes</Text>

          </TouchableOpacity>
          <TouchableOpacity title="No" style={{
            marginRight: 10,
            marginLeft: 10,
            marginTop: 10,
            padding: 15,
            paddingTop: 15,
            borderRadius: 8,
            borderWidth: 1,
            borderColor: '#fff',
            backgroundColor: "red"
          }}
            onPress={() => onDialog(false)}>
            <Text style={{
              fontWeight: "600",
              color: '#fff',
              textAlign: 'center',
              fontSize: 20,
              paddingLeft: 10,
              paddingRight: 10
            }}>No</Text>

          </TouchableOpacity>

        </View>

      </TouchableOpacity>


    </TouchableOpacity >
  )
}

export default ProductDialogModal


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
})
