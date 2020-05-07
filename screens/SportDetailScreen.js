import React, { useState } from 'react';
import { Text, View, StyleSheet, ScrollView, Image } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';

import { SPORTS } from '../data/dummy-data';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomeHeaderButton from '../components/HeaderButton';

function SportDetailScreen(props) {
  const catId = props.navigation.getParam('catRefId');
  const sportId = props.navigation.getParam('sportId');

  const selectedCat = SPORTS[catId];

  let selectedSport = selectedCat.find((obj) => obj.id == sportId);

  let schedule = [
    {
      value: 'Morning',
    },
    {
      value: 'Afternoon',
    },
    {
      value: 'Evening',
    },
  ];
  let time = [];

  let morning = [
    { value: '7:00AM' },
    { value: '8:00AM' },
    { value: '9:00AM' },
    { value: '10:00AM' },
    { value: '11:00AM' },
  ];

  let afternoon = [
    { value: '12:00PM' },
    { value: '1:00PM' },
    { value: '2:00PM' },
    { value: '3:00PM' },
    { value: '4:00PM' },
    { value: '5:00PM' },
  ];

  let evening = [
    { value: '5:00PM' },
    { value: '7:00PM' },
    { value: '8:00PM' },
    { value: '9:00PM' },
    { value: '10:00PM' },
    { value: '11:00PM' },
  ];

  const display = {
    shedule: String,
    time: String,
  };

  const handleShedule = (shedule) => {
    display.shedule = schedule;
    if (time.length > 1) {
      time.splice(0, time.length);
    }
    if (shedule === 'Morning') {
      time.push(...morning);
    } else if (shedule === 'Afternoon') {
      time.push(...afternoon);
    } else if (shedule === 'Evening') {
      time.push(...evening);
    }
  };

  return (
    <ScrollView>
      <Image source={{ uri: selectedSport.imageUrl }} style={styles.image} />
      <View style={{ ...styles.sportRow, ...styles.sportDetail }}></View>
      <View style={styles.screen}>
        <Text>{selectedSport.title}</Text>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 20 }}>
        <View>
          <Text style={{ fontSize: 18, fontFamily: 'open-sans-bold' }}>Select schedule</Text>
          <Dropdown
            dropdownMargins={{ min: 16, max: 20 }}
            itemPadding={10}
            fontSize={16}
            labelFontSize={16}
            label={'select'}
            textColor="#4a148c"
            data={schedule}
            onChangeText={(val) => handleShedule(val)}
            disabledItemColor="red"
          />
        </View>
        <View>
          <Text style={{ fontSize: 18, fontFamily: 'open-sans-bold' }}>Select Time</Text>
          <Dropdown
            dropdownMargins={{ min: 16, max: 20 }}
            itemPadding={10}
            fontSize={16}
            labelFontSize={16}
            label={'select'}
            textColor="#4a148c"
            data={time}
          />
        </View>
      </View>
      <View>
        <Text>{display.shedule}</Text>
      </View>
    </ScrollView>
  );
}

SportDetailScreen.navigationOptions = (navigationData) => {
  const catId = navigationData.navigation.getParam('catRefId');
  const sportId = navigationData.navigation.getParam('sportId');

  const selectedCat = SPORTS[catId];

  let selectedSport = selectedCat.find((obj) => obj.id == sportId);

  return {
    headerTitle: selectedSport.title,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomeHeaderButton}>
        <Item
          title="Favorite"
          iconName="ios-star"
          onPress={() => {
            console.log('Mark as favorite!');
          }}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 200,
  },
  details: {
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'space-around',
  },
});

export default SportDetailScreen;
