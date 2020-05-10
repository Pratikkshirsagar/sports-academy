import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
const BookingScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Order history not available</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default BookingScreen;
