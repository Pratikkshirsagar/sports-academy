import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  YellowBox,
} from 'react-native';

const WelcomeScreen = (props) => {
  YellowBox.ignoreWarnings(['Setting a timer']);
  console.disableYellowBox = true;

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://friendlymanager.com/media/52/slide1.png',
        }}
        style={{ width: 300, height: 200 }}
      />
      <Text style={styles.logo}>Sports Academy</Text>
      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => props.navigation.navigate('LoginScreen')}
      >
        <Text style={styles.loginText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    fontWeight: 'bold',
    fontSize: 40,
    color: '#4a148c',
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
    marginBottom: 10,
  },
  loginText: {
    color: 'white',
    fontFamily: 'open-sans-bold',
    fontSize: 18,
  },
});
export default WelcomeScreen;
