import { Icon } from 'native-base';
import React from 'react';
import { Platform, focused } from 'react-native';
import { StackNavigator } from 'react-navigation';
import CaiDat from '../views/cai_dat';
import { LinearGradient } from 'expo';

const CaiDatTab = StackNavigator({
	CaiDat: {
		screen: CaiDat,	
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
			title: 'CÀI ĐẶT',
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

export default CaiDatTab;
