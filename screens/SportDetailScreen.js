import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  Platform,
} from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import { AntDesign } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';

import { SPORTS } from '../data/dummy-data';

import { firestore } from '../config/config';

import uuid from 'uuid-random';

import { connect } from 'react-redux';

import { YellowBox } from 'react-native';

function SportDetailScreen(props) {
  const catId = props.navigation.getParam('catRefId');
  const sportId = props.navigation.getParam('sportId');

  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [displatBookingDate, setDisplayBookingDate] = useState(''); // display date to database
  const [isLoading, setIsLoading] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDisplayBookingDate(currentDate.toDateString());
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatePicker = () => {
    showMode('date');
  };

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
  let morning = [];
  let afternoon = [];
  let evening = [];

  useEffect(() => {
    morning = [
      { value: '7:00AM' },
      { value: '8:00AM' },
      { value: '9:00AM' },
      { value: '10:00AM' },
      { value: '11:00AM' },
    ];

    afternoon = [
      { value: '12:00PM' },
      { value: '1:00PM' },
      { value: '2:00PM' },
      { value: '3:00PM' },
      { value: '4:00PM' },
      { value: '5:00PM' },
    ];

    evening = [
      { value: '5:00PM' },
      { value: '7:00PM' },
      { value: '8:00PM' },
      { value: '9:00PM' },
      { value: '10:00PM' },
      { value: '11:00PM' },
    ];
    YellowBox.ignoreWarnings(['Setting a timer']);
    console.disableYellowBox = true;
  }, []);

  const [timing, setTiming] = useState([]);
  const [displayBookingShedule, setDisplayBookingShedule] = useState('');
  const [displayTime, setDisplayTime] = useState('');
  const [bookingShedule, setBookingShedule] = useState('');

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

  const checkUnique = async (ticket) => {
    try {
      const snapshot = await firestore.collection('booking').get();
      const doc = snapshot.docs.filter((doc) => {
        const docData = doc.data();
        return docData.bookingId === ticket;
      });
      if (doc.length >= 1) return true;
      return false;
    } catch (err) {
      console.log(err);
    }
  };

  const addbooking = async () => {
    setIsLoading(true);
    const ticketData = [
      catId,
      sportId,
      selectedSport.title,
      ...displayTime,
      ...displayBookingShedule,
      ...displatBookingDate,
    ];
    const ticket = ticketData.toString().split(' ').join('').replace(/,/g, '');
    try {
      const unique = await checkUnique(ticket);
      if (unique === false) {
        const id = uuid();
        const createdAt = new Date();
        await firestore.doc(`booking/${id}`).set({
          bookingId: ticket,
          title: selectedSport.title,
          createdAt,
          time: displayTime,
          shedule: displayBookingShedule,
          date: displatBookingDate,
          userEmail: props.user.email,
          userId: props.user.id,
          type: selectedSport.type,
        });
        setIsLoading(false);
        props.navigation.navigate({
          routeName: 'BookingConfirm',
        });
      } else {
        setIsLoading(false);
        alert('This slot is already booked');
      }
    } catch (err) {
      setIsLoading(false);
      alert(err);
    }
  };

  return (
    <ScrollView>
      <Image source={{ uri: selectedSport.imageUrl }} style={styles.image} />
      <View style={{ ...styles.sportRow, ...styles.sportDetail }}></View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 20 }}>
        <View>
          <Text style={{ fontSize: 15, fontFamily: 'open-sans-bold' }}>Select schedule</Text>
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
          <Text style={{ fontSize: 16, fontFamily: 'open-sans-bold' }}>Select Time</Text>
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
        <View style={{ alignItems: 'baseline' }}>
          <Text style={{ fontSize: 16, fontFamily: 'open-sans-bold' }}>Select Date</Text>
          <View style={{ marginTop: 20, paddingLeft: 30 }}>
            <AntDesign name="calendar" size={35} color="#4a148c" onPress={showDatePicker} />
            {show && (
              <DateTimePicker
                testID="dateTimePicker"
                timeZoneOffsetInMinutes={0}
                value={date}
                mode={mode}
                is24Hour={true}
                display="default"
                onChange={onChange}
              />
            )}
          </View>
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
        ></View>
        <TouchableOpacity style={styles.bookingBtn} onPress={addbooking}>
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
    fontSize: 14,
    color: '#ff6f00',
  },
  bookingText: {
    color: 'white',
    fontFamily: 'open-sans-bold',
    fontSize: 18,
  },
  bookingBtn: {
    width: '60%',
    backgroundColor: '#4a148c',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    marginLeft: 75,
    marginTop: 30,
  },
});

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(SportDetailScreen);
