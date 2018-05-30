import { Container } from 'native-base';
import React from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import TinNoiBat from './tin_noi_bat';

import { StyleSheet, Platform, ScrollView, Animated } from 'react-native';

const HEADER_MIN_HEIGHT = 0;
const HEADER_MAX_HEIGHT = 240;
export default class VhuNews extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			mang: [],
			refreshing: false,
		};
		this.scrollYAnimatedValue = new Animated.Value(0);
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
		const headerHeight = this.scrollYAnimatedValue.interpolate({
			inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
			outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
			extrapolate: 'clamp',
		});

		const headerBackgroundColor = this.scrollYAnimatedValue.interpolate({
			inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
			outputRange: ['#212121', '#01579B'],
			extrapolate: 'clamp',
		});
		const { navigate } = this.props.navigation;
		return (
			<View style={styles.container}>
				<ScrollView
					contentContainerStyle={{ paddingTop: HEADER_MAX_HEIGHT }}
					scrollEventThrottle={16}
					onScroll={Animated.event([
						{
							nativeEvent: { contentOffset: { y: this.scrollYAnimatedValue } },
						},
					])}
				>
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
									style={{
										flexDirection: 'row',
										marginTop: 5,
										marginBottom: 5,
									}}
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
								<View  style={{shadowOffset: {
									width: 0,
									height: 2
								},
								borderBottomWidth:1,
									// borderTopWidth:1,
									// elevation:5,
								shadowRadius:3,
								shadowOpacity: 1.0,
									// borderTopColor: '#696969',
								borderBottomColor: '#ccc'}}></View>
							</TouchableOpacity>
						)}
						refreshing={this.state.refreshing}
						onRefresh={this.handleRefresh}
					/>
				</ScrollView>

				<Animated.View
					style={[
						styles.animatedHeader,
						{ height: headerHeight, backgroundColor: headerBackgroundColor },
					]}
				>
					<TinNoiBat  	sa				
					/>
				</Animated.View>
			</View>
		);
	}
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: Platform.OS == 'ios' ? 20 : 0,
	},

	animatedHeader: {
		position: 'absolute',
		top: Platform.OS == 'ios' ? 20 : 0,
		left: 0,
		right: 0,
		justifyContent: 'center',
		alignItems: 'center',
	},

	headerText: {
		color: 'white',
		fontSize: 22,
	},

	item: {
		backgroundColor: '#E0E0E0',
		margin: 8,
		height: 45,
		justifyContent: 'center',
		alignItems: 'center',
	},

	itemText: {
		color: 'black',
		fontSize: 16,
	},
});
