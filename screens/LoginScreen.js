import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  YellowBox,
} from 'react-native';
import addUser from '../actions/addUser';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import _ from 'lodash';

import { auth, firestore } from '../config/config';

// import firebase from 'firebase';
// import 'firebase/auth';
// import 'firebase/firestore';

const LoginScreen = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const onSignIn = async () => {
    if (email && password) {
      setIsLoading(true);
      try {
        // const response = await firebase.auth().signInWithEmailAndPassword(email, password);
        const response = await auth.signInWithEmailAndPassword(email, password);
        if (response) {
          setIsLoading(false);
          props.navigation.navigate('Home');
        }
      } catch (err) {
        setIsLoading(false);
        switch (err.code) {
          case 'auth/user-not-found':
            alert('A user with that email does not exist. Try signing up');
          case 'auth/invalid-email':
            alert('Please enter an email address');
        }
      }
    } else {
      alert('Please enter email and password');
    }
  };
  const onSignUp = async () => {
    if (email && password) {
      setIsLoading(true);
      try {
        const response = await auth.createUserWithEmailAndPassword(email, password);
        if (response) {
          setIsLoading(false);
          YellowBox.ignoreWarnings(['Setting a timer']);
          const _console = _.clone(console);
          console.warn = (message) => {
            if (message.indexOf('Setting a timer') <= -1) {
              _console.warn(message);
            }
          };
          const userRef = await firestore.doc(`users/${response.user.uid}`);
          const snapShot = await userRef.get();
          if (!snapShot.exists) {
            const createdAt = new Date();
            await userRef.set({
              email: response.user.email,
              createdAt,
            });
          }
          props.addUser(email);
          onSignIn(email, password);
        }
      } catch (err) {
        setIsLoading(false);
        alert(err.message);
      }
    }
  };

  return (
    <View style={styles.container}>
      {isLoading ? (
        <View
          style={[
            StyleSheet.absoluteFill,
            {
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 1000,
              elevation: 1000,
            },
          ]}
        >
          <ActivityIndicator size="large" color="#ff6f00" />
        </View>
      ) : null}
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Email..."
          placeholderTextColor="#4a148c"
          onChangeText={(text) => setEmail(text)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          secureTextEntry
          style={styles.inputText}
          placeholder="Password..."
          placeholderTextColor="#4a148c"
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <TouchableOpacity>
        <Text style={styles.forgot}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginBtn} onPress={onSignIn}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onSignUp()}>
        <Text style={styles.signInText}>Signup</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    fontWeight: 'bold',
    fontSize: 40,
    color: '#ff6f00',
    marginBottom: 40,
  },
  inputView: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 25,
    borderColor: '#4a148c',
    borderWidth: 2,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
  },
  inputText: {
    height: 50,
    color: 'black',
    fontFamily: 'open-sans',
  },
  forgot: {
    color: '#4a148c',
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
    color: '#ffff',
    fontFamily: 'open-sans-bold',
    fontSize: 18,
  },
  signInText: {
    paddingTop: 7,
    color: '#ff6f00',
    fontFamily: 'open-sans-bold',
    fontSize: 18,
  },
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      addUser: addUser,
    },
    dispatch
  );
};

export default connect(null, mapDispatchToProps)(LoginScreen);
