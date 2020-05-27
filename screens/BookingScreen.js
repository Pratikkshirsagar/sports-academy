import React, { useEffect, useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Item,
  Button,
  Alert,
} from 'react-native';
import { connect } from 'react-redux';

import { firestore } from '../config/config';
import { Card } from 'react-native-shadow-cards';

const BookingScreen = (props) => {
  const [bookingList, setBookingList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const buttonPress = (id) => {
    Alert.alert('Cancel Booking', 'Are you sure want to cancle booking', [
      {
        text: 'No',
        onPress: () => {
          console.log('No Press');
        },
      },
      {
        text: 'Yes',
        onPress: async () => {
          try {
            const bookingRef = firestore.collection('booking');
            let snapshot = await bookingRef.where('bookingId', '==', id).get();
            if (snapshot.empty) {
              alert('Booking not found');
            }
            let refDoc;
            snapshot.forEach((doc) => {
              doc.ref.delete();
            });
          } catch (err) {
            console.log(err);
          }
        },
      },
    ]);
  };

  const getBookingHistory = async () => {
    setIsLoading(true);
    const snapshot = await firestore.collection('booking').get();
    const docs = snapshot.docs.filter((doc) => {
      if (doc.data().userId === props.user.id) return doc;
    });

    bookingHistoryList = [];
    docs.forEach((el) => {
      bookingHistoryList.unshift(el.data());
    });
    setBookingList(bookingHistoryList);
    setIsLoading(false);
  };

  useEffect(() => {
    getBookingHistory();
  }, []);

  const renderBooking = ({ item }) => {
    return (
      <View style={{ marginLeft: 10 }}>
        <Card style={{ padding: 15, margin: 12 }}>
          <Text
            style={{
              fontSize: 20,
              fontFamily: 'open-sans-bold',
              color: '#4a148c',
            }}
          >
            ORDER NO: {item.orderId}
          </Text>
          <Text style={styles.text}>
            Sport :
            <Text style={{ fontFamily: 'open-sans-bold' }}> {item.type}</Text>
          </Text>
          <Text style={styles.text}>Place : {item.title} </Text>
          <Text style={styles.text}>Date: {item.date}</Text>
          <Text style={styles.text}>
            Timing: {item.shedule} At {item.time}
          </Text>
          <Card style={{ width: '50%', padding: 4, marginTop: 10 }}>
            <Button
              style={{ fontFamily: 'open-sans-bold', fontSize: 20 }}
              onPress={() => {
                buttonPress(item.bookingId);
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
        refreshing={isLoading}
        onRefresh={getBookingHistory}
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
