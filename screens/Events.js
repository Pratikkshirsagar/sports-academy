import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Events = () => {
  return (
    <View style={styles.screen}>
      <Text>My Account</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Events;
