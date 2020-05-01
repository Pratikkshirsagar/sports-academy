import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import SportItem from '../components/SportItem';

const SportList = (props) => {
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

  return (
    <View style={styles.list}>
      <FlatList data={props.listData} renderItem={renderSportItem} style={{ width: '95%' }} />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  },
});

export default SportList;
