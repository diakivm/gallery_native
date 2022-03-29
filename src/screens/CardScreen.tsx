import React, { FC } from 'react'
import { useRoute } from '@react-navigation/native';
import { View, Text, Image, StyleSheet, ActivityIndicator, Dimensions } from 'react-native'
import useFetching from '../hooks/useFetching';
import IPhoto from '../models/IPhoto';
import galleryService from '../API/galleryService';
import { ScrollView } from 'react-native-gesture-handler';

export const CardScreen: FC = () => {
   const { params } = useRoute()

   const [photo, setPhoto] = React.useState<IPhoto>({} as IPhoto)
   const [fetchPhoto, isLoadingMedia, errorMediaValue] = useFetching(async () => {
      const response = await galleryService.getPhoto(params)
      setPhoto(response.data)
   })

   React.useEffect(() => {
      fetchPhoto()
   }, [params])

   return (
      <ScrollView style={styles.container}>
         {
            isLoadingMedia ?
               <ActivityIndicator />
               :
               <View style={styles.cardContainer}>
                  <Image
                     source={{ uri: photo?.urls?.regular }}
                     style={styles.cardImage}
                  />
                  <View style={styles.infoContainer}>
                     <Image style={styles.userImage} source={{ uri: photo?.user?.profile_image?.large }} />
                     <View>
                        <Text style={styles.boldFont}>{photo?.user?.name}</Text>
                        <Text style={styles.font}>{photo?.user?.username}</Text>
                     </View>
                  </View>
               </View>
         }
      </ScrollView >
   )
}

const styles = StyleSheet.create({
   container: {
      width: "100%",
      backgroundColor: "#000",
      paddingHorizontal: 10,
      paddingTop: 20
   },
   cardContainer: {
      width: "100%",
      minHeight: Dimensions.get("screen").height * 0.8,
      backgroundColor: "#222",
      borderRadius: 30,
   },
   cardImage: {
      minWidth: "100%",
      height: "90%",
      borderTopStartRadius: 30,
      borderTopEndRadius: 30,
   },
   infoContainer: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "center",
      paddingHorizontal: 25,
   },
   userImage: {
      width: 30,
      height: 30,
      borderRadius: 50,
      marginRight: 5
   },
   font: {
      color: "#fff",
   },
   boldFont: {
      color: "#fff",
      fontWeight: "bold"
   }
});