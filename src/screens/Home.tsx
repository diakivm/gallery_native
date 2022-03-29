import React, { useMemo } from 'react'
import { View, Text, Image, StyleSheet, ScrollView, ActivityIndicator, Button, NativeScrollEvent } from 'react-native'
import ScrollViewBottomEvent from '../components/other/ScrollViewBottomEvent/ScrollViewBottomEvent'
import CardContainer from '../components/photoCard/CardContainer'
import CardPhoto from '../components/photoCard/CardPhoto'
import { useAction } from '../hooks/useAction'
import { useTypeSelector } from '../hooks/useTypeSelector'
import other from '../utils/Utility'

const Home = () => {

   const { fetchGallery } = useAction()
   const { photos, isLoading, page } = useTypeSelector(i => i.gallery)

   React.useEffect(() => {
      fetchGallery(1)
   }, [])


   const onLoadMore = () => {
      if (!isLoading) {
         fetchGallery(page + 1)
      }
   }



   return (
      <ScrollViewBottomEvent scrollBottomFunc={onLoadMore}>
         <View style={styles.container}>
            <View style={styles.cardsContainer}>
               <CardContainer photos={other.getHalfOfArray(photos, true)} />
               <CardContainer photos={other.getHalfOfArray(photos, false)} />
            </View>
            {isLoading && <ActivityIndicator style={styles.spiner} />}
         </View>
      </ScrollViewBottomEvent>
   )
}

const styles = StyleSheet.create({
   container: {
      paddingTop: 40,
      width: "100%"
   },
   cardsContainer: {
      width: "100%",
      flexDirection: "row",
   },
   spiner: {
      paddingVertical: 15
   }
});

export default Home;
