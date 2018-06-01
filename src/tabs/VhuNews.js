import { Icon } from 'native-base';
import React from 'react';
import { Platform, focused } from 'react-native';
import { StackNavigator } from 'react-navigation';
import TinNoiBat from '../views/tin_noi_bat';
import HoatDong from '../views/hoat_dong';
import VhuNews from '../views/vhu_news';
import GetLink from './GetLink';
import { LinearGradient } from 'expo';

const VhuNewsTabView = ({ navigation }) => <VhuNews navigation={navigation} />;
const TinNoiBatView = ({ navigation }) => <TinNoiBat navigation={navigation} />;
const HoatDongView = ({ navigation }) => <HoatDong navigation={navigation} />;
const VhuTab = StackNavigator({
	VhuTab: {
		screen: VhuNewsTabView,
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
				color: 'white'
			},
			headerStyle: {
				// backgroundColor: '#0099ff',
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
	GetLink: {
		// key:'get'
		screen: GetLink,
		navigationOptions: ({ navigation }) => ({
			title: navigation.state.params.tieude,
		}),
	},
	TinNoiBat: {
		screen: TinNoiBatView,
		// navigationOptions: ({ navigation }) => ({
		//   title: navigation.state.params.tieude,
		// }),
	},
	HoatDong: {
		screen: HoatDongView,
		// navigationOptions: ({ navigation }) => ({
		//   title: navigation.state.params.tieude,
		// }),
	},
});

export default VhuTab;
