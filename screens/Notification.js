import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/Colors';
const List = [
  {
    id: '1',
    title: 'AFC Club will remain closed',
    description:
      'We have made the difficult decision based on our understanding of the situation regarding social distancing, minimizing contamination The Continental Gallery will be closed until further notice.',
    date: '13-03-2020',
  },
  {
    id: '2',
    title: 'Yoga Sesions',
    description:
      'We have made the difficult decision based on our understanding of the situation regarding social distancing, minimizing contamination The Continental Gallery will be closed until further notice.',
    date: '13-03-2020',
  },
  {
    id: '3',
    title: 'Ikon Gym Offer',
    description:
      'We have made the difficult decision based on our understanding of the situation regarding social distancing, minimizing contamination The Continental Gallery will be closed until further notice.',
    date: '13-03-2020',
  },
  {
    id: '4',
    title: 'Holi Festival',
    description:
      'We have made the difficult decision based on our understanding of the situation regarding social distancing, minimizing contamination The Continental Gallery will be closed until further notice.',
    date: '13-03-2020',
  },
  {
    id: '5',
    title: 'Womans Day',
    description:
      'We have made the difficult decision based on our understanding of the situation regarding social distancing, minimizing contamination The Continental Gallery will be closed until further notice.',
    date: '13-03-2020',
  },
];

const Notification = () => {
  const renderList = (itemData) => {
    return (
      <View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 10,
            marginLeft: 20,
            marginBottom: 10,
            borderBottomColor: 'red',
            borderBottomWidth: 2,
            paddingBottom: 10,
            flex: 1,
            paddingRight: 30,
          }}
        >
          <View style={{ paddingRight: 10 }}>
            <Ionicons
              name='ios-notifications'
              size={27}
              color={Colors.accentColor}
            />
          </View>
          <View>
            <View
              style={{ flexDirection: 'row', justifyContent: 'space-between' }}
            >
              <Text style={{ fontFamily: 'open-sans-bold', fontSize: 15 }}>
                {itemData.item.title}
              </Text>
              <Text style={{ fontFamily: 'open-sans-bold', fontSize: 15 }}>
                {itemData.item.date}
              </Text>
            </View>
            <Text style={{ fontFamily: 'open-sans' }}>
              {itemData.item.description}
            </Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <FlatList data={List} renderItem={renderList} style={{ width: '98%' }} />
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default Notification;
