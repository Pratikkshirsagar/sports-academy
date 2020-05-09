import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const ConfirmationScreen = (props) => {
  return (
    <View style={Styles.container}>
      <Text>Confirmation Screen</Text>
    </View>
  );
};

ConfirmationScreen.navigationOptions = {
  headerTitle: 'Confirmation',
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ConfirmationScreen;
