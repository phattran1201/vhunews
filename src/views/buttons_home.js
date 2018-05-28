import { Container, Icon } from 'native-base';
import React from 'react';
import { FlatList, Image, Platform, Text, TouchableOpacity, View, focused } from 'react-native';
import TinTuc from './Tin_Tuc';

export default class Buttons extends React.Component {	
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
		return fetch('http://itcvhu.me/PortalVHU/getNews.php')
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
		const url = 'http://itcvhu.me/PortalVHU/getNews.php';
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
			<Container style={{ backgroundColor: 'white',flex:1 }}>	
			<View style={{ backgroundColor: 'white',flex:4 }}>
				<TinTuc/>	
				</View>
				<View style={{ backgroundColor: 'white',flex:6 }}>
				<FlatList 
					data={this.state.mang}
					renderItem={({ item }) => (
						<TouchableOpacity
							style={{
								borderBottomWidth: 0.2,
								borderBottomColor: '#E0E0E0',
								padding: 5,
							}}
							onPress={() => {
								navigate('GetLink', {
									link: item.LINK,
									tieude: item.TIEUDE,
									linkdemo: 'https://www.facebook.com/sharer/sharer.php?u=',
								});
							}}
						>
							<View
								style={{ flexDirection: 'row', marginTop: 5, marginBottom: 5 }}
							>
								<View
									style={{
										flexDirection: 'column',
										flex: 2,
										paddingRight: 10,
										paddingLeft: 5,
									}}
								>
									<View style={{ flex: 1, marginTop: 5 }}>
										<Text
											style={{
												fontWeight: '100',
												fontSize: 12,
												color: '#9E9E9E',
											}}
										>
											{item.TIME}
										</Text>
										<Text
											style={{
												color: 'black',
												fontWeight: 'bold',
												lineHeight: 20,
												fontSize: 15,
											}}
										>
											{item.TIEUDE}
										</Text>
										{/* <Text>{item.TOMTAT}</Text> */}
									</View>
									<View style={{ flex: 1, justifyContent: 'flex-end' }}>
										<Text
											style={{
												fontWeight: '100',
												fontSize: 12,
												color: '#9E9E9E',
											}}
										>
											{item.AUTHOR}
										</Text>
									</View>
								</View>
								<View style={{ flex: 1 }}>
									<Image
										source={{ uri: item.URL }}
										style={{ flex: 1, width: 125, height: 125 }}
									/>
								</View>
							</View>
						</TouchableOpacity>
					)}
					refreshing={this.state.refreshing}
					onRefresh={this.handleRefresh}
				/></View>
			</Container>
		);
	}
}


