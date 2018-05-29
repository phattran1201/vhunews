import { Icon } from 'native-base';
import React from 'react';
import { Platform, focused, Linking,Text } from 'react-native';

import { StackNavigator } from 'react-navigation';
import HoiDap from '../views/hoi_dap';
import GuiCauHoi from '../views/hoi_dap_gui';
import CommentHoiDap from '../views/hoi_dap_cmt';


const HoiDapTabView = ({ navigation }) => <HoiDap navigation={navigation} />;

const HoiDapTab = StackNavigator({
	HoiDap: {		
		screen: HoiDapTabView,
		navigationOptions: ({ navigation }) => ({	
			drawerIcon:(
				<Icon
					name={
						Platform.OS === 'ios'
							? `ios-help${focused ? '' : '-outline'}`
							: 'md-help'
					}
					size={30}
					iconStyle={{
						width: 30,
						height: 30,						
					}}
					style={{color:'#cbd2d9' }}
				/>
			),		
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
				// fontStyle: 'italic',
			},
			headerStyle: {
				backgroundColor: '#0099ff',
				elevation: 0,
				shadowOpacity: 0,
			},
			headerTintColor: '#fff',
		}),
	},
	GuiCauHoi: {
		screen: GuiCauHoi,
		navigationOptions: () => ({			
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
			headerTitleStyle: { textAlign: 'center', flex: 1, fontWeight: 'bold' },
			headerStyle: {
				backgroundColor: '#0099ff',
				elevation: 0,
				shadowOpacity: 0,
			},
			headerTintColor: '#fff',
		}),
	},
	CommentHoiDap: {
		screen: CommentHoiDap,
		navigationOptions: ({ navigation }) => ({
		
			title: (
				<Text style={{ color: '#fff' }}>
					{navigation.state.params.hoidapContent}
				</Text>
			),
			headerTitleStyle: {			
				flex: 1,
				fontWeight: 'bold',			
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

export default HoiDapTab;
