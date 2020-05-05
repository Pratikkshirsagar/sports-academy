import React from 'react';
import { Text, View, FlatList, StyleSheet, Button, TouchableOpacity, Platform } from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import CategoryGridTile from '../components/CategoryGridTile';
import { CATEGORIES } from '../data/dummy-data';
import CustomHeaderButton from '../components/HeaderButton'

const CategoriesScreen = (props) => {
  const renderGridItem = (itemData) => {
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        icon={itemData.item.icon}
        onSelect={() => {
          props.navigation.navigate({
            routeName: 'CategorySport',
            params: {
              categoryId: itemData.item.id,
            },
          });
        }}
      />
    );
  };

  return <FlatList data={CATEGORIES} renderItem={renderGridItem} numColumns={2} />;
};

CategoriesScreen.navigationOptions = (navData) =>  {
  return{
    headerTitle: 'Sports Categories',
    headerLeft: () =>  (
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
          <Item title="Menu" iconName="ios-menu" onPress={() => {
            navData.navigation.toggleDrawer();
          }}/>
        </HeaderButtons>
      )
  }
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CategoriesScreen;
