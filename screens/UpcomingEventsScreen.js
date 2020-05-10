import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const UpcomingEvents = () => {
  return (
    <View style={styles.screen}>
      <Text style={{ fontFamily: 'open-sans-bold', fontSize: 22, color: '#ff6f00' }}>
        Upcoming events not available
      </Text>
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
