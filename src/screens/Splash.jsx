import React, { Component } from "react";
import { View, Text, StatusBar } from "react-native";

import PropTypes from 'prop-types';

import { connect } from "react-redux";

import COLOR from "../config/constants/themes/Colors";
import GlobalStyles from "../config/constants/themes/GlobalStyles";

import { RESTORE_REQUEST } from "../config/constants/action-types/Authenticate";

class Splash extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
    state: PropTypes.object.isRequired,
  }

  componentDidMount() {
    const { navigation, dispatch } = this.props;
    dispatch({ type: RESTORE_REQUEST });
    setTimeout(() => {
      const { state } = this.props;
      state.isAuth
        ? navigation.navigate('Main')
        : navigation.navigate('Login');
    }, 2000);
  }

  render() {
    return (
      <View
        style={[
          GlobalStyles.container,
          { justifyContent: "center", alignItems: "center", backgroundColor: COLOR.DARK },
        ]}
      >
        <StatusBar backgroundColor={COLOR.PURPLE} barStyle="light-content" />
        <Text style={{ color: COLOR.PURPLE, fontSize: 36, fontWeight: "bold" }}>
          Chiyo
        </Text>
      </View>
    );
  }
}

export default connect(state => ({ state: state.authenticate }))(Splash);
