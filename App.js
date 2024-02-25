import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ModalThree from './src/ModalThree';

// https://www.youtube.com/watch?v=iMCM1NceGJY
export default function App() {
  return (
    <ModalThree />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
