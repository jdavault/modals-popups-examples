import React, { useState } from 'react';
import { StyleSheet, Text, TouchableWithoutFeedback, FlatList, SafeAreaView, View, TextInput, Pressable } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

// https://www.youtube.com/watch?v=Dp8cQU2OcFU
// https://api.locationiq.com/v1/autocomplete.php?key=pk.eb5bd333071c28e1a441ba77c72094bf&q=phoenix&limit=10

export default function LocationSearch() {
  const [input, setInput] = useState("")
  const [data, setData] = useState([])

  const handlTextChange = async (text) => {
    setInput(text)
    if (text.length === 0) return setData([])
    try {
      if (text.length > 2) {
        let endPoint = `http://localhost:3000/api/search?location=${text}&limit=10`
        const res = await fetch(endPoint)
        if (res) {
          const data = await res.json()
          if (data && data.length > 0) {
            setData(data)
            console.log("OnChangeText", data)
          }
        }
      }
    } catch (error) {
      console.log(error)
    }
  }
  const getItemText = (item) => {
    let mainText = item.address.name;
    if (item.type === "city" && item.address.state) {
      mainText += ", " + item.address.state
    }
    return (
      <View style={{ flexDirection: "row", alignItems: "center", padding: 15 }}>
        <MaterialIcons
          name={item.type === "city" ? "location-city" : "location-on"}
          color={"black"}
          size={30}
        />
        <View style={{ marginLeft: 10, flexShrink: 1 }}>
          <Text style={{ fontWeight: "700" }}>{mainText}</Text>
          <Text style={{ fontSize: 12 }}>{item.address.country}</Text>
        </View>
      </View>
    );
  };

  const renderItem = ({ item }) => {
    return (
      <Pressable onPress={() => alert("Clicked: " + JSON.stringify(item))}>
        {getItemText(item)}
      </Pressable>
    )
  }
  return (
    // <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    <SafeAreaView style={styles.container}>
      <Text style={styles.label}>Search Location</Text>
      <TextInput
        placeholder='Find Location'
        value={input}
        onChangeText={handlTextChange}
        style={styles.input} />
      <FlatList
        keyExtractor={item => item.osm_id}
        data={data}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
    // </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  label: {
    marginLeft: 12,
    marginVertical: 5,
    fontSize: 12
  },
  input: {
    height: 40,
    marginHorizontal: 12,
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5
  },
});