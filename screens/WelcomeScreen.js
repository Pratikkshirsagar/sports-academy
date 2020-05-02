import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
const WelcomeScreen = (props) => {
  return (
    <View style={styles.container}>
      <Icon name="sports-club" size={90} color="white" />
      <Text style={styles.logo}>Sports Academy</Text>
      <TouchableOpacity style={styles.loginBtn} onPress={() => props.navigation.navigate('LoginScreen')}>
        <Text style={styles.loginText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4a148c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    fontWeight: 'bold',
    fontSize: 40,
    color: '#ff6f00',
    marginBottom: 40,
    marginTop: 5,
  },
  inputView: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
  },
  inputText: {
    height: 50,
    color: 'white',
  },
  forgot: {
    color: 'white',
    fontSize: 11,
  },
  loginBtn: {
    width: '80%',
    backgroundColor: '#ff6f00',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10,
  },
  loginText: {
    color: 'white',
  },
});
export default WelcomeScreen;
