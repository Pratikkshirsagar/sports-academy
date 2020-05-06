import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const UpcomingEvents = () => {
  return (
    <View style={styles.screen}>
      <Text>UpComing Events</Text>
    </View>
  );
};

UpcomingEvents.navigationOptions = (navigationData) => {
  return {
    headerTitle: 'Upcoming Events',
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default UpcomingEvents;
