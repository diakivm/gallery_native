import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import Navbar from './src/components/navbar/Navbar';
import { store } from './src/store/store';
import AppRouter from './src/router/AppRouter';



export default function App() {

  return (
    <NavigationContainer>
      <Provider store={store}>
        <View style={styles.container}>
          <AppRouter />
        </View>
        <Navbar />
      </Provider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "#111"
  },
});
