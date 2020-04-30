import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';

import { CATEGORIES } from '../data/dummy-data';
import { SPORTS } from '../data/dummy-data';

import SportItem from '../components/SportItem';

const CategorySportScreen = (props) => {
  const catRefId = props.navigation.getParam('categoryId');
  const renderSportItem = (itemData) => {
    return (
      <SportItem
        title={itemData.item.title}
        location={itemData.item.location[0]}
        affordability={itemData.item.affordability}
        image={itemData.item.imageUrl}
        onSelectSport={() => {
          props.navigation.navigate({
            routeName: 'SportDetail',
            params: {
              sportId: itemData.item.id,
              catRefId: catRefId,
            },
          });
        }}
      />
    );
  };

  const catId = props.navigation.getParam('categoryId');
  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);
  const displaySport = SPORTS[catId];

  return (
    <View style={styles.screen}>
      <FlatList data={displaySport} renderItem={renderSportItem} style={{ width: '95%' }} />
    </View>
  );
};

CategorySportScreen.navigationOptions = (navigationData) => {
  const catId = navigationData.navigation.getParam('categoryId');
  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);

  return {
    headerTitle: selectedCategory.title,
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CategorySportScreen;
