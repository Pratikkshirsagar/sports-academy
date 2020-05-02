import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Notification = () => {
  return (
    <View style={styles.screen}>
      <Text>Notification</Text>
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

export default Notification;
