import Expo from 'expo';
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity,Platform,focused } from 'react-native';

import { StackNavigator } from 'react-navigation';
import { Icon } from 'native-base';

import ListsHome from '../views/lists_home';
import ListsDetails from '../views/lists_detail';

const ListsTabView = ({ navigation }) => (
  <ListsHome banner="Lists" navigation={navigation} />
);

const ListsDetailTabView = ({ navigation }) => (
  <ListsDetails banner="Lists Detail" navigation={navigation} />
);

const ListsTab = StackNavigator({
  Home: {
    screen: ListsTabView,
    path: '/',
    navigationOptions: ({ navigation }) => ({
      headerLeft: (
        <Icon
          name={
            Platform.OS === 'ios'
              ? `ios-menu${focused ? '' : '-outline'}`
              : 'md-menu'
          }
          style={{ paddingLeft: 20, color: '#fff' }}
          onPress={() => navigation.navigate('DrawerOpen')}
        />
      ),
      title: 'THÔNG BÁO',
      headerRight: (
        <Icon
          onPress={() => navigation.navigate({ routeName: 'HoiDap' })}
          name={
            Platform.OS === 'ios'
              ? `ios-chatbubbles${focused ? '' : '-outline'}`
              : 'md-chatbubbles'
          }
          style={{ paddingRight: 20, color: '#fff' }}
        />
      ),
      headerTitleStyle: {
        textAlign: 'center',
        flex: 1,
        fontWeight: 'bold',
        // fontStyle: 'italic',
      },
      headerStyle: {
        backgroundColor: '#0099ff',
        elevation: 0,
        shadowOpacity: 0,
      },
      headerTintColor: '#fff',
    }),
  },
  Lists_Detail: {
    screen: ListsDetailTabView,
    path: 'lists_detail',
    navigationOptions: {
      title: 'Lists Detail',
    },
  },
});

export default ListsTab;
