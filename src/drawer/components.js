import Expo from 'expo';
import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';
import { View, Text, StyleSheet, TouchableOpacity,Platform,focused } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import ButtonsTab from '../tabs/buttons';
import ListsTab from '../tabs/lists';
import InputTab from '../tabs/input';
import FontsTab from '../tabs/fonts';

const Components = TabNavigator(
  {
    ButtonsTab: {
      screen: ButtonsTab,
     
    },
    ListsTab: {
      screen: ListsTab,
     
    },
    InputTab: {
      screen: InputTab,
     
  
    },
    FontsTab: {
      screen: FontsTab,
     
    
    },
  },
  {
    navigationOptions: ({ navigation }) => ({
			tabBarIcon: ({ focused }) => {
				const { routeName } = navigation.state;
				let iconName;
				switch (routeName) {
				case 'Trang chủ':
					iconName =
							Platform.OS === 'ios'
								? `ios-home${focused ? '' : '-outline'}`
								: 'md-home';
					break;
				case 'ListsTab':
					iconName =
							Platform.OS === 'ios'
								? `ios-notifications${focused ? '' : '-outline'}`
								: 'md-notifications';
					break;
				case 'ButtonsTab':
					iconName =
							Platform.OS === 'ios'
								? `ios-barcode${focused ? '' : '-outline'}`
								: 'md-barcode';
					break;
				case 'Tin Tức':
					iconName =
							Platform.OS === 'ios'
								? `ios-paper${focused ? '' : '-outline'}`
								: 'md-paper';
					break;
				case 'Cài Đặt':
					iconName =
							Platform.OS === 'ios'
								? `ios-settings${focused ? '' : '-outline'}`
								: 'md-settings';
					break;
				case 'FontsTab':
					iconName =
							Platform.OS === 'ios'
								? `ios-ionitron${focused ? '' : '-outline'}`
								: 'md-ionitron';
					break;
				case 'InputTab':
					iconName =
							Platform.OS === 'ios'
								? `ios-people${focused ? '' : '-outline'}`
								: 'md-people';
				}
				return (
					<Ionicons
						name={iconName}
						size={28}
						style={{ marginBottom: -3, width: 25 }}
						color={focused ? '#fff' : '#fff'}
					/>
				);
			},
		}),
    initialRouteName: 'ButtonsTab',
    animationEnabled: false,
    swipeEnabled: false,
    // Android's default option displays tabBars on top, but iOS is bottom
    tabBarPosition: 'bottom',
    tabBarOptions: {
      
      activeTintColor: '#e91e63',
      // Android's default showing of icons is false whereas iOS is true
      showIcon: true,
      showLabel: false,
    },
  }
);

Components.navigationOptions = {
  drawerLabel: 'Components',
  drawerIcon: ({ tintColor }) => (
    <Icon
      name="settings"
      size={30}
      iconStyle={{
        width: 30,
        height: 30
      }}
      type="material"
      color={tintColor}
    />
  ),
};

// Workaround to avoid crashing when you come back on Components screen
// and you were not on the Buttons tab
export default StackNavigator(
  {
    ComponentsTabs: { screen: Components },
  },
  {
    headerMode: 'none',
  }
);
