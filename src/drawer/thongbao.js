import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import ThongBaoTab from '../tabs/ThongBao';

const ThongBaoDrawerItem = StackNavigator(
	{
		Playground: { screen: ThongBaoTab },
	},
	{
		headerMode: 'none',
	}
);

ThongBaoDrawerItem.navigationOptions = {
	drawerLabel: 'Thông Báo',
	drawerIcon: ({ tintColor }) => (
		<Icon
			name="alarm"
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

export default ThongBaoDrawerItem;
