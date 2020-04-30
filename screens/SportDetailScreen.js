import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

function SportDetailScreen(props) {
  const catId = props.navigation.getParam('catRefId');
  const sportId = props.navigation.getParam('sportId');

  console.log(sportId, catId);
  return (
    <View style={styles.screen}>
      <Text>{(sportId, catId)}</Text>
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

export default SportDetailScreen;
