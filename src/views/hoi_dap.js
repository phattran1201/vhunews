import { Container, Content, List, ListItem, Text } from 'native-base';
import React from 'react';
import { ListView } from 'react-native';
// import ThemCauHoi from '../screens/ThemCauHoi';

// var URL = 'http://itcvhu.me/PortalVHU/CommentHoiDap.php';
var URL_API = 'http://itcvhu.me/PortalVHU/HoiDap.php';

export default class HoiDap extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			dataSource: new ListView.DataSource({
				rowHasChanged: (r1, r2) => r1 !== r2,
			}),
		};
	}
	fetchData() {
		return fetch(URL_API, { method: 'POST', body: null })
			.then(response => response.json())
			.then(responseData => {
				this.setState({
					dataSource: this.state.dataSource.cloneWithRows(responseData),
				});
			})
			.done();
	}
	componentDidMount() {
		this.fetchData();
	}
	taoHang(property) {
		return (
			<List icon>
				<ListItem
					onPress={() =>
						this.pushView(property.hoidapId, property.hoidapContent)
					}
				>
					<Text>{property.hoidapContent}</Text>
				</ListItem>
			</List>
		);
	}
	pushView(id, content) {
		this.props.navigation.navigate('CommentHoiDap', {
			hoidapId: id,
			hoidapContent: content,
		});
	}
	

	render() {
		return (
			<Container>			
				<Content>
					<ListView
						dataSource={this.state.dataSource}
						renderRow={this.taoHang.bind(this)}
					/>
				</Content>
			</Container>
		);
	}
}
