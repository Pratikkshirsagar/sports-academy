import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const PastEvents = () => {
  return (
    <View style={styles.screen}>
      <Text>Past Events</Text>
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

export default PastEvents;
