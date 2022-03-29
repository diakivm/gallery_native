import React, { FC } from 'react';
import 'react-native-gesture-handler'
import { createStackNavigator } from '@react-navigation/stack';
import { publicRoutes, routeNames } from './routes';

const Stack = createStackNavigator()


const AppRouter: FC = () => {

   return (
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
   );
}

export default AppRouter
