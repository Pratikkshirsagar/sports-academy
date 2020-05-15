import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, FlatList, Item } from 'react-native';
import { connect } from 'react-redux';

import { firestore } from '../config/config';

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
  }, []);

  const renderBooking = ({ item }) => {
    return (
      <View>
        <Text>{item.bookingId}</Text>
        <Text>{item.date}</Text>
        <Text>{item.time}</Text>
        <Text>{item.shedule}</Text>
        <Text>{item.title}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={bookingList}
        renderItem={renderBooking}
        keyExtractor={(item) => item.userId}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const mapStateToProps = ({ user }) => {
  return {
    user: user,
  };
};

export default connect(mapStateToProps)(BookingScreen);
