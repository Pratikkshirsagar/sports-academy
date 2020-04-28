import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const CatogorySportScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>From categorys Sport Screen</Text>
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

export default CatogorySportScreen;
