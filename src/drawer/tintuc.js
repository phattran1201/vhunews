import Expo from 'expo';
import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import VhuNewsTab from '../tabs/VhuNews';

const TinTucDrawerItem = StackNavigator(
	{
		Playground: { screen: VhuNewsTab },
	},
	{
		headerMode: 'none',
	}
);

TinTucDrawerItem.navigationOptions = {
	drawerLabel: 'Tin Tức',
	drawerIcon: ({ tintColor }) => (
		<Icon
			name="description"
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

export default TinTucDrawerItem;
