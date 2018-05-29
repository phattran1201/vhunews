import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Platform } from 'react-native';
import { Icon } from 'react-native-elements';
import { StackNavigator, TabNavigator } from 'react-navigation';
import VhuNewsTab from '../tabs/VhuNews';
import SuKienTab from '../tabs/SuKien';
import HoatDongTab from '../tabs/HoatDong';
import ThongBaoTab from '../tabs/ThongBao';


const Tabs = StackNavigator(
	{
		VhuNewsTab: {
			screen: VhuNewsTab,
     
		},
		ThongBaoTab: {
			screen: ThongBaoTab,
     
		},
		HoatDongTab: {
			screen: HoatDongTab,
     
  
		},
		SuKienTab: {
			screen: SuKienTab,     
    
		},	
	},
	{
		navigationOptions: ({ navigation }) => ({
			tabBarIcon: ({ focused }) => {
				const { routeName } = navigation.state;
				let iconName;
				switch (routeName) {
				// case 'Trang chủ':
				// 	iconName =
				// 			Platform.OS === 'ios'
				// 				? `ios-home${focused ? '' : '-outline'}`
				// 				: 'md-home';
				// 	break;
				case 'ThongBaoTab':
					iconName =
							Platform.OS === 'ios'
								? `ios-notifications${focused ? '' : '-outline'}`
								: 'md-notifications';
					break;
				case 'VhuNewsTab':
					iconName =
							Platform.OS === 'ios'
								? `ios-barcode${focused ? '' : '-outline'}`
								: 'md-barcode';
					break;
				// case 'Tin Tức':
				// 	iconName =
				// 			Platform.OS === 'ios'
				// 				? `ios-paper${focused ? '' : '-outline'}`
				// 				: 'md-paper';
				// 	break;
				// case 'Cài Đặt':
				// 	iconName =
				// 			Platform.OS === 'ios'
				// 				? `ios-settings${focused ? '' : '-outline'}`
				// 				: 'md-settings';
				// 	break;
				case 'SuKienTab':
					iconName =
							Platform.OS === 'ios'
								? `ios-ionitron${focused ? '' : '-outline'}`
								: 'md-ionitron';
					break;
				case 'HoatDongTab':
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
		initialRouteName: 'VhuNewsTab',
		animationEnabled: false,
		swipeEnabled: false,
		// Android's default option displays tabBars on top, but iOS is bottom
		// tabBarPosition: 'bottom',
		tabBarOptions: {  
			hide: true,
			activeTintColor: '#e91e63',
			// Android's default showing of icons is false whereas iOS is true
			showIcon: false,
			showLabel: false,
			// headerBackground
			
		},	
	}
);

Tabs.navigationOptions = {
	drawerLabel: 'VHU News',
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

// Workaround to avoid crashing when you come back on Tabs screen
// and you were not on the VhuNews tab
export default StackNavigator(
	{
		Tabs: { screen: Tabs },
	},
	{
		headerMode: 'none',
	}
);
