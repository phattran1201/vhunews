import { Icon } from 'native-base';
import React from 'react';
import { Platform, focused,Linking } from 'react-native';
import { StackNavigator } from 'react-navigation';
import SuKien from '../views/su_kien';
import { LinearGradient } from 'expo';
import GetSK from '../views/GetSK';
const SuKienTab = StackNavigator({
	SuKien: {
		screen: SuKien,
		
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
					onPress={() => navigation.navigate({ routeName: 'ThongBaoTab' })}
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
					colors={['#001eb3', '#001166']}
					start= {[1, 0]}
					// end= {[0.2, 0]}
					style={{						
						height: '100%'
					}}
				/>
			),
		}),
	},
	GetSK: {
		screen: GetSK,
		navigationOptions: ({ navigation }) => ({
			headerLeft: (
				<Icon
					name={
						Platform.OS === 'ios'
							? `ios-arrow-back${focused ? '' : '-outline'}`
							: 'md-arrow-back'
					}
					style={{ paddingLeft: 20, color: '#fff' }}
					onPress={() => navigation.navigate('SuKien')}
				/>
			),
			title: navigation.state.params.TIEUDE,
			headerRight: (
				<Icon
					onPress={() =>
						Linking.openURL(
							navigation.state.params.linkdemo + navigation.state.params.link
						)
					}
					name={
						Platform.OS === 'ios'
							? `ios-share${focused ? '' : '-outline'}`
							: 'md-share'
					}
					style={{ paddingRight: 20, color: '#fff' }}
				/>
			),
			headerTitleStyle: {
				textAlign: 'center',
			
				color: 'white'

			},
			headerStyle: {
				backgroundColor: '#0099ff',
				elevation: 0,
				shadowOpacity: 0,
			},
			headerBackground: (
				<LinearGradient
					colors={['#001eb3', '#001166']}
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

export default SuKienTab;
