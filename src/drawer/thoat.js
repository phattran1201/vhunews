import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';
import Thoat from '../views/thoat';

const ThoatDrawerItem = StackNavigator(
	{
		Playground: { screen: Thoat },
	},
	{
		headerMode: 'none',
	}
);

ThoatDrawerItem.navigationOptions = {
	drawerLabel: 'Thoat',
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
