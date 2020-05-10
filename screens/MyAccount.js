import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const MyAccount = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Image
            style={styles.avatar}
            source={{ uri: 'https://bootdey.com/img/Content/avatar/avatar6.png' }}
          />
          <Text style={styles.name}>Pratik Kshirsagar </Text>
          <Text style={styles.userInfo}>pratik@gmail.com </Text>
          <Text style={styles.userInfo}>Airoli</Text>
        </View>
      </View>
      <View style={styles.body}>
        <View style={{ marginTop: 25 }}>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ marginRight: 10 }}>
              <Entypo name="home" size={25} color="white" />
            </View>
            <View>
              <TouchableOpacity onPress={() => props.navigation.navigate('Home')}>
                <Text style={{ color: 'white', fontSize: 20, fontFamily: 'open-sans-bold' }}>
                  Home
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ flexDirection: 'row', marginTop: 30 }}>
            <View style={{ marginRight: 12 }}>
              <Feather name="settings" size={25} color="white" />
            </View>
            <View>
              <TouchableOpacity>
                <Text style={{ color: 'white', fontSize: 20, fontFamily: 'open-sans-bold' }}>
                  Setting
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ flexDirection: 'row', marginTop: 30 }}>
            <View style={{ marginRight: 10 }}>
              <Entypo name="open-book" size={25} color="white" />
            </View>
            <View>
              <TouchableOpacity>
                <Text style={{ color: 'white', fontSize: 20, fontFamily: 'open-sans-bold' }}>
                  Booking
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ flexDirection: 'row', marginTop: 30 }}>
            <View style={{ marginRight: 10 }}>
              <AntDesign name="poweroff" size={23} color="white" />
            </View>
            <View>
              <TouchableOpacity>
                <Text style={{ color: 'white', fontSize: 20, fontFamily: 'open-sans-bold' }}>
                  Logout
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#DCDCDC',
  },
  headerContent: {
    padding: 30,
    alignItems: 'center',
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: 'white',
    marginBottom: 10,
  },
  name: {
    fontSize: 22,
    color: '#000000',
    fontWeight: '600',
  },
  userInfo: {
    fontSize: 16,
    color: '#778899',
    fontWeight: '600',
  },
  body: {
    backgroundColor: '#4a148c',
    height: 500,
    alignItems: 'center',
  },
  item: {
    flexDirection: 'row',
  },
  infoContent: {
    flex: 1,
    paddingLeft: 5,
  },
  iconContent: {
    flex: 1,
    paddingRight: 5,
  },
  icon: {
    width: 30,
    height: 30,
    marginTop: 20,
  },
  info: {
    fontSize: 18,
    marginTop: 20,
    color: '#FFFFFF',
  },
});
export default MyAccount;
