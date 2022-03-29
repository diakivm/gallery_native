import React from 'react';
import 'react-native-gesture-handler'
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import Navbar from './src/components/navbar/Navbar';
import { store } from './src/store/store';
import { createStackNavigator } from '@react-navigation/stack';
import { publicRoutes, routeNames } from './src/router/routes';

const Stack = createStackNavigator()


export default function App() {

  return (
    <NavigationContainer>
      <Provider store={store}>
        <View style={styles.container}>
          <Stack.Navigator
            initialRouteName={routeNames.HOME}
            screenOptions={{
              headerStyle: {
                backgroundColor: '#000',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}>

            {
              publicRoutes.map((route) => (
                <Stack.Screen key={route.name} name={route.name} component={route.component} />
              ))
            }

          </Stack.Navigator>
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
