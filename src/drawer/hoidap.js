import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import HoiDap from '../tabs/HoiDap';

const HoatDongDrawerItem = StackNavigator(
	{
		HoiDap: { screen: HoiDap },
	},
	{
		headerMode: 'none',
	}
);

HoatDongDrawerItem.navigationOptions = {
	drawerLabel: 'Hỏi Đáp',	
	drawerIcon: ({ tintColor }) => (
		<Icon
			name="help"
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
