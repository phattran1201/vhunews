import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import SuKienTab from '../tabs/SuKien';

const SuKienDrawerItem = StackNavigator(
	{
		Playground: { screen: SuKienTab },
	},
	{
		headerMode: 'none',
	}
);

SuKienDrawerItem.navigationOptions = {
	drawerLabel: 'Sự Kiện',
	drawerIcon: ({ tintColor }) => (
		<Icon
			name="star"
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

export default SuKienDrawerItem;
