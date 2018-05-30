import Expo from 'expo';
import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';
import { Platform, focused } from 'react-native';
import { LinearGradient } from 'expo';

import CaiDat from '../tabs/caidat';

const CaiDatDrawerItem = StackNavigator(
	{
		Playground: { screen: CaiDat },
	},
	{
		headerMode: 'none',
	}
);

CaiDatDrawerItem.navigationOptions = {
	drawerLabel: 'Cài Đặt',
	drawerIcon: ({ tintColor }) => (
		<Icon
			name="cog"
			size={30}
			iconStyle={{
				width: 30,
				height: 30,
			}}
			type="entypo"
			color={tintColor}
		/>
	),
};

export default CaiDatDrawerItem;
