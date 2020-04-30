import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { SPORTS } from '../data/dummy-data';

function SportDetailScreen(props) {
  const catId = props.navigation.getParam('catRefId');
  const sportId = props.navigation.getParam('sportId');

  const selectedCat = SPORTS[catId];

  let selectedSport = selectedCat.find((obj) => obj.id == sportId);

  return (
    <View style={styles.screen}>
      <Text>{selectedSport.title}</Text>
    </View>
  );
}

SportDetailScreen.navigationOptions = (navigationData) => {
  const catId = navigationData.navigation.getParam('catRefId');
  const sportId = navigationData.navigation.getParam('sportId');

  const selectedCat = SPORTS[catId];

  let selectedSport = selectedCat.find((obj) => obj.id == sportId);

  return {
    headerTitle: selectedSport.title,
    headerRight: () => <Text>FAV!</Text>,
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SportDetailScreen;
