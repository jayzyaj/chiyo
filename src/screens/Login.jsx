import React, { Component } from "react";

import {
  View,
  Text,
  StatusBar,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { Card } from 'react-native-elements';

import { connect } from "react-redux";
import PropTypes from 'prop-types';

import CustomButton from "../components/CustomButton";
import CustomInput from "../components/CustomInput";
import ModalLoader from "../components/ModalLoader";

import GlobalStyles from "../config/constants/themes/GlobalStyles";
import COLOR from "../config/constants/themes/Colors";

import { LOGIN_REQUEST } from '../config/constants/action-types/Authenticate';

class Login extends Component {
  static navigationOptions = () => ({
    title: "Sign in",
    headerTintColor: COLOR.LIGHT,
    headerStyle: {
      borderBottomWidth: 0,
      backgroundColor: COLOR.PURPLE,
    },
  }); // navigationOptions

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    state: PropTypes.object.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleLoginRequest = () => {
    const { dispatch } = this.props;
    const { email, password } = this.state;
    dispatch({
      type: LOGIN_REQUEST,
      payload: {
        email,
        password,
      },
    });
  }

  // eslint-disable-next-line class-methods-use-this
  renderError(error) {
    if (error) {
      return (
        <View
          style={{
            height: 40,
            padding: 8,
            borderWidth: 1,
            borderColor: '#ffffff',
            backgroundColor: COLOR.DANGER,
          }}
        >
          <Text style={{ color: '#ffffff' }}>{error}</Text>
        </View>
      );
    }
    return null;
  }

  render() {
    const { email, password } = this.state;
    // eslint-disable-next-line react/destructuring-assignment
    const { authError, requestingAuth } = this.props.state;
    return (
      <View style={GlobalStyles.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <View>
            <StatusBar
              backgroundColor={COLOR.DARK}
              barStyle="light-content"
            />
            <Card>
              {this.renderError(authError)}

              <View style={{ height: 8 }} />

              <CustomInput
                icon="envelope"
                value={email}
                placeholder="Email"
                onChangeText={v => this.setState({ email: v })}
              />
              <View style={{ height: 8 }} />
              <CustomInput
                icon="lock"
                value={password}
                placeholder="Password"
                // eslint-disable-next-line react/jsx-boolean-value
                secureTextEntry={true}
                onChangeText={v => this.setState({ password: v })}
              />
              <View style={{ height: 16 }} />
              <CustomButton
                onPress={this.handleLoginRequest}
                title="SIGN IN"
              />
            </Card>
          </View>
        </TouchableWithoutFeedback>
        <ModalLoader loading={requestingAuth} />
      </View>
    );
  }
}

export default connect(state => ({ state: state.authenticate }))(Login);
