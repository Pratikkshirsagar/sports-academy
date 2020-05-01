import React from 'react';
import { Platform } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategorySportScreen from '../screens/CategorySportScreen';
import SportDetailScreen from '../screens/SportDetailScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import Colors from '../constants/Colors';
import FavoritesScreen from '../screens/FavoritesScreen';

const SportsNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen,
    },
    CategorySport: {
      screen: CategorySportScreen,
    },
    SportDetail: SportDetailScreen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
      },
      headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
    },
  }
);

const tabScreenConfig = {
  Home: {
    screen: SportsNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return <Ionicons name="ios-home" size={27} color={tabInfo.tintColor} />;
      },
      tabBarColor: Colors.primaryColor,
    },
  },
  Favorites: {
    screen: FavoritesScreen,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return <Ionicons name="ios-star" size={27} color={tabInfo.tintColor} />;
      },
      tabBarColor: Colors.accentColor,
    },
  },
};

const SportsFavTabNavigator =
  Platform.OS === 'android'
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
        activeTintColor: 'white',
        shifting: true,
        barStyle: {
          backgroundColor: Colors.primaryColor,
        },
      })
    : createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
          activeTintColor: Colors.accentColor,
        },
      });

const AppSwitchNavigater = createSwitchNavigator({
  WelcomeScreen: WelcomeScreen,
  SportsNavigator: SportsFavTabNavigator,
});

export default createAppContainer(AppSwitchNavigater);
