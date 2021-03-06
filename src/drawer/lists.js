import Expo from 'expo';
import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import ThongBao from '../views/thong_bao';

const ThongBaoDrawerItem = StackNavigator(
	{
		Playground: { screen: ThongBao },
	},
	{
		headerMode: 'none',
	}
);

ThongBaoDrawerItem.navigationOptions = {
	drawerLabel: 'ThongBao',
	drawerIcon: ({ tintColor }) => (
		<Icon
			name="list"
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

export default ListsDrawerItem;
