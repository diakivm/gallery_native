import React, { FC } from 'react'
import { useNavigation } from '@react-navigation/native';
import { View, Image, StyleSheet, Text, Dimensions } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import IPhoto from '../../models/IPhoto'
import Utility from '../../utils/Utility'
import { routeNames } from '../../router/routes';

interface PhotoCardProps {
   card: IPhoto
}

const CardPhoto: FC<PhotoCardProps> = ({ card }) => {
   const navigation = useNavigation()

   return (
      <TouchableOpacity onPress={() => navigation.navigate(routeNames.PHOTO_CARD as never, card.id as never)}>
         <View style={styles.cardContainer}>
            <Image
               source={{ uri: card?.urls?.small }}
               style={{
                  ...styles.cardImage,
                  height: Utility.getHeigtht(card?.height, Dimensions.get("window").height, 50)
               }}
            />
            <Text style={styles.font}>{card?.user?.username}</Text>
         </View>
      </TouchableOpacity>
   )
}

const styles = StyleSheet.create({
   cardContainer: {
      width: "100%",
      padding: 3,
   },
   cardImage: {
      minWidth: "100%",
      height: "100%",
      borderRadius: 20
   },
   font: {
      color: "#fff",
      paddingVertical: 3,
      paddingLeft: 5
   }
});

export default CardPhoto
