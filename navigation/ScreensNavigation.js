import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategorySportScreen from '../screens/CategorySportScreen';
import SportDetailScreen from '../screens/SportDetailScreen';
import WelcomeScreen from '../screens/WelcomeScreen';

const SportsNavigator = createStackNavigator({
  Categories: CategoriesScreen,
  CategorySport: CategorySportScreen,
  SportDetail: SportDetailScreen,
});

const AppSwitchNavigater = createSwitchNavigator({
  WelcomeScreen: WelcomeScreen,
  SportsNavigator: SportsNavigator,
});

export default createAppContainer(AppSwitchNavigater);
