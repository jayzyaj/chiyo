/* eslint-disable no-undef */
/* eslint-disable no-alert */
import React, { Component } from 'react'
import { Button, View } from 'react-native'

class Home extends Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        {/* <Button
                    title="Login"
                    onPress={() => this.props.navigation.navigate('Dashboard')}
                /> */}
        <Button title="Hello" onPress={() => alert('button pressed')} />
      </View>
    );
  }
}

export default Home;
