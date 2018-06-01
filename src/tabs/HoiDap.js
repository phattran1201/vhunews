import { Icon } from 'native-base';
import React from 'react';
import { Platform, focused, Linking,Text } from 'react-native';
import { LinearGradient } from 'expo';

import { StackNavigator } from 'react-navigation';
import HoiDap from '../views/hoi_dap';
import GuiCauHoi from '../views/hoi_dap_gui';
import CommentHoiDap from '../views/hoi_dap_cmt';


// const HoiDapTabView = ({ navigation }) => <HoiDap navigation={navigation} />;

const HoiDapTab = StackNavigator({
	HoiDap: {
		screen: HoiDap,
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
			
			title: 'HỎI ĐÁP',
			headerRight: (
				<Icon
					onPress={() => navigation.navigate('GuiCauHoi')}
					name={
						Platform.OS === 'ios'
							? `ios-add-circle${focused ? '' : '-outline'}`
							: 'md-add-circle'
					}
					style={{ paddingRight: 20, color: '#fff' }}
				/>
			),
			headerTitleStyle: {
				textAlign: 'center',
				flex: 1,
				fontWeight: 'bold',
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
	GuiCauHoi: {
		screen: GuiCauHoi,
		navigationOptions: (navigation) => ({			
			title: 'ĐẶT CÂU HỎI',
			headerRight: (
				<Icon
					name={
						Platform.OS === 'ios'
							? `ios-help-circle${focused ? '' : '-outline'}`
							: 'md-help-circle'
					}
					style={{ paddingRight: 20, color: '#fff' }}
					onPress={() =>
						Linking.openURL('https://www.facebook.com/messages/t/thanh.phat.97')
					}
				/>
            ),
            // headerLeft: (
			// 	<Icon
			// 		name={
			// 			Platform.OS === 'ios'
			// 				? `ios-arrow-back${focused ? '' : '-outline'}`
			// 				: 'md-arrow-back'
			// 		}
			// 		style={{ paddingLeft: 20, color: '#fff' }}
			// 		onPress={() => navigation.navigate('HoiDap')}
			// 	/>
			// ),
			headerTitleStyle: { textAlign: 'center', flex: 1, fontWeight: 'bold'		,		color: 'white'
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
	CommentHoiDap: {
		screen: CommentHoiDap,
		navigationOptions: ({ navigation }) => ({
            headerLeft: (
				<Icon
					name={
						Platform.OS === 'ios'
							? `ios-arrow-back${focused ? '' : '-outline'}`
							: 'md-arrow-back'
					}
					style={{ paddingLeft: 20, color: '#fff' }}
					onPress={() => navigation.navigate('HoiDap')}
				/>
			),
			title: (
				<Text style={{ color: '#fff' }}>
					{navigation.state.params.hoidapContent}
				</Text>
			),
			headerTitleStyle: {			
				flex: 1,
				fontWeight: 'bold',		
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

export default HoiDapTab;
