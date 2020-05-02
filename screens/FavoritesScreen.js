import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
// import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import SportList from '../components/SportList';
import { SPORTS } from '../data/dummy-data';

const FavoritesScreen = (props) => {
  const catId = 'c3';
  const displaySport = SPORTS[catId];

  return <SportList listData={displaySport} navigation={props.navigation} />;
};

FavoritesScreen.navigationOptions = (navData) => {
  return {
    headerTitle: 'Your Favorites',
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default FavoritesScreen;
