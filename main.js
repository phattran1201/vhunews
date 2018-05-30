import { FontAwesome, Ionicons } from '@expo/vector-icons';
import Expo, { AppLoading, Asset, Font,LinearGradient } from 'expo';
import React from 'react';
import { Dimensions, Image, View,StyleSheet,Text } from 'react-native';
import { DrawerItems, DrawerNavigator } from 'react-navigation';
import HoiDap from './src/drawer/hoidap';
import Pricing from './src/drawer/pricing';
import Profile from './src/drawer/profile';
import Ratings from './src/drawer/ratings';
// import Lists from './src/drawer/lists';
import CaiDatTab from './src/drawer/caidat';
import Home from './src/views/Home';
import Thoat from './src/drawer/thoat';
import Login from './src/views/login';
import VhuNewsTab from './src/drawer/tintuc';
import SuKienTab from './src/drawer/sukien';
import HoatDongTab from './src/views/hoat_dong';
import ThongBaoTab from './src/drawer/thongbao';
import { YellowBox } from 'react-native';
const SCREEN_WIDTH = Dimensions.get('window').width;

YellowBox.ignoreWarnings(['Warning: setState(...): Can only update a mounted or mounting component.']);

const CustomDrawerContentComponent = props => (
	<LinearGradient colors={['#001166', '#001eb3']} style={{ flex: 1 }}>
		<View
			style={{ paddingTop: 50, justifyContent: 'center', alignItems: 'center', }}
		>
			
			<View style={styles.titleContainer}>
				<View style={{ flexDirection: 'row' }}>
					<Text style={styles.titleText}>CỔNG THÔNG TIN</Text>
				</View>
				<View style={{ marginLeft: 40 }}>
					<Text style={styles.titleText}>ĐẠI HỌC VĂN HIẾN</Text>
				</View>				
			</View>
			{/* <Image				
				source={require('./assets/icons/icon.png')}
				style={{ width: SCREEN_WIDTH * 0.2 }}
				resizeMode="contain"
			/> */}
		</View>
		<View style={{ marginLeft: 10 }}>
			<DrawerItems {...props} />
		</View>
	</LinearGradient>
);

const MainRoot = DrawerNavigator(
	{
		Login: {
			path: '/login',
			screen: Login,
		},
		// Tabs: {
		// 	path: '/Tabs',
		// 	screen: Tabs,
		// },
		VhuNewsTab: {
			screen: VhuNewsTab,
     
		},
		ThongBaoTab: {
			screen: ThongBaoTab,
     
		},
	
		SuKienTab: {
			screen: SuKienTab,     
    
		},	
		Profile: {
			// path: '/profile',
			screen: Profile,
		},
		Hoidap: {
			// path: '/hoidap',
			screen: HoiDap,
		},
		// Ratings: {
		// 	path: '/ratings',
		// 	screen: Ratings,
		// },
		// Pricing: {
		// 	path: '/pricing',
		// 	screen: Pricing,
		// },
		Settings: {
			// path: '/settings',
			screen: CaiDatTab,
		},
		Thoat: {
			path: '/thoat',
			screen: Thoat,
		},
		// Home: {
			
		// 	screen: Home,
		// },
	},
	{
		initialRouteName: 'Login',
		contentOptions: {
			activeTintColor: '#0099ff',
			activeBackgroundColor: 'transparent',
			inactiveTintColor: '#fff',
			inactiveBackgroundColor: 'transparent',
			labelStyle: {
				fontSize: 15,
				marginLeft: 0,
			},
		},
		drawerWidth: SCREEN_WIDTH * 0.8,
		contentComponent: CustomDrawerContentComponent,
		drawerOpenRoute: 'DrawerOpen',
		drawerCloseRoute: 'DrawerClose',
		drawerToggleRoute: 'DrawerToggle',
	}
);

function cacheImages(images) {
	return images.map(image => {
		if (typeof image === 'string') {
			return Image.prefetch(image);
		} else {
			return Asset.fromModule(image).downloadAsync();
		}
	});
}

function cacheFonts(fonts) {
	return fonts.map(font => Font.loadAsync(font));
}

export default class AppContainer extends React.Component {
	state = {
		isReady: false,
	};

	async _loadAssetsAsync() {
		const imageAssets = cacheImages([
			// require('./assets/images/bg_screen1.jpg'),
			// require('./assets/images/bg_screen2.jpg'),
			// require('./assets/images/bg_screen3.jpg'),
			// require('./assets/images/bg_screen4.jpg'),
			require('./assets/images/user-cool.png'),
			require('./assets/images/user-hp.png'),
			require('./assets/images/user-student.png'),
			require('./assets/images/avatar1.jpg'),
		]);

		const fontAssets = cacheFonts([FontAwesome.font, Ionicons.font]);

		await Promise.all([...imageAssets, ...fontAssets]);
	}

	render() {
		if (!this.state.isReady) {
			return (
				<AppLoading
					startAsync={this._loadAssetsAsync}
					onFinish={() => this.setState({ isReady: true })}
					onError={console.warn}
				/>
			);
		}
		return <MainRoot />;
	}
}

Expo.registerRootComponent(AppContainer);

const styles = StyleSheet.create({
	titleContainer: {
		// height: 150,
		backgroundColor: 'transparent',
		justifyContent: 'center',
	},
	titleText: {
		color: 'white',
		fontSize: 18,
	// fontFamily: 'regular',
	},
});