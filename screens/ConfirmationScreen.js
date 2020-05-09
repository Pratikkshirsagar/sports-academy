import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

const ConfirmationScreen = (props) => {
  const date = props.navigation.getParam('date');
  const time = props.navigation.getParam('time');
  const schedule = props.navigation.getParam('schedule');

  return (
    <View style={styles.container}>
      <View>
        <Text style={{ fontFamily: 'open-sans-bold', fontSize: 30, color: '#ff6f00' }}>
          Congretualtion!
        </Text>
      </View>
      <View>
        <TouchableOpacity style={styles.bookingBtn} onPress={() => props.navigation.popToTop()}>
          <Text style={styles.bookingText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

ConfirmationScreen.navigationOptions = {
  headerTitle: 'Booking Confirmation',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bookingText: {
    color: 'white',
    fontFamily: 'open-sans-bold',
    fontSize: 30,
  },
  bookingBtn: {
    width: '100%',
    backgroundColor: '#4a148c',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    padding: 25,
  },
});

export default ConfirmationScreen;
