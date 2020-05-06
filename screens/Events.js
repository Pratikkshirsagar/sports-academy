import React from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity } from 'react-native';

const Events = (props) => {
  return (
    <View style={styles.screen}>
      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => props.navigation.navigate('PastEvents')}
      >
        <Text style={styles.loginText}>Go To Past Events</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => props.navigation.navigate('UpcomingEvents')}
      >
        <Text style={styles.loginText}>Go To Upcoming Events</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  loginBtn: {
    width: '80%',
    backgroundColor: '#ff6f00',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
  },
  loginText: {
    color: 'white',
    fontFamily: 'open-sans-bold',
    fontSize: 18,
  },
});

export default Events;
