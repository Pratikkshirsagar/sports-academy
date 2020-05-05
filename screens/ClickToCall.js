import React from 'react';
import { Text, View, StyleSheet, FlatList, Linking } from 'react-native';

const List = [
  {
    key: '1',
    title: 'Reception Desk',
    phoneNumber: '+91223-04748373',
  },
  {
    key: '2',
    title: 'A/c DepartMent',
    phoneNumber: '+91223-04748373',
  },
  {
    key: '3',
    title: 'Membership Enquiry',
    phoneNumber: '+91223-04748373',
  },
  {
    key: '4',
    title: 'Ambulance Services',
    phoneNumber: '+91223-04748373',
  },
  {
    key: '5',
    title: 'Restaurant',
    phoneNumber: '+91223-04748373',
  },
];

const ClickToCall = () => {
  const renderList = (itemData) => {
    return (
      <View
        style={{
          borderBottomColor: 'red',
          borderBottomWidth: 2,
          marginBottom: 15,
          marginLeft: 20,
          marginTop: 15,
        }}
      >
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ fontSize: 18, paddingBottom: 20 }}>
            {itemData.item.title}
          </Text>
          <Text
            style={{ fontSize: 18, paddingBottom: 20 }}
            onPress={() => {
              Linking.openURL(`tel:${itemData.item.phoneNumber}`);
            }}
          >
            {itemData.item.phoneNumber}
          </Text>
        </View>
      </View>
    );
  };
  return (
    <FlatList data={List} renderItem={renderList} style={{ width: '95%' }} />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 50,
    fontSize: 18,
    height: 44,
  },
});

export default ClickToCall;
