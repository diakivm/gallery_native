import React, { FC } from 'react'
import { View, Text, StyleSheet } from 'react-native'


const SearchScreen: FC = () => {

   return (
      <View style={styles.container}>
         <Text style={styles.text}>Search Page</Text>
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      paddingTop: 40,
      width: "100%",
      height: "100%",
      backgroundColor: "#000",
   },
   text: {
      color: "#fff",
      fontSize: 24,
      paddingLeft: 20
   }
});

export default SearchScreen;
