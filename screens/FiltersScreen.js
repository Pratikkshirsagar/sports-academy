import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

function FiltersScreen() {
  return (
    <View style={styles.screen}>
      <Text>From Filters</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default FiltersScreen;
