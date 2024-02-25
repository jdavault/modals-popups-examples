import { StyleSheet, Text, View, Image, Button } from 'react-native';
import React, { useState } from 'react'
import ConfirmButton from './ConfirmButton';
const ThreePressConfirm = () => {

  const deleteSomething = () => {
    console.log("ITEM DELETED")
  }

  const [submitDisabled, setSubmitDisabled] = useState(true);

  return (
    <View style={styles.container}>
      <Text>Welcome to React</Text>
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Image style={{ width: 100, height: 100, alignSelf: 'center', marginTop: 300 }} source={require('../images/logo.png')} />
        {/* <Button title="Delete" onPress={() => deleteSomething()} /> */}
        <ConfirmButton disable={submitDisabled} dialog={['Delete', 'Are You Sure?', 'Once more to delete!']} action={deleteSomething}
        />
      </View>
    </View>
  );
}

export default ThreePressConfirm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
