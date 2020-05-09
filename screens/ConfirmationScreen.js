import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const ConfirmationScreen = (props) => {
  const date = props.navigation.getParam('date');
  const time = props.navigation.getParam('time');
  const schedule = props.navigation.getParam('schedule');

  return (
    <View style={Styles.container}>
      <View>
        <Text>Congretualtion</Text>
      </View>
      <View style={{ marginLeft: 20, alignContent: 'center', marginTop: 20 }}>
        <Text>
          Yor Booking for {date} at {schedule} {time} is Confirm
        </Text>
      </View>
    </View>
  );
};

ConfirmationScreen.navigationOptions = {
  headerTitle: 'Booking Confirmation',
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ConfirmationScreen;
