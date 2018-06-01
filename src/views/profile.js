import { Font } from 'expo';
import React, { Component } from 'react';
import { Dimensions, Image, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';
import { Button, Icon } from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width;
// const SCREEN_HEIGHT = Dimensions.get('window').height;

const IMAGE_SIZE = SCREEN_WIDTH - 80;

class CustomButton extends Component {
	constructor() {
		super();

		this.state = {
			selected: false,
		};
	}

	componentDidMount() {
		const { selected } = this.props;

		this.setState({
			selected,
		});
	}

	render() {
		const { title } = this.props;
		const { selected } = this.state;

		return (
			<Button
			
				title={title}
				titleStyle={selected
					?  { fontSize: 15, color: '#fff', fontFamily: 'regular' }
					: {
						fontSize: 15, color: '#121212', fontFamily: 'regular' 
					}
				}
				buttonStyle={
					selected
						? { backgroundColor: '#14a6f9', borderRadius: 100, width: 127 } 
						: {
							borderWidth: 1,
							borderColor: '#121212',
							borderRadius: 30,
							width: 127,
							backgroundColor: 'transparent',
						  }
				}
				containerStyle={{ marginRight: 10 }}
				onPress={() => this.setState({ selected: !selected })}
			/>
		);
	}
}

export default class LoginScreen1 extends Component {
	constructor(props) {
		super(props);

		this.state = {
			fontLoaded: false,
		};
	}

	async componentDidMount() {
		await Font.loadAsync({
			georgia: require('../../assets/fonts/Georgia.ttf'),
			regular: require('../../assets/fonts/Montserrat-Regular.ttf'),
			light: require('../../assets/fonts/Montserrat-Light.ttf'),
			bold: require('../../assets/fonts/Montserrat-Bold.ttf'),
		});

		this.setState({ fontLoaded: true });
	}

	render() {
		return (
			<View style={{ flex: 1 }}>
				<StatusBar barStyle="light-content" />
				{this.state.fontLoaded ? (
					<View style={{ flex: 1, backgroundColor: '#fff', }}>
						<View style={styles.statusBar} />
						<View style={styles.navBar}>
							<Icon name='arrow-back' style={styles.backHeader} ></Icon>
							<Text style={styles.nameHeader}>Trần Phát</Text>
						</View>
						<ScrollView style={{ flex: 1 }}>
							<View style={{ justifyContent: 'center', alignItems: 'center' }}>
								<Image
									source={{
										uri:
											'https://scontent.fsgn5-3.fna.fbcdn.net/v/t1.0-0/p320x320/15747699_646495102208328_2688214270975918147_n.jpg?_nc_cat=0&_nc_eui2=AeEJpULlDSIdecoZs_BAoSN--IJGHUJ0sTqA60RvCXgAiChFCUHvuO7rXN3aLOIV_7SDLlV5XBq2vZfcB0U0p8iwKCNgE0Epie_aKNd9C1fayg&oh=382a5a3ab16567aefdfa8c5c01420aae&oe=5B77B3F0',
									}}
									style={{
										width: IMAGE_SIZE,
										height: IMAGE_SIZE,
										borderRadius: 10,
									}}
								/>
							</View>
							<View
								style={{
									flex: 1,
									flexDirection: 'row',
									marginTop: 20,
									marginHorizontal: 40,
									justifyContent: 'center',
									alignItems: 'center',
								}}
							>
								<Text
									style={{
										flex: 1,
										fontSize: 26,
										color: '#14a6f9',
										fontFamily: 'bold',
									}}
								>
									Trần Phát
								</Text>
								{/* <Text style={{flex: 0.5, fontSize: 15, color: 'gray', textAlign: 'left', marginTop: 5}}>
                  K15
                </Text> */}
								<Text
									style={{
										flex: 1,
										fontSize: 26,
										color: '#14a6f9',
										fontFamily: 'bold',
										textAlign: 'right',
									}}
								>
									K15
								</Text>
							</View>
							<View
								style={{
									flex: 1,
									marginTop: 20,
									width: SCREEN_WIDTH - 80,
									marginLeft: 40,
								}}
							>
								<Text
									style={{
										flex: 1,
										fontSize: 15,
										color: '#121212',
										fontFamily: 'regular',
									}}
								>
									Trẻ trung, vui vẻ, yêu thương, trìu mến, trẻ trung, biết những
									gì cần để tạo ra mối quan hệ.
								</Text>
							</View>
							<View style={{ flex: 1, marginTop: 30 }}>
								<Text
									style={{
										flex: 1,
										fontSize: 15,
										color: '#14a6f9',
										fontFamily: 'regular',
										marginLeft: 40,
									}}
								>
									SỞ THÍCH
								</Text>
								<View style={{ flex: 1, width: SCREEN_WIDTH, marginTop: 20 }}>
									<ScrollView
										style={{ flex: 1 }}
										horizontal
										showsHorizontalScrollIndicator={false}
									>
										<View
											style={{
												flex: 1,
												flexDirection: 'column',
												height: 170,
												marginLeft: 40,
												marginRight: 10,
											}}
										>
											<View style={{ flex: 1, flexDirection: 'row' }}>
												<CustomButton title="Thế thao" selected={true} />
												<CustomButton title="Xã hội" />
												<CustomButton title="Hài kịch" selected={true} />
												<CustomButton title="Đọc sách" />
											</View>
											<View style={{ flex: 1, flexDirection: 'row' }}>
												<CustomButton title="Sức Khỏe" />
												<CustomButton title="Phim" selected={true} />
												<CustomButton title="Đồ ăn" selected={true} />
												<CustomButton title="Trò chơi" />
											</View>
											<View style={{ flex: 1, flexDirection: 'row' }}>
												<CustomButton title="Mua sắm" selected={true} />
												<CustomButton title="Nhạc cụ" />
												<CustomButton title="Thú nuôi" selected={true} />
												<CustomButton title="Du lịch" selected={true} />
											</View>
										</View>
									</ScrollView>
								</View>
							</View>
							<View style={{ flex: 1, marginTop: 30 }}>
								<Text
									style={{
										flex: 1,
										fontSize: 15,
										color: '#14a6f9',
										fontFamily: 'regular',
										marginLeft: 40,
									}}
								>
									THÔNG TIN
								</Text>
								<View
									style={{
										flex: 1,
										flexDirection: 'row',
										marginTop: 20,
										marginHorizontal: 30,
									}}
								>
									<View style={{ flex: 1, flexDirection: 'row' }}>
										<View style={{ flex: 1 }}>
											<Text style={styles.infoTypeLabel}>Mã số sinh viên</Text>
											<Text style={styles.infoTypeLabel}>Tuổi</Text>
											<Text style={styles.infoTypeLabel}>Chiều cao</Text>
											<Text style={styles.infoTypeLabel}>Số điện thoại</Text>
											
											<Text style={styles.infoTypeLabel}>Quê Quán</Text>
										</View>
										<View style={{ flex: 1, marginLeft: 10 }}>
											<Text style={styles.infoAnswerLabel}>151A010107</Text>
											<Text style={styles.infoAnswerLabel}>21</Text>
											<Text style={styles.infoAnswerLabel}>1M60</Text>
											<Text style={styles.infoAnswerLabel}>01648103321</Text>
											<Text style={styles.infoAnswerLabel}>Tiền Giang</Text>
										</View>
									</View>
									{/* <View style={{flex: 1, flexDirection: 'row'}}>
                    <View style={{flex: 1}}>
                      <Text style={styles.infoTypeLabel}>Body Type</Text>
                      <Text style={styles.infoTypeLabel}>Diet</Text>
                      <Text style={styles.infoTypeLabel}>Smoke</Text>
                      <Text style={styles.infoTypeLabel}>Drink</Text>
                      <Text style={styles.infoTypeLabel}>Drugs</Text>
                    </View>
                    <View style={{flex: 1, marginLeft: 10, marginRight: -20}}>
                      <Text style={styles.infoAnswerLabel}>Fit</Text>
                      <Text style={styles.infoAnswerLabel}>Vegan</Text>
                      <Text style={styles.infoAnswerLabel}>No</Text>
                      <Text style={styles.infoAnswerLabel}>No</Text>
                      <Text style={styles.infoAnswerLabel}>Never</Text>
                    </View>
                  </View> */}
								</View>
							</View>
							<Button
								containerStyle={{ marginVertical: 20 ,justifyContent: 'center',
									alignItems: 'center',}}
								style={{
									flex: 1,
									justifyContent: 'center',
									alignItems: 'center',
								}}
								buttonStyle={{
									width: SCREEN_WIDTH*0.7,
									height: 55,
									borderRadius: 30,
									justifyContent: 'center',
									alignItems: 'center',
								}}
								linearGradientProps={{
									colors: ['#0099ff', '#14a6f9'],
									start: [1, 0],
									// end: [0.2, 0],
								}}
								title="Thay đổi thông tin"
								titleStyle={{
									fontFamily: 'regular',
									fontSize: 20,
									color: '#fff',
									textAlign: 'center',
								}}
								onPress={() => console.log('Message Theresa')}
								activeOpacity={0.5}
							/>
						</ScrollView>
					</View>
				) : (
					<Text>Loading...</Text>
				)}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	statusBar: {
		height: 10,
	},
	navBar: {
		height: 60,
		width: SCREEN_WIDTH,
		justifyContent: 'center',
		alignContent: 'center',
		flexDirection: 'row',
		// marginTop: 24,
	},
	nameHeader: {
		color: '#121212',
		fontSize: 22,
		textAlign: 'center',
		fontFamily: 'bold',
		flex: 10,
		flexDirection: 'row',
	},
	backHeader: {
		color: '#121212',
		justifyContent: 'flex-start',
		alignContent: 'flex-start',
		flexDirection: 'row',
		// flex: 1,
	},
	infoTypeLabel: {
		fontSize: 15,
		textAlign: 'right',
		color: 'rgba(126,123,138,1)',
		fontFamily: 'regular',
		paddingBottom: 10,
	},
	infoAnswerLabel: {
		fontSize: 15,
		color: '#121212',
		fontFamily: 'regular',
		paddingBottom: 10,
	},
});
