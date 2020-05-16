import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, FlatList, Item, Button } from 'react-native';
import { connect } from 'react-redux';

import { firestore } from '../config/config';
import { Card } from 'react-native-shadow-cards';

const BookingScreen = (props) => {
  const [bookingList, setBookingList] = useState([]);

  const getBookingHistory = async () => {
    const snapshot = await firestore.collection('booking').get();
    const docs = snapshot.docs.filter((doc) => {
      if (doc.data().userId === props.user.id) return doc;
    });

    bookingHistoryList = [];
    docs.forEach((el) => {
      bookingHistoryList.push(el.data());
    });
    setBookingList(bookingHistoryList);
  };

  useEffect(() => {
    getBookingHistory();
  }, [bookingList]);

  const renderBooking = ({ item }) => {
    return (
      <View style={{ marginLeft: 10 }}>
        <Card style={{ padding: 15, margin: 12 }}>
          <Text style={{ fontSize: 20, fontFamily: 'open-sans-bold', color: '#4a148c' }}>
            ORDER NO: 31346
          </Text>
          <Text style={styles.text}>
            Sport : <Text style={{ fontFamily: 'open-sans-bold' }}> {item.type}</Text>
          </Text>
          <Text style={styles.text}>Place : {item.title} </Text>
          <Text style={styles.text}>
            Timing: {item.shedule} At {item.time}
          </Text>

          <Card style={{ width: '50%', padding: 4, marginTop: 10 }}>
            <Button
              style={{ fontFamily: 'open-sans-bold', fontSize: 20 }}
              onPress={() => {
                console.log('Work');
              }}
              title="Cancel Booking"
              color="#ff6f00"
            />
          </Card>
        </Card>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={bookingList}
        renderItem={renderBooking}
        keyExtractor={(item) => `${item.userId}${item.bookingId}`}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    marginTop: 7,
    fontFamily: 'open-sans',
  },
});

const mapStateToProps = ({ user }) => {
  return {
    user: user,
  };
};

export default connect(mapStateToProps)(BookingScreen);
