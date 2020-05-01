import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
// import { HeaderButtons, Item } from 'react-navigation-header-buttons';

const FavoritesScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>From Favorites Screen</Text>
    </View>
  );
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
