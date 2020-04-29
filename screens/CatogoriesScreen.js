import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

const CatogoriesScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>From categories Screen</Text>
      <Button
        title="go to sport"
        onPress={() => {
          props.navigation.navigate('CategorySport');
        }}
      />
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

export default CatogoriesScreen;