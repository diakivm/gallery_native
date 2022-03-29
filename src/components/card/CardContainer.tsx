import React, { FC } from 'react'
import { View, StyleSheet } from 'react-native'
import IPhoto from '../../models/IPhoto'
import CardPhoto from './CardPhoto'

interface CardContainerProps {
   photos: IPhoto[]
}

const CardContainer: FC<CardContainerProps> = ({ photos }) => {

   return (
      <View style={styles.containerCard}>
         {
            photos.map((item) => {
               return <CardPhoto card={item} key={item.id} />
            })
         }
      </View>
   )
}

const styles = StyleSheet.create({
   containerCard: {
      flex: 1,
      width: "50%",
      backgroundColor: "#000"
   }
});

export default CardContainer;
