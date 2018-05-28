import Expo from 'expo';
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity,Platform,focused } from 'react-native';

import { StackNavigator } from 'react-navigation';
import { Icon } from 'native-base';

import Buttons from '../views/buttons_home';
import GetLink from './GetLink';
import TinTuc from '../views/Tin_Tuc';
// import ButtonsDetails from '../views/buttons_detail';

const ButtonsTabView = ({ navigation }) => (
  <Buttons navigation={navigation} />
);
const TinTucView = ({ navigation }) => (
  <TinTuc navigation={navigation} />
);
const ButtonsTab = StackNavigator({
  Buttons: {
    screen: ButtonsTabView,
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
		title: 'TIN NỔI BẬT',
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
  GetLink: {  
    // key:'get'
    screen: GetLink,       
    navigationOptions: ({ navigation }) => ({
      title: navigation.state.params.tieude,
    }),
  },
  TinTuc: {
    screen: TinTucView,       
    // navigationOptions: ({ navigation }) => ({
    //   title: navigation.state.params.tieude,
    // }),
  }
});

export default ButtonsTab;
