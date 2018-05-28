import Expo from 'expo';
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity,Platform,focused } from 'react-native';

import { StackNavigator } from 'react-navigation';
import { Icon } from 'native-base';
import InputHome from '../views/input_home';
import InputDetails from '../views/input_details';

const InputTabView = ({ navigation }) => (
  <InputHome navigation={navigation} />
);

const InputDetailTabView = ({ navigation }) => (
  <InputDetails
    banner={`${navigation.state.params.name}s Profile`}
    navigation={navigation}
  />
);

const InputTab = StackNavigator({
  Input: {
    screen: InputTabView,
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
      title: 'HOẠT ĐỘNG',
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
  Input_Detail: {
    screen: InputDetailTabView,
    path: '/input_detail',
    navigationOptions: {
      title: 'Input Detail',
    },
  },
});

export default InputTab;
