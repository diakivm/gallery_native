import React, { FC } from 'react'
import { NativeScrollEvent, ScrollView } from 'react-native';

interface ScrollViewBottomEventProps {
   scrollBottomFunc: () => void
}

const ScrollViewBottomEvent: FC<ScrollViewBottomEventProps> = ({ children, scrollBottomFunc }) => {

   const isCloseToBottom = (event: NativeScrollEvent) => {
      const paddingToBottom = 20;
      return event.layoutMeasurement.height + event.contentOffset.y >=
         event.contentSize.height - paddingToBottom;
   };

   const onScrollEvent = (event: NativeScrollEvent) => {
      if (isCloseToBottom(event)) {
         scrollBottomFunc()
      }
   }

   return (
      <ScrollView
         onScroll={({ nativeEvent }) => onScrollEvent(nativeEvent)}
         scrollEventThrottle={400}
         style={{ backgroundColor: "#000" }}
      >
         {
            children
         }
      </ScrollView>
   )
}

export default ScrollViewBottomEvent;
