import { Body, Button, Card, CardItem, Container, Icon, Left, Right } from 'native-base';
import React from 'react';
import { FlatList, Image, Platform, Text, focused } from 'react-native';

// import GetLink from './GetLink';

export default class HoatDong extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			mang: [],
			refreshing: false,
		};
	}
	componentDidMount() {
		this.setState({
			loading: true,
			refreshing: true,
		});
		return fetch('http://itcvhu.me/PortalVHU/getHoatDong.php')
			.then(response => response.json())
			.then(responseJson => {
				this.setState({
					mang: responseJson,
					loading: false,
					refreshing: false,
				});
			});
	}
	makeRemoteRequest = () => {
		const url = 'http://itcvhu.me/PortalVHU/getHoatDong.php';
		this.setState({ loading: true });
		fetch(url)
			.then(response => response.json())
			.then(responseJson => {
				this.setState({
					mang: responseJson,
					loading: false,
					refreshing: false,
				});
			});
	};

	handleRefresh = () => {
		this.setState(
			{
				refreshing: true,
			},
			() => {
				this.makeRemoteRequest();
			}
		);
	};
	render() {		
		const { navigate } = this.props.navigation;
		return (
			<Container>			
				<FlatList					
					data={this.state.mang}
					renderItem={({ item }) => (
						<Card>
								
							<CardItem
								onPress={() => {
									navigate('GetLink', {
										link: item.LINK,
										tieude: item.TIEUDE,
										linkdemo: 'https://www.facebook.com/sharer/sharer.php?u=',
									});
								}}
								cardBody
							>
								<Image
									source={{ uri: item.URL }}
									style={{ height: 200, width: null, flex: 1 }}
								/>
							</CardItem>
							<CardItem style={{ height: 45 }}>
								<Left>
									<Button
										transparent
										onPress={() => alert('Chạm TIM nhẹ hoy nhen !')}
									>
										<Icon
											style={{ color: '#696969' }}
											name={
												Platform.OS === 'ios'
													? `ios-heart${focused ? '' : '-outline'}`
													: 'md-heart'
											}	
										/>
									</Button>
									<Button
										transparent
										onPress={() => alert('Chạm CHAT nhẹ hoy nhen !')}
									>
										<Icon
											style={{ color: '#696969' }}
											name={
												Platform.OS === 'ios'
													? `ios-chatbubbles${focused ? '' : '-outline'}`
													: 'md-chatbubbles'
											}
												
										/>
									</Button>
									<Button
										transparent
										onPress={() =>
											Linking.openURL(
												'https://www.facebook.com/sharer/sharer.php?u=' +
														item.LINK
											)
										}
										// onPress={() => alert("Chạm Share nhẹ hoy nhen !")}
									>
										<Icon
											style={{ color: '#696969' }}
											name={
												Platform.OS === 'ios'
													? `ios-share${focused ? '' : '-outline'}`
													: 'md-share'
											}
											// style={{ color: 'black' }}
										/>
									</Button>
								</Left>
								<Right>
									<Button
										transparent
										onPress={() => {
											navigate('GetLink', {
												link: item.LINK,
												tieude: item.TIEUDE,
												linkdemo:
														'https://www.facebook.com/sharer/sharer.php?u=',
											});
										}}
									>
										<Text note>{item.TIME}</Text>
									</Button>
								</Right>
							</CardItem>
							<CardItem>
								<Body>
									<Text
										onPress={() => {
											navigate('GetLink', {
												link: item.LINK,
												tieude: item.TIEUDE,
												linkdemo:
														'https://www.facebook.com/sharer/sharer.php?u=',
											});
										}}
										style={{ fontWeight: '900' }}
									>
										{item.TIEUDE}
									</Text>									
								</Body>
							</CardItem>
						</Card>
					)}
					refreshing={this.state.refreshing}
					onRefresh={this.handleRefresh}
				/>
			
			</Container>
		);
	}
}
