import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import Navbar from './src/components/navbar/Navbar';
import { useAction } from './src/hooks/useAction';
import Home from './src/screens/Home';
import { store } from './src/store/store';

export default function App() {

  return (
    <Provider store={store}>
      <StatusBar style="light" />
      <View style={styles.container}>
        <Home />
      </View>
      <Navbar />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#111"
  },
});
