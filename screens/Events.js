import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

const Events = (props) => {
  return (
    <View style={styles.screen}>
      <Button
        title='Past Events'
        onPress={() => props.navigation.navigate('PastEvents')}
      />
      <Button
        title='Upcoming Events'
        onPress={() => props.navigation.navigate('UpcomingEvents')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Events;
