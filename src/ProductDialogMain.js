import { useState, useRef } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import PrododctDialogModal from "./ProductDialogModal"
import React from 'react'

const data = [
  {
    id: 1,
    name: "IphoneX",
    img:
      "https://cdn-v2.didongviet.vn/files/products/2024/0/31/1/1706689040730_thumb_02.jpg"
  },
  {
    id: 2,
    name: "Samsung Fold",
    img:
      "https://cdn-v2.didongviet.vn/files/products/2023/11/13/1/1702403718751_samsung_z_fold5_didongviet.png"
  },
  {
    id: 3,
    name: "Laptop Gaming",
    img:
      "https://cdn-v2.didongviet.vn/files/media/catalog/product/m/i/mieng-dan-man-hinh-laptop-14-inch-didongviet_3.jpg"
  }
];

const ProductDialogMain = () => {

  const [products, setProducts] = useState(data);
  const [dialog, setDialog] = useState({
    message: "",
    showModal: false,
    nameOfItemToDelete: ""
  });
  const idProductRef = useRef();

  const handleShowModal = (message, showModal, nameOfItemToDelete) => {
    setDialog({
      message,
      showModal,
      //Update
      nameOfItemToDelete
    });
  };

  const handleDelete = (id) => {
    const index = data.findIndex((item) => item.id === id);
    handleShowModal("Are you sure?", true, data[index].name);
    idProductRef.current = id;
  };

  const areUSureDelete = (choose) => {
    const noMessage = ""
    if (choose) {
      // if "yes" remove item
      setProducts(products.filter((itemB) => itemB.id !== idProductRef.current));
      handleShowModal(noMessage, false);
    } else {
      // if false 
      handleShowModal(noMessage, false);
    }
  };


  return (
    <View style={styles.container}>
      {products.map((product) => (
        <View key={product.id} style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
        >
          <Text key={product.name} style={styles.appText}>{product.name}</Text>
          <Image key={product.id} style={{ width: 100, height: 100, objectFit: "cover" }} source={{
            uri: `${product.img}`
          }} />
          <TouchableOpacity style={{
            marginRight: 40,
            marginLeft: 40,
            marginTop: 10,
            paddingTop: 10,
            paddingBottom: 10,
            borderRadius: 8,
            borderWidth: 1,
            borderColor: '#fff',
            backgroundColor: "red"
          }}
            onPress={() => handleDelete(product.id)} >
            <Text style={{
              fontWeight: "700",
              color: '#fff',
              textAlign: 'center',
              paddingLeft: 10,
              paddingRight: 10
            }}>Delete</Text>
          </TouchableOpacity>
        </View>
      ))}
      {dialog.showModal && (
        <PrododctDialogModal
          //
          nameOfItemToDelete={dialog.nameOfItemToDelete}
          onDialog={areUSureDelete}
          message={dialog.message}
        />
      )}

    </View>
  )
}

export default ProductDialogMain

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }, appText: {
    fontfamily: 'sans-serif',
    fontSize: 24,
    textAlign: 'center',
    fontWeight: "700"
  }
})