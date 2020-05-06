import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

const listData = [
  {
    id: '1',
    title: `Women's Day`,
    imageUrl:
      'https://previews.123rf.com/images/vectorgift/vectorgift1801/vectorgift180100015/93243383-happy-woman-s-day-background-with-handwritten-calligraphy-inscription-and-spring-flowers-vector-illu.jpg',
    affordability: 'affordable',
    date: '8-3-2020',
  },
  {
    id: '2',
    title: 'Annual Day',
    imageUrl:
      'https://www.gps.ac.in/uploads/albums/annual-day-celebrations-2-6739.jpeg',
    affordability: 'affordable',
    date: '25-2-2020',
  },
  {
    id: '3',
    title: `Children Sport's Day`,
    imageUrl:
      'https://png2.cleanpng.com/sh/96c3b6b654c932960d47edad1f26131f/L0KzQYm3U8A0N5dnfZH0aYP2gLBuTgNkcJD0hOtqcnSwg8H2kwR0NZVmkZ9sYYL3f7F1TfltdKZ4jORqdHnyfn79hfN1d6Mye9N7dHByfn7qiPltbKNqhp9wYX3og372jr02aWpnS6sCNUm8Qra4WL4xQWQ4Uao7OUG4QoG4UsIzOmo7Sqk9LoDxd1==/kisspng-schoolyard-sports-day-cartoon-illustration-vector-cartoon-children-games-on-5a9b3975992e18.0933982915201222296274.png',
    affordability: 'affordable',
    date: '1-1-2020',
  },
  {
    id: '4',
    title: 'X-mas 2019',
    imageUrl:
      'https://images.all-free-download.com/images/graphiclarge/christmas_celebration_background_pattern_vector_296771.jpg',
    affordability: 'affordable',
    date: '25-12-2019',
  },
  {
    id: '5',
    title: 'Diwali Party 2019',
    imageUrl: 'https://cdn-b.medlife.com/2019/10/Happy-Diwali.jpg',
    affordability: 'affordable',
    date: '4-19-2019',
  },
];

const PastEvents = (props) => {
  const renderSportItem = ({ item }) => {
    return (
      <View>
        <TouchableOpacity style={styles.eventItem}>
          <View>
            <View style={{ ...styles.eventRow, ...styles.eventHeader }}>
              <ImageBackground
                source={{ uri: item.imageUrl }}
                style={styles.bgImage}
              >
                <View style={styles.titleContainer}>
                  <Text style={styles.title} numberOfLines={2}>
                    {item.title}
                  </Text>
                </View>
              </ImageBackground>
            </View>
            <View style={{ ...styles.eventRow, ...styles.EventDetail }}>
              <Text style={{ color: 'black' }}>Date: {item.date}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.list}>
      <FlatList
        data={listData}
        renderItem={renderSportItem}
        style={{ width: '95%' }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  },
  bgImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  eventItem: {
    height: 200,
    width: '100%',
    backgroundColor: '#ccc',
    borderRadius: 10,
    overflow: 'hidden',
    marginVertical: 10,
  },
  eventRow: {
    flexDirection: 'row',
  },
  eventHeader: {
    height: '85%',
  },
  titleContainer: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingVertical: 5,
    paddingHorizontal: 12,
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
  },

  eventRow: {
    flexDirection: 'row',
  },
  EventDetail: {
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '15%',
  },
});

export default PastEvents;
