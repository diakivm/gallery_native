import React, { FC } from 'react'
import { View, StyleSheet, ActivityIndicator } from 'react-native'
import ScrollViewBottomEvent from '../components/other/ScrollViewBottomEvent/ScrollViewBottomEvent'
import CardContainer from '../components/photoCard/CardContainer'
import { useAction } from '../hooks/useAction'
import { useTypeSelector } from '../hooks/useTypeSelector'
import other from '../utils/Utility'

const HomeScreen: FC = () => {

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
      paddingTop: 15,
      width: "100%",
      backgroundColor: "#000"
   },
   cardsContainer: {
      width: "100%",
      flexDirection: "row",
   },
   spiner: {
      marginVertical: 15
   }
});

export default HomeScreen;
