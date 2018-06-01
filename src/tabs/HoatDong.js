import { Icon } from 'native-base';
import React from 'react';
import { Platform, focused } from 'react-native';
import { StackNavigator } from 'react-navigation';
import HoatDong from '../views/hoat_dong';
import { LinearGradient } from 'expo';

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
				color: 'white'

			},
			headerStyle: {
				backgroundColor: '#0099ff',
				elevation: 0,
				shadowOpacity: 0,
			},
			headerBackground: (
				<LinearGradient
					colors={['#0099ff', '#14a6f9']}
					start= {[1, 0]}
					// end= {[0.2, 0]}
					style={{						
						height: '100%'
					}}
				/>
			),
		}),
	},
});

export default HoatDongTab;
