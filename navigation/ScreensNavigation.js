import React from 'react';
import { Platform } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Ionicons } from '@expo/vector-icons';
import IconMat from 'react-native-vector-icons/MaterialCommunityIcons';
import IconEve from 'react-native-vector-icons/MaterialIcons';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategorySportScreen from '../screens/CategorySportScreen';
import SportDetailScreen from '../screens/SportDetailScreen';
import LoginScreen from '../screens/LoginScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import Colors from '../constants/Colors';
import FavoritesScreen from '../screens/FavoritesScreen';
import MyAccount from '../screens/MyAccount';
import ClickToCall from '../screens/ClickToCall';
import Events from '../screens/Events';
import Notification from '../screens/Notification';
import FiltersScreen from '../screens/FiltersScreen';
import PastEvents from '../screens/PastEventsScreen';
import UpcomingEvents from '../screens/UpcomingEventsScreen';

const defaultStackNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
  },
  headerTitleStyle: {},
  headerTitleStyle: {
    fontFamily: 'open-sans-bold',
  },
  headerBackTitleStyle: {
    fontFamily: 'open-sans',
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
  headerTitle: 'A Screen',
};

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
    defaultNavigationOptions: defaultStackNavOptions,
  }
);

const FavNavigation = createStackNavigator(
  {
    Favorites: FavoritesScreen,
    SportDetail: SportDetailScreen,
  },
  {
    defaultNavigationOptions: defaultStackNavOptions,
  }
);

const CallService = createStackNavigator(
  {
    ClickToCall: ClickToCall,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
      },
      headerTitleStyle: {
        fontFamily: 'open-sans-bold',
      },
      headerBackTitleStyle: {
        fontFamily: 'open-sans',
      },
      headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
      headerTitle: 'Click To Call',
    },
  }
);

const EventsService = createStackNavigator(
  {
    Events: Events,
    PastEvents: PastEvents,
    UpcomingEvents: UpcomingEvents,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
      },
      headerTitleStyle: {
        fontFamily: 'open-sans-bold',
      },
      headerBackTitleStyle: {
        fontFamily: 'open-sans',
      },
      headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
    },
  }
);

const NotificationService = createStackNavigator(
  {
    Notifications: Notification,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
      },
      headerTitleStyle: {
        fontFamily: 'open-sans-bold',
      },
      headerBackTitleStyle: {
        fontFamily: 'open-sans',
      },
      headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
      headerTitle: 'Notifications',
    },
  }
);

const tabScreenConfig = {
  MyAccount: {
    screen: MyAccount,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return <IconMat name="account" size={27} color={tabInfo.tintColor} />;
      },
      tabBarColor: Colors.primaryColor,
    },
  },
  ClickToCall: {
    screen: CallService,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return <Ionicons name="ios-call" size={27} color={tabInfo.tintColor} />;
      },
      tabBarColor: Colors.accentColor,
    },
  },
  Home: {
    screen: SportsNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return <Ionicons name="ios-home" size={27} color={tabInfo.tintColor} />;
      },
      tabBarColor: Colors.primaryColor,
    },
  },
  Events: {
    screen: EventsService,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return <IconEve name="event" size={27} color={tabInfo.tintColor} />;
      },
      tabBarColor: Colors.accentColor,
    },
  },
  Notification: {
    screen: NotificationService,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return <Ionicons name="ios-notifications" size={27} color={tabInfo.tintColor} />;
      },
      tabBarColor: Colors.primaryColor,
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

const FiltersNavigoter = createStackNavigator({
  Filters: FiltersScreen,
});

FiltersNavigoter.navigationOptions = {
  headerTitle: 'Filter Sports',
};

const WelcomeNavigation = createStackNavigator(
  {
    WelcomeScreen: WelcomeScreen,
    LoginScreen: LoginScreen,
  },
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    },
  }
);

const MainNavigation = createDrawerNavigator(
  {
    SportsFavs: {
      screen: SportsFavTabNavigator,
      navigationOptions: {
        drawerLabel: 'Sports',
      },
    },
    Filters: FiltersNavigoter,
  },
  {
    contentOptions: {
      activeTintColor: Colors.accentColor,
      labelStyle: {
        fontFamily: 'open-sans-bold',
      },
    },
  }
);

const AppSwitchNavigater = createSwitchNavigator({
  WelcomeScreen: WelcomeNavigation,
  SportsNavigator: MainNavigation,
});

export default createAppContainer(AppSwitchNavigater);
