import { Font } from 'expo';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Dimensions, ImageBackground, KeyboardAvoidingView, LayoutAnimation, StyleSheet, Text, UIManager, View,Linking,Alert } from 'react-native';
import { Button, Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import SimpleIcon from 'react-native-vector-icons/SimpleLineIcons';
import { firebaseApp } from './firebaseConfig';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const BG_IMAGE = require('../../assets/images/bg_screen4.jpg');

// Enable LayoutAnimation on Android
UIManager.setLayoutAnimationEnabledExperimental &&
	UIManager.setLayoutAnimationEnabledExperimental(true);

const TabSelector = ({ selected }) => {
	return (
		<View style={styles.selectorContainer}>
			<View style={selected && styles.selected} />
		</View>
	);
};

TabSelector.propTypes = {
	selected: PropTypes.bool.isRequired,
};

export default class LoginScreen extends React.Component {
	static navigationOptions = {
		drawerLabel: () => null,
	};
	constructor(props) {
		super(props);
		this.unsubscriber = null;
		this.state = {
			user: null,
			email: '',
			password: '',
			fontLoaded: false,
			selectedCategory: 0,
			isLoading: false,
			isEmailValid: true,
			isPasswordValid: true,
			isConfirmationValid: true,
			showToast: false
		};

		this.selectCategory = this.selectCategory.bind(this);
		this.login = this.login.bind(this);
		this.signUp = this.signUp.bind(this);
	}

	async componentDidMount() {
		await Font.loadAsync({
			georgia: require('../../assets/fonts/Georgia.ttf'),
			regular: require('../../assets/fonts/Montserrat-Regular.ttf'),
			light: require('../../assets/fonts/Montserrat-Light.ttf'),
		});
		this.setState({ fontLoaded: true });
		this.unsubscriber = firebaseApp.auth().onAuthStateChanged(changedUser => {
			// console.log(`changed User : ${JSON.stringify(changedUser.toJSON())}`);
			this.setState({ user: changedUser });
			if (changedUser != null) {			
				setTimeout(() => {
					this.props.navigation.navigate('VhuNewsTab'),
					LayoutAnimation.easeInEaseOut(),
					this.setState({
						isLoading: false,
					});
				}, 1500);
			}else{
				console.log('Đăng nhập thất bại');
			}
		});
	}
	componentWillUnmount() {
		if (this.unsubscriber) {
			this.unsubscriber();
		}
	}

	selectCategory(selectedCategory) {
		LayoutAnimation.easeInEaseOut();
		this.setState({
			selectedCategory,
			isLoading: false,
		});
	}

	validateEmail(email) {
		var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

		return re.test(email);
	}

	login() {
		const { email, password } = this.state;
		this.setState({ isLoading: true });
		// Simulate an API call
		firebaseApp
			.auth()
			.signInWithEmailAndPassword(this.state.email, this.state.password)
			.then(() => {
				setTimeout(() => {
					this.props.navigation.navigate('VhuNewsTab'),
					LayoutAnimation.easeInEaseOut(),
					this.setState({
						isLoading: false,
						isEmailValid:
								this.validateEmail(email) || this.emailInput.shake(),
						isPasswordValid:
								password.length >= 6 || this.passwordInput.shake(),
					});
				}, 1500);
			})
			.catch(() => {

				setTimeout(() => {
					LayoutAnimation.easeInEaseOut(),
					this.setState({
						isLoading: false,
						isEmailValid: this.validateEmail(email) || this.emailInput.shake(),
						isPasswordValid: password.length >= 6 || this.passwordInput.shake(),
					});
				}, 1500);
				Alert.alert(
					'Cảnh báo',
					'Email hoặc tài khoản không đúng',
					[
						// {
						// 	text: 'Đã đăng ký',
						// 	onPress: () => Actions.pop(),
						// },
						{ text: 'Đăng ký', onPress: () => this.selectCategory(1) },
						{
							text: 'OK',
							// onPress: () => Actions.pop(),
							style: 'cancel',
						},
						
					],
					{ cancelable: false }
				);
			});
	}

	signUp() {
		const { email, password, passwordConfirmation } = this.state;
		this.setState({ isLoading: true });
		// Simulate an API call
		if (password == passwordConfirmation ) {
			
			firebaseApp
				.auth()
				.createUserWithEmailAndPassword(this.state.email, this.state.password)
				.then(() => {
					// this.itemRef.child(firebaseApp.auth().currentUser.uid).set({
					// 	email: this.state.email,
					// // password: this.state.password,
					// });
					this.selectCategory(0);
					
				})
				.catch(()=> {
					Alert.alert(
						'Cảnh báo',
						'Email đã tồn tại',
						[
							// {
							// 	text: 'Đã đăng ký',
							// 	onPress: () => Actions.pop(),
							// },
							// { text: 'OK', onPress: () => Actions.refresh() },
							{
								text: 'OK',
								// onPress: () => Actions.pop(),
								style: 'cancel',
							},
							
						],
						{ cancelable: false }
					);
				});
			setTimeout(() => {
				// this.selectCategory(0);
				LayoutAnimation.easeInEaseOut();
				this.setState({
					isLoading: false,
					isEmailValid:this.validateEmail(email) || this.emailInput.shake(),
					isPasswordValid:password.length >= 6 || this.passwordInput.shake(),
					isConfirmationValid:password == passwordConfirmation || this.confirmationInput.shake(),
				});
			}, 1500);
			
			// .catch(() => {
			// 	setTimeout(() => {
			// 		LayoutAnimation.easeInEaseOut(),
			// 		this.setState({
			// 			isLoading: false,
			// 			isEmailValid: this.validateEmail(email) || this.emailInput.shake(),
			// 			isPasswordValid: password.length >= 6 || this.passwordInput.shake(),
			// 			isConfirmationValid: password == passwordConfirmation || this.confirmationInput.shake(),
			// 		});
			// 	}, 1500);
			// });
		}else{
			setTimeout(() => {
				LayoutAnimation.easeInEaseOut();
				this.setState({
					isLoading: false,
					isEmailValid:this.validateEmail(email) || this.emailInput.shake(),
					isPasswordValid:password.length >= 6 || this.passwordInput.shake(),
					isConfirmationValid:password == passwordConfirmation || this.confirmationInput.shake(),
				});
			}, 1500);
		}
		
	}

	render() {
		const {
			selectedCategory,
			isLoading,
			isEmailValid,
			isPasswordValid,
			isConfirmationValid,
			email,
			password,
			passwordConfirmation,
		} = this.state;
		const isLoginPage = selectedCategory === 0;
		const isSignUpPage = selectedCategory === 1;
		return (
			<View style={styles.container}>
				<ImageBackground
					source={BG_IMAGE}
					style={styles.bgImage}
					blurRadius={1}
				>
					{this.state.fontLoaded ? (
						<View>
							<KeyboardAvoidingView
								contentContainerStyle={styles.loginContainer}
								behavior="position"
							>
								<View style={styles.titleContainer}>
									<View style={{ flexDirection: 'row' }}>
										<Text style={styles.titleText}>ĐẠI HỌC</Text>
									</View>
									<View style={{  marginLeft: 30 }}>
										<Text style={styles.titleText}>VĂN HIẾN</Text>
									</View>
								</View>
								<View style={{ flexDirection: 'row' }}>
									<Button
										disabled={isLoading}
										clear
										activeOpacity={0.7}
										onPress={() => this.selectCategory(0)}
										containerStyle={{ flex: 1 }}
										titleStyle={[
											styles.categoryText,
											isLoginPage && styles.selectedCategoryText,
										]}
										title={'Đăng Nhập'}
									/>
									<Button
										disabled={isLoading}
										clear
										activeOpacity={0.7}
										onPress={() => this.selectCategory(1)}
										containerStyle={{ flex: 1 }}
										titleStyle={[
											styles.categoryText,
											isSignUpPage && styles.selectedCategoryText,
										]}
										title={'Đăng Ký'}
									/>
								</View>
								<View style={styles.rowSelector}>
									<TabSelector selected={isLoginPage} />
									<TabSelector selected={isSignUpPage} />
								</View>
								<View style={styles.formContainer}>
									<Input
										leftIcon={
											<Icon
												name="envelope-o"
												color="rgba(0, 0, 0, 0.38)"
												size={25}
												style={{ backgroundColor: 'transparent' }}
											/>
										}
										value={email}
										keyboardAppearance="light"
										autoFocus={false}
										autoCapitalize="none"
										autoCorrect={false}
										keyboardType="email-address"
										returnKeyType="next"
										inputStyle={{ marginLeft: 10 }}
										placeholder={'Email'}
										containerStyle={{
											borderBottomColor: 'rgba(0, 0, 0, 0.38)',
										}}
										ref={input => (this.emailInput = input)}
										onSubmitEditing={() => this.passwordInput.focus()}
										onChangeText={email => this.setState({ email })}
										errorMessage={
											isEmailValid ? null : 'Địa chỉ email không hợp lệ'
										}
									/>
									<Input
										leftIcon={
											<SimpleIcon
												name="lock"
												color="rgba(0, 0, 0, 0.38)"
												size={25}
												style={{ backgroundColor: 'transparent' }}
											/>
										}
										value={password}
										keyboardAppearance="light"
										autoCapitalize="none"
										autoCorrect={false}
										secureTextEntry={true}
										returnKeyType={isSignUpPage ? 'next' : 'done'}
										blurOnSubmit={true}
										containerStyle={{
											marginTop: 16,
											borderBottomColor: 'rgba(0, 0, 0, 0.38)',
										}}
										inputStyle={{ marginLeft: 10 }}
										placeholder={'Mật khẩu'}
										ref={input => (this.passwordInput = input)}
										onSubmitEditing={() =>
											isSignUpPage
												? this.confirmationInput.focus()
												: this.login()
										}
										onChangeText={password => this.setState({ password })}
										errorMessage={
											isPasswordValid ? null : 'Mật khẩu yêu cầu 6 kí tự'
										}
									/>
									{isSignUpPage && (
										<Input
											leftIcon={
												<SimpleIcon
													name="lock"
													color="rgba(0, 0, 0, 0.38)"
													size={25}
													style={{ backgroundColor: 'transparent' }}
												/>
											}
											value={passwordConfirmation}
											secureTextEntry={true}
											keyboardAppearance="light"
											autoCapitalize="none"
											autoCorrect={false}
											keyboardType="default"
											returnKeyType={'done'}
											blurOnSubmit={true}
											containerStyle={{
												marginTop: 16,
												borderBottomColor: 'rgba(0, 0, 0, 0.38)',
											}}
											inputStyle={{ marginLeft: 10 }}
											placeholder={'Xác nhận mật khẩu'}
											ref={input => (this.confirmationInput = input)}
											onSubmitEditing={this.signUp}
											onChangeText={passwordConfirmation =>
												this.setState({ passwordConfirmation })
											}
											errorMessage={
												isConfirmationValid
													? null
													: 'Mật khẩu xác nhận không trùng khớp'
											}
										/>
									)}
									<Button
										linearGradientProps={{
											colors: ['#0099ff', '#14a6f9'],
											start: [1, 0],
											end: [0.2, 0],
										}}
										buttonStyle={styles.loginButton}
										containerStyle={{ marginTop: 32, flex: 0 }}
										activeOpacity={0.8}
										title={isLoginPage ? 'ĐĂNG NHẬP' : 'ĐĂNG KÝ'}
										onPress={isLoginPage ? this.login : this.signUp}
										titleStyle={styles.loginTextButton}
										loading={isLoading}
										disabled={isLoading}
									/>
								</View>
							</KeyboardAvoidingView>
							<View style={styles.helpContainer}>
								<Button
									title={'Trợ giúp ?'}
									clear
									titleStyle={{ color: 'white' }}
									buttonStyle={{ backgroundColor: 'transparent' }}
									underlayColor="transparent"
									onPress={() =>
										Linking.openURL(
											'https://www.messenger.com/t/thanh.phat.97'
										)
									}
								/>
							</View>
						</View>
					) : (
						<View style={styles.titleContainer}>
							<View style={{ flexDirection: 'row' }}>
								<Text style={styles.titleText}>ĐẠI HỌC</Text>
							</View>
							<View style={{ marginTop: -10, marginLeft: 20 }}>
								<Text style={styles.titleText}>VĂN HIẾN</Text>
							</View>
						</View>
					)}
				</ImageBackground>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	rowSelector: {
		height: 20,
		flexDirection: 'row',
		alignItems: 'center',
	},
	selectorContainer: {
		flex: 1,
		alignItems: 'center',
	},
	selected: {
		position: 'absolute',
		borderRadius: 50,
		height: 0,
		width: 0,
		top: -5,
		borderRightWidth: 70,
		borderBottomWidth: 70,
		borderColor: 'white',
		backgroundColor: 'white',
	},
	loginContainer: {
		alignItems: 'center',
		justifyContent: 'center',
	},
	loginTextButton: {
		fontSize: 16,
		color: 'white',
		fontWeight: 'bold',
	},
	loginButton: {
		// backgroundColor: 'rgba(232, 147, 142, 1)',

		borderRadius: 10,
		height: 50,
		width: 200,
	},
	titleContainer: {
		height: 150,
		backgroundColor: 'transparent',
		justifyContent: 'center',
	},
	formContainer: {
		backgroundColor: 'white',
		width: SCREEN_WIDTH - 30,
		borderRadius: 10,
		paddingTop: 32,
		paddingBottom: 32,
		alignItems: 'center',
	},
	loginText: {
		fontSize: 16,
		fontWeight: 'bold',
		color: 'white',
	},
	bgImage: {
		flex: 1,
		top: 0,
		left: 0,
		width: SCREEN_WIDTH,
		height: SCREEN_HEIGHT,
		justifyContent: 'center',
		alignItems: 'center',
	},
	categoryText: {
		textAlign: 'center',
		color: 'white',
		fontSize: 24,
		fontFamily: 'light',
		backgroundColor: 'transparent',
		opacity: 0.54,
	},
	selectedCategoryText: {
		opacity: 1,
	},
	titleText: {
		color: 'white',
		fontSize: 30,
		fontWeight: 'bold',
	},
	helpContainer: {
		height: 64,
		alignItems: 'center',
		justifyContent: 'center',
	},
});

// import React, { Component } from 'react';
// import { StyleSheet, View, ScrollView } from 'react-native';

// // :fire: this is v good, @xavier-villelegier
// import LoginScreen3 from './login/screen3';

// // @monte9
// // import LoginScreen1 from './login/screen1';

// // // TODO
// // import LoginScreen2 from './login/screen2';
// // import LoginScreen4 from './login/screen4';

// export default class Login extends Component {
// 	render() {
// 		return (
// 			<View style={styles.container}>
// 				<ScrollView horizontal pagingEnabled decelerationRate={0.993}>
// 					<LoginScreen3 />
// 					{/* <LoginScreen1 /> */}
// 					{/* <LoginScreen2 />
//           <LoginScreen4 /> */}
// 				</ScrollView>
// 			</View>
// 		);
// 	}
// }

// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 		backgroundColor: 'black',
// 	},
// });
