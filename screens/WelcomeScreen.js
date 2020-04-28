import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
const WelcomeScreen = (props) => {
  return (
    <View style={styles.screen}>
      <View style={styles.logo}>
        <Ionicons name="ios-bookmarks" size={150} color="green" />
      </View>
      <View style={styles.bot}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  logo: {
    flex: 1,
    borderColor: 'black',
    borderWidth: 1,
  },
  bot: {
    flex: 1,
    borderColor: 'orange',
    borderWidth: 1,
  },
});

export default WelcomeScreen;
