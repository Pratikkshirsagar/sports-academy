import React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';

const CustomeButton = (props) => {
  return (
    <View>
      <Button title={props.title} />
    </View>
  );
};

export default CustomeButton;
