import { Body, Button, Card, CardItem, Container, Content, Icon, Tab, Tabs } from 'native-base';
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, WebView } from 'react-native';

export default class GetSK extends Component {
	static navigationOptions = ({ navigation }) => ({
		// headerLeft: <Icon
		//     name={Platform.OS === 'ios' ? `ios-menu${focused ? '' : '-outline'}` : 'md-menu'}
		//     style={{ paddingLeft: 20, color:'#fff'}}
		//     onPress={() => navigation.navigate("DrawerOpen")}  />,

		title: (
			<Text style={{ fontSize: 15 }}>{navigation.state.params.TIEUDE}</Text>
		),
		headerStyle: {
			backgroundColor: '#0099ff',
			elevation: 0,
			shadowOpacity: 0,
		},
		headerTintColor: '#fff',
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
		// var $key = this.props.navigation.state.params.key;
		var $TIEUDE = this.props.navigation.state.params.TIEUDE;
		var $SOLUONG = this.props.navigation.state.params.SOLUONG;
		var $NGAY = this.props.navigation.state.params.NGAY;
		var $THANG = this.props.navigation.state.params.THANG;
		var $TIMEBD = this.props.navigation.state.params.TIMEBD;
		var $TIMEKT = this.props.navigation.state.params.TIMEKT;
		var $DIADIEM = this.props.navigation.state.params.DIADIEM;
		var $LINK = this.props.navigation.state.params.LINK;
		return (
			<Container>
				<Tabs locked initialPage={0} tabBarPosition="bottom">
					<Tab
						heading="Nội Dung"
						tabStyle={{ backgroundColor: '#14a6f9' }}
						textStyle={{ color: '#fff' }}
						activeTabStyle={{ backgroundColor: '#0099ff' }}
						activeTextStyle={{ color: '#fff', fontWeight: 'normal' }}
					>
						<WebView source={{ uri: $LINK }} />
					</Tab>
					<Tab
						heading="Đăng Ký"
						tabStyle={{ backgroundColor: '#14a6f9' }}
						textStyle={{ color: '#fff' }}
						activeTabStyle={{ backgroundColor: '#0099ff' }}
						activeTextStyle={{ color: '#fff', fontWeight: 'normal' }}
					>
						<Content contentContainerStyle={{ marginTop: 15 }}>
							<Card style={{ marginLeft: 5, marginRight: 5 }}>
								<CardItem>
									<Icon
										style={styles.icon}
										name={
											Platform.OS === 'ios' ? 'ios-star-outline' : 'md-star'
										}
									/>
									<Body>
										<Text style={styles.title}>{$TIEUDE}</Text>
									</Body>
								</CardItem>
								<CardItem>
									<Icon
										style={styles.icon}
										name={
											Platform.OS === 'ios'
												? 'ios-calendar-outline'
												: 'md-calendar'
										}
									/>
									<Text>
										{$NGAY} tháng {$THANG}
									</Text>
								</CardItem>
								<CardItem>
									<Icon
										style={styles.icon}
										name={
											Platform.OS === 'ios' ? 'ios-time-outline' : 'md-time'
										}
									/>
									<Text>
										Từ {$TIMEBD} đến {$TIMEKT}
									</Text>
								</CardItem>
								<CardItem>
									<Icon
										style={styles.icon}
										name={Platform.OS === 'ios' ? 'ios-pin-outline' : 'md-pin'}
									/>
									<Text>Tại {$DIADIEM}</Text>
								</CardItem>
								<CardItem>
									<Icon
										style={styles.icon}
										name={
											Platform.OS === 'ios' ? 'ios-people-outline' : 'md-people'
										}
									/>
									<Text>Số người tham gia: 01/{$SOLUONG}</Text>
								</CardItem>
							</Card>
							<Body
								style={{
									flexDirection: 'row',
									justifyContent: 'center',
									marginTop: 15,
									marginRight: 50,
									marginLeft: 50,
									marginBottom: 15,
								}}
							>
								<Button
									block
									rounded
									style={{ backgroundColor: '#0099ff', width: 300 }}
								>
									<Text style={styles.dangky}>Đăng ký ngay</Text>
								</Button>
							</Body>
						</Content>
					</Tab>
				</Tabs>
			</Container>
		);
	}
}

const styles = StyleSheet.create({
	title: {
		color: '#0099ff',
		fontWeight: 'bold',
		fontSize: 17,
	},
	dangky: {
		color: '#ffffff',
		fontWeight: 'bold',
	},
	icon: {
		color: '#0099ff',
	},
});
