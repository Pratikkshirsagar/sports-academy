import React, { useState } from 'react';
import { Text, View, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
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

  const [timing, setTiming] = useState([]);
  const [displayBookingShedule, setDisplayBookingShedule] = useState('');
  const [displayTime, setDisplayTime] = useState('');
  const handleShedule = (shedule) => {
    if (shedule === 'Morning') {
      setTiming(morning);
      setDisplayBookingShedule(shedule);
    } else if (shedule === 'Afternoon') {
      setTiming(afternoon);
      setDisplayBookingShedule(shedule);
    } else if (shedule === 'Evening') {
      setTiming(evening);
      setDisplayBookingShedule(shedule);
    }
  };

  const handleTime = (time) => {
    setDisplayTime(time);
  };

  return (
    <ScrollView>
      <Image source={{ uri: selectedSport.imageUrl }} style={styles.image} />
      <View style={{ ...styles.sportRow, ...styles.sportDetail }}></View>
      <View style={styles.screen}>
        <Text style={styles.title}>{selectedSport.title}</Text>
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
            data={timing}
            onChangeText={(val) => handleTime(val)}
          />
        </View>
      </View>
      <View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            marginTop: 14,
            marginRight: 18,
          }}
        >
          <Text style={styles.timing}>
            Your slot is Scheduled in {displayBookingShedule} at {displayTime}
          </Text>
        </View>
        <TouchableOpacity style={styles.bookingBtn} onPress={() => props.navigation.navigate()}>
          <Text style={styles.bookingText}>Confirm Booking</Text>
        </TouchableOpacity>
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
    // headerRight: () => (
    //   <HeaderButtons HeaderButtonComponent={CustomeHeaderButton}>
    //     <Item
    //       title="Favorite"
    //       iconName="ios-star"
    //       onPress={() => {
    //         console.log('Mark as favorite!');
    //       }}
    //     />
    //   </HeaderButtons>
    // ),
  };
};

const styles = StyleSheet.create({
  title: {
    color: '#4a148c',
    fontFamily: 'open-sans-bold',
    fontSize: 18,
  },

  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 160,
  },
  details: {
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'space-around',
  },
  timing: {
    fontFamily: 'open-sans-bold',
    fontSize: 15,
    color: '#ff6f00',
  },
  bookingText: {
    color: 'white',
    fontFamily: 'open-sans-bold',
    fontSize: 18,
  },
  bookingBtn: {
    width: '50%',
    backgroundColor: '#4a148c',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    marginLeft: 90,
    marginTop: 30,
  },
});

export default SportDetailScreen;
