import React, { useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import { firestore } from '../config/config';

const BookingScreen = (props) => {
  const getBookingHistory = async () => {
    const snapshot = await firestore.collection('booking').get();
    const docs = snapshot.docs.filter((doc) => {
      // const bookingList = [];
      // const data = doc.data();
      // if (data.userId === props.user.id) {
      //   bookingList.push(data);
      // }

      // return bookingList;
      if (doc.data().userId === props.user.id) return doc;
    });

    docs.forEach((el) => {
      console.log(el.data());
    });
  };

  useEffect(() => {
    getBookingHistory();
  }, []);

  return (
    <View style={styles.container}>
      <Text>{}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const mapStateToProps = ({ user }) => {
  return {
    user: user,
  };
};

export default connect(mapStateToProps)(BookingScreen);
