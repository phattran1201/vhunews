import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';
import Thoat from '../views/thoat';
import Login from '../views/login';

const ThoatView = ({ navigation }) => <Thoat navigation={navigation} />;
const LoginView = ({ navigation }) => <Login navigation={navigation} />;

const ThoatDrawerItem = StackNavigator(
	{
		Playground: { screen: ThoatView },
		Login: { screen: LoginView },

	},
	{
		headerMode: 'none',
	}
);

ThoatDrawerItem.navigationOptions = {
	drawerLabel: 'Thoát',
	drawerIcon: ({ tintColor }) => (
		<Icon
			name="exit-to-app"
			size={30}
			iconStyle={{
				width: 30,
				height: 30,
			}}
			type="material"
			color={tintColor}
		/>
	),
};

export default ThoatDrawerItem;
