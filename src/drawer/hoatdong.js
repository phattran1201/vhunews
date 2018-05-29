import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import HoatDongTab from '../tabs/HoatDong';

const HoatDongDrawerItem = StackNavigator(
	{
		Playground: { screen: HoatDongTab },
	},
	{
		headerMode: 'none',
	}
);

HoatDongDrawerItem.navigationOptions = {
	drawerLabel: 'Hoạt Động',
	drawerIcon: ({ tintColor }) => (
		<Icon
			name="supervisor-account"
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

export default HoatDongDrawerItem;
