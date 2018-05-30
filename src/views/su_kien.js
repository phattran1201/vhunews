import { Container, Icon } from 'native-base';
import React from 'react';
import { FlatList, Platform, Text, TouchableOpacity, View, focused, Image, StyleSheet } from 'react-native';
// import GetSK from './GetSK';
import { LinearGradient } from 'expo';

export default class SuKien extends React.Component {
	
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
		return fetch('http://itcvhu.me/PortalVHU/getSuKien2.php')
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
		const url = 'http://itcvhu.me/PortalVHU/getSuKien2.php';
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
			<Container >
				<FlatList
					
					data={this.state.mang}
					renderItem={({ item }) => (
						<TouchableOpacity
							style={{
								paddingBottom: 10,
							}}
							onPress={() => {
								navigate('GetSK', {
									key: item.key,
									LINK: item.LINK,
									TIEUDE: item.TIEUDE,
									SOLUONG: item.SOLUONG,
									NGAY: item.NGAY,
									THANG: item.THANG,
									TIMEBD: item.TIMEBD,
									TIMEKT: item.TIMEKT,
									DIADIEM: item.DIADIEM,
								});
							}}
						>
							<Image
								source={{ uri: item.URL }}
								style={{ height: 200, width: null, flex: 1 }}
							/>
							<View
								style={{
									flex: 1,
									flexDirection: 'row',
									marginTop: 5,
									marginBottom: 5,
									
									
								}}
							>
								<View style={{ flex: 1, paddingLeft: 15 }}>
									<Text style={{ fontSize: 50, color: '#001eb3' }}>
										{item.NGAY}
									</Text>
									<Text
										style={{
											fontWeight: '400',
											fontSize: 17,
											lineHeight: 17,
											color: '#001eb3',
										}}
									>
											Tháng {item.THANG}
									</Text>
								</View>
								<View
									style={{
										flexDirection: 'column',
										flex: 3,
										paddingRight: 5,
									}}
								>
									<View style={{ flex: 1, marginTop: 5 }}>
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
											<Icon style= {styles.icon} name={ Platform.OS === 'ios' ? 'ios-time-outline' : 'md-time'} />
											{''} Từ {item.TIMEBD} đến {item.TIMEKT} - {' '}
											<Icon style= {styles.icon} name={ Platform.OS === 'ios' ? 'ios-pin-outline' : 'md-pin'} />
											{' '} {item.DIADIEM}
										</Text>
										<Text
											style={{
												fontWeight: '100',
												fontSize: 12,
												color: '#9E9E9E',
											}}
										>
											<Icon style= {styles.icon} name={ Platform.OS === 'ios' ? 'ios-people-outline' : 'md-people'} />
											{' '} Tham gia: 01/{item.SOLUONG}
										</Text>
									</View>
								</View>
							</View>
							<View style={{shadowOffset: {
								width: 0,
								height: 3
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
			</Container>
		);
	}
}

const styles = StyleSheet.create({
	icon: {
		color:'#001eb3',
		fontSize:12
	},
});