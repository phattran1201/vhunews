import { Icon } from 'native-base';
import React from 'react';
import { Platform, focused } from 'react-native';
import { StackNavigator } from 'react-navigation';
import HoatDong from '../views/hoat_dong';

const HoatDongTab = StackNavigator({
	HoatDong: {
		screen: HoatDong,	
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
});

export default HoatDongTab;
