import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Platform, Image } from 'react-native';
import IconMat from 'react-native-vector-icons/MaterialCommunityIcons';
import IconFoot from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome5';

const CategoryGridTile = (props) => {
  let imgIcon;
  if (props.title === 'Cricket') {
    imgIcon = <IconMat name={props.icon} size={60} color="white" />;
  } else if (props.title === 'Football') {
    imgIcon = <IconFoot name={props.icon} size={60} color="white" />;
  } else if (props.title === 'Gym') {
    imgIcon = <Icon name={props.icon} size={60} color="white" />;
  } else if (props.title === 'Tennis Court') {
    imgIcon = <IconMat name={props.icon} size={60} color="white" />;
  } else if (props.title === 'Karate') {
    imgIcon = <IconMat name={props.icon} size={60} color="white" />;
  } else if (props.title === 'Swimming') {
    imgIcon = <Icon name={props.icon} size={60} color="white" />;
  } else if (props.title === 'Table Tennis') {
    imgIcon = <Icon name={props.icon} size={60} color="white" />;
  } else if (props.title === 'Skating') {
    imgIcon = <Icon name={props.icon} size={60} color="white" />;
  } else if (props.title === 'Golf') {
    imgIcon = <IconMat name={props.icon} size={60} color="white" />;
  } else if (props.title === 'Badminton') {
    imgIcon = <IconMat name={props.icon} size={60} color="white" />;
  }
  return (
    <TouchableOpacity style={styles.gridItem} onPress={props.onSelect}>
      <View style={{ ...styles.container, ...{ backgroundColor: props.color } }}>
        {imgIcon}
        <Text style={styles.title} numberOfLines={2}>
          {props.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 10,
    overflow: Platform.OS === 'android' && Platform.Version >= 21 ? 'hidden' : 'visible',
    elevation: 5,
  },
  container: {
    flex: 1,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    padding: 15,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 18,
    textAlign: 'center',
    color: '#fffff2',
    marginTop: 15,
  },
});

export default CategoryGridTile;
