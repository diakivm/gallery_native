import { CardScreen } from '../screens/CardScreen';
import { IStackScreenProps } from '../models/navigate/StackScreenProps';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';

export default interface IRouteProps {
   component: React.FunctionComponent<IStackScreenProps>;
   name: string;
}

export enum routeNames {
   HOME = 'Gallery',
   SEARCH = 'Search',
   PHOTO_CARD = 'Image'
}

export const publicRoutes: IRouteProps[] = [
   {
      name: routeNames.HOME,
      component: HomeScreen
   },
   {
      name: routeNames.SEARCH,
      component: SearchScreen
   },
   {
      name: routeNames.PHOTO_CARD,
      component: CardScreen
   }
];
