import React, { FC } from 'react'
import { View, StyleSheet, Alert } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import HomeIcon from '../../assets/icons/HomeIcon';
import SearchIcon from '../../assets/icons/SearchIcon';
import { useNavigation } from '@react-navigation/native';
import { routeNames } from '../../router/routes';

const Navbar: FC = () => {
   const navigation = useNavigation()
   return (
      <View style={styles.container}>
         <View style={styles.iconContainer}>
            <TouchableOpacity onPress={() => navigation.navigate(routeNames.HOME as never)}>
               <HomeIcon width={32} height={32} fill="#fff" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate(routeNames.SEARCH as never)}>
               <SearchIcon width={32} height={32} fill="#f8f8f8" />
            </TouchableOpacity>
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
