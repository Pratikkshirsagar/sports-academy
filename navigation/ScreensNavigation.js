import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import CatogoriesScreen from '../screens/CatogoriesScreen';
import CatogorySportScreen from '../screens/CatogorySportScreen';
import SportDetailScreen from '../screens/SportDetailScreen';
import WelcomeScreen from '../screens/WelcomeScreen';

const SportsNavigator = createStackNavigator({
  Categories: CatogoriesScreen,
  CategorySport: CatogorySportScreen,
  SportDetail: SportDetailScreen,
});

const AppSwitchNavigater = createSwitchNavigator({
  WelcomeScreen: WelcomeScreen,
  SportsNavigator: SportsNavigator,
});

export default createAppContainer(AppSwitchNavigater);
