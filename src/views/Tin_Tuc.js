import {
  Body,
  Button,
  Card,
  CardItem,
  Container,
  Icon,
  Left,
  Right,
} from 'native-base';
import React, { Component } from 'react';
import {
  FlatList,
  Image,
  Linking,
  Platform,
  ScrollView,
  Text,
  focused,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
// import TinTuc from './Tin_Tuc';
const DEVICE_WIDTH = Dimensions.get('window').width;

export default class TinTuc extends Component {
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
    return fetch('http://itcvhu.me/PortalVHU/getTinNoiBat.php')
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
    const url = 'http://itcvhu.me/PortalVHU/getTinNoiBat.php';
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
    // const { navigate } = this.props.navigation;
    return (
      <Container style={{ backgroundColor: '#fff'}}>
        <ScrollView>
          <FlatList 
            horizontal
            pagingEnabled
            decelerationRate={1}
            data={this.state.mang}
            renderItem={({ item }) => (
              <View width={DEVICE_WIDTH} >
                <TouchableOpacity
                  style={{
                    borderBottomWidth: 0.2,
                    borderBottomColor: '#E0E0E0',
                  }}
                  onPress={() =>
												Linking.openURL(
												
														item.LINK
												)
											}
                >
                  <View
                    style={{
                      flex: 1,
                      backgroundColor: '#fff',
                    }}
                  >
                    <View
                      style={{
                        position: 'absolute',
                        margin: 5,
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                      }}
                    >
                      <Image
                        source={{ uri: item.URL }}
                        style={{ height: 200, width: null, flex: 1 }}
                      />
                    </View>
                    <View
                      style={{
                        backgroundColor: 'rgba(0, 0, 0, 0.05)',
                        flex: 1,
                        height: 200,
                        justifyContent: 'flex-end',
                      }}
                    >
                      <Text
                        style={{
                          textShadowColor: 'rgba(0, 0, 0, 0.75)',
                          textShadowOffset: { width: -1, height: 1 },
                          textShadowRadius: 10,
                          fontSize: 17,
                          fontWeight: 'bold',
                          color: '#fff',
                          margin: 15,
                        }}
                      >
                        {item.TIEUDE}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            )}
            refreshing={this.state.refreshing}
            onRefresh={this.handleRefresh}
          />
        </ScrollView>		
      </Container>
    );
  }
}

 
