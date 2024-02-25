import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, ScrollView } from 'react-native';

export default function HomeScreen() {
  const [people, setPeople] = useState([
    { name: 'shaun', id: '1' },
    { name: 'yoshi', id: '2' },
    { name: 'mario', id: '3' },
    { name: 'luigi', id: '4' },
    { name: 'peach', id: '5' },
    { name: 'todd', id: '6' },
    { name: 'bowser', id: '7' },
    { name: 'sarah', id: '8' },
    { name: 'lisa', id: '9' },
  ]);

  const renderItem = ({ item, index }) => {
    return (
      <Text style={styles.item}>{item.name}</Text>
    )
  }

  return (
    <View style={styles.container}>
      {/* <ScrollView>
        {people.map(item =>
          <View key={item.id}>
            <Text style={styles.item}>{item.name}</Text>
          </View>
        )}
      // </ScrollView> numColumns */}
      <FlatList
        keyExtractor={item => item.id}
        data={people}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 80,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  item: {
    flex: 1,
    marginHorizontal: 10,
    marginTop: 24,
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 24,
  },
});