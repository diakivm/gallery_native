import React from 'react'
import { View, StyleSheet } from 'react-native'
import HomeIcon from '../../assets/icons/HomeIcon';
import SearchIcon from '../../assets/icons/SearchIcon';

const Navbar = () => {
   return (
      <View style={styles.container}>
         <View style={styles.iconContainer}>
            <HomeIcon width={32} height={32} fill="#fff" />
            <SearchIcon width={32} height={32} fill="#f8f8f8" />
         </View>
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      width: "100%",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      height: 70,
      backgroundColor: "#000"
   },
   iconContainer: {
      width: "40%",
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
   }
});

export default Navbar
