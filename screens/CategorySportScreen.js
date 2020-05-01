import React from 'react';

import { CATEGORIES } from '../data/dummy-data';
import { SPORTS } from '../data/dummy-data';

import SportList from '../components/SportList';

const CategorySportScreen = (props) => {
  const catId = props.navigation.getParam('categoryId');
  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);
  const displaySport = SPORTS[catId];

  return <SportList listData={displaySport} navigation={props.navigation} />;
};

CategorySportScreen.navigationOptions = (navigationData) => {
  const catId = navigationData.navigation.getParam('categoryId');
  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);

  return {
    headerTitle: selectedCategory.title,
  };
};

export default CategorySportScreen;
