import { Icon } from 'native-base';
import React, { Component } from 'react';
import { Linking, Platform, Text, WebView, focused } from 'react-native';
import { LinearGradient } from 'expo';

export default class GetLink extends Component {

	static navigationOptions = ({ navigation }) => ({		
		title: (
			<Text style={{ fontSize: 15 }}>{navigation.state.params.tieude}</Text>
		),
		headerLeft: (
			<Icon
				name={
					Platform.OS === 'ios'
						? `ios-arrow-back${focused ? '' : '-outline'}`
						: 'md-arrow-back'
				}
				style={{ paddingLeft: 20, color: '#fff' }}
				onPress={() => navigation.navigate('VhuTab')}
			/>
		),
		headerRight: (
			<Icon
				onPress={() =>
					Linking.openURL(
						navigation.state.params.linkdemo + navigation.state.params.link
					)
				}
				name={
					Platform.OS === 'ios'
						? `ios-share${focused ? '' : '-outline'}`
						: 'md-share'
				}
				style={{ paddingRight: 20, color: '#fff' }}
			/>
		),
		headerTitleStyle: {
			textAlign: 'center',
			flex: 1,
			fontWeight: 'bold',
			fontStyle: 'italic',
			color: 'white'

		},
		headerStyle: {
			backgroundColor: '#0099ff',
			elevation: 0,
			shadowOpacity: 0,
			// color: '#fff'

		},
		headerBackground: (
			<LinearGradient
				colors={['#001eb3', '#001166']}
				start= {[1, 0]}
				// end= {[0.2, 0]}
				style={{						
					height: '100%'
				}}
			/>
		),
	});
	// taoHang(property) {
	//   return (
	//     <CardItem bordered>
	//       <Body>
	//         <Text>{property.content}</Text>
	//       </Body>
	//     </CardItem>
	//   );
	// }

	render() {
		// const { navigate } = this.props.navigation;
		var $url = this.props.navigation.state.params.link;
		return <WebView source={{ uri: $url }} />;
	}
}
