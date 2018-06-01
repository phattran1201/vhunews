import React from 'react';
import { StyleSheet, Text, View, Platform, ScrollView,Alert } from 'react-native';

import { Rating,  } from 'react-native-ratings';
import { Button,  } from 'react-native-elements';
import { firebaseApp } from './firebaseConfig';
import { BackHandler } from 'react-native';

const WATER_IMAGE = require('../images/water.png');

class Thoat extends React.Component {
	constructor(props) {
		super(props);
		this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
	}
	ratingCompleted(rating) {
		console.log('Rating is: ' + rating);
	}

	componentWillMount() {
		BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
	}
	
	componentWillUnmount() {
		BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
	}
	
	handleBackButtonClick() {
		
		firebaseApp.auth().signOut();
		console.log('Đã Thoát');
		this.props.navigation.navigate('Login');
		return true;
	}

	// thoat = () =>{
	// 	firebaseApp.auth().signOut();

	// 	console.log('Đã Thoát');
	// 	Alert.alert(
	// 		'Cảnh báo',
	// 		'Bạn muốn đăng xuất',
	// 		[
	// 			// {
	// 			// 	text: 'Ask me later',
	// 			// 	onPress: () => Actions.pop(),
	// 			// },
	// 			{ text: 'Đồng ý', onPress: () => BackHandler.exitApp()},
	// 			{
	// 				text: 'Hủy',
	// 				// onPress: () =>  this.props.navigation.goBack(),
	// 				style: 'cancel',
	// 			},
	// 		],
	// 		{ cancelable: false }
	// 	);
	// 	return true;
	// }
	
	render() {
		return (
			<View style={styles.container}>
				<View style={styles.headingContainer}>
					<Text style={styles.titleText}>Đánh Giá Về Chúng Tôi</Text>
					{/* <Text style={styles.subtitleText}>cảm ơn các bạn!</Text>
					<Button
						linearGradientProps={{
							colors: ['#0099ff', '#14a6f9'],
							start: [1, 0],
							end: [0.2, 0],
						}}
						buttonStyle={styles.loginButton}
						containerStyle={{ marginTop: 5, flex: 0,alignItems: 'center',justifyContent: 'center', }}
						activeOpacity={0.8}
						title= 'THOÁT'
						onPress={this.thoat}
						titleStyle={styles.loginTextButton}
									
					/> */}

				</View>
				<ScrollView style={styles.viewContainer}>					
					
					<View
						style={{
							justifyContent: 'center',
							alignItems: 'center',
							
						}}
					>
						<Text style={[
							styles.titleText,
							{ marginTop: 20, color: '#9b59b6', fontSize: 22 },
						]}>
						Sự hài lòng
						</Text>
						<Rating
							type="heart"
							ratingCount={5}
							fractions={2}
							startingValue={3}
							imageSize={40}
							onFinishRating={this.ratingCompleted}
							showRating
							style={{ paddingVertical: 10 }}
						/>
					</View>					
					<View style={{
						justifyContent: 'center',
						alignItems: 'center',
						
					}} >
						<Text style={[
							styles.titleText,
							{ marginTop: 20, color: '#9b59b6', fontSize: 22 },
						]}>
						Style ứng dụng
						</Text>
						<Rating
							showRating
							imageSize={40}
							onFinishRating={this.ratingCompleted}
							style={{ paddingVertical: 10 }}
						/>			
					</View>					
					<View
						style={{
							justifyContent: 'center',
							alignItems: 'center',
							
						}}
					>
						<Text style={[
							styles.titleText,
							{ marginTop: 20, color: '#9b59b6', fontSize: 22 },
						]}>
						Thang điểm trên 10 
						</Text>			
						<Rating
							type="custom"
							ratingImage={WATER_IMAGE}
							ratingColor="#3498db"
							ratingBackgroundColor="#ceee"
							ratingCount={10}
							imageSize={30}
							onFinishRating={this.ratingCompleted}
							showRating
							style={{ paddingVertical: 10 }}
						/>
					</View>
					<View style={styles.headingContainer}>
					
						<Text style={styles.subtitleText}>CẢM ƠN CÁC BẠN ĐÃ ĐÁNH GIÁ!</Text>
						<Button
							linearGradientProps={{
								colors: ['#0099ff', '#14a6f9'],
								start: [1, 0],
								end: [0.2, 0],
							}}
							buttonStyle={styles.loginButton}
							containerStyle={{ alignItems: 'center',justifyContent: 'center',}}
							activeOpacity={0.8}
							title= 'THOÁT'
							onPress={this.handleBackButtonClick}
							titleStyle={styles.loginTextButton}
									
						/>

					</View>
				</ScrollView>
			</View>
		);
	}
}

Thoat.navigationOptions = {
	title: 'Ratings Component',
	header: null,
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
	},
	headingContainer: {
		paddingTop: 20,
	},
	titleText: {
		fontSize: 18,
		fontWeight: 'bold',
		textAlign: 'center',
		paddingVertical: 5,
		fontFamily: Platform.OS === 'ios' ? 'Menlo-Bold' : null,
		color: '#27ae60',
	},
	subtitleText: {
		fontSize: 14,
		fontWeight: '400',
		textAlign: 'center',
		fontFamily: Platform.OS === 'ios' ? 'Trebuchet MS' : null,
		color: '#34495e',
	},
	viewContainer: {
		flex: 1,
	},
	loginTextButton: {
		fontSize: 16,
		color: 'white',
		fontWeight: 'bold',
		textAlign:'center'
	},
	loginButton: {
		// backgroundColor: 'rgba(232, 147, 142, 1)',
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 10,
		height: 30,
		width: 100,
	},
});

export default Thoat;
