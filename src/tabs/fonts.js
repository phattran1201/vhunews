import Expo from 'expo';
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity,Platform,focused } from 'react-native';

import { StackNavigator } from 'react-navigation';
import { Icon } from 'native-base';

import FontsHome from '../views/fonts_home';
import FontsDetails from '../views/fonts_detail';

const FontsTabView = ({ navigation }) => (
  <FontsHome banner="Fonts" navigation={navigation} />
);

const FontsDetailTabView = ({ navigation }) => (
  <FontsDetails banner="Fonts Detail" navigation={navigation} />
);

const FontsTab = StackNavigator({
  Home: {
    screen: FontsTabView,
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
      title: 'SỰ KIỆN',
      headerRight: (
        <Icon
          onPress={() => navigation.navigate({ routeName: 'TB' })}
          name={
            Platform.OS === 'ios'
              ? `ios-notifications${focused ? '' : '-outline'}`
              : 'md-notifications'
          }
          style={{ paddingRight: 20, color: '#fff' }}
        />
      ),
      headerTitleStyle: {
        textAlign: 'center',
        flex: 1,
        fontWeight: 'bold',
        fontStyle: 'italic',
      },
      headerStyle: {
        backgroundColor: '#0099ff',
        elevation: 0,
        shadowOpacity: 0,
      },
      headerTintColor: '#fff',
    }),
  },
  Detail: {
    screen: FontsDetailTabView,
    path: 'fonts_detail',
    navigationOptions: {
      title: 'Fonts Detail',
    },
  },
});

export default FontsTab;
