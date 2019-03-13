/* @ */

import React, { Component } from "react";
import {
  Platform,
  TouchableOpacity,
  Text,
  TouchableNativeFeedback,
  View,
} from "react-native";
import Proptypes from "prop-types";

import COLOR from "../config/constants/themes/Colors";

class CustomButton extends Component {
  render() {
    const { onPress, title } = this.props;
    if (Platform.OS === "android") {
      return ( // Android
        <TouchableNativeFeedback onPress={() => onPress()}>
          <View
            style={{
              backgroundColor: COLOR.PANTOME,
              height: 40,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: COLOR.LIGHT,
                fontWeight: "bold",
                fontSize: 16,
              }}
            >
              {title}
            </Text>
          </View>
        </TouchableNativeFeedback>
      );
    }
    return ( // IOS
      <TouchableOpacity
        style={{
          backgroundColor: COLOR.PANTOME,
          alignSelf: "stretch",
          height: 40,
          justifyContent: "center",
          alignItems: "center",
        }}
        onPress={() => onPress()}
      >
        <Text
          style={{
            color: COLOR.LIGHT,
            fontWeight: "bold",
            fontSize: 16,
          }}
        >
          {title}
        </Text>
      </TouchableOpacity>
    );
  }
}

CustomButton.propTypes = {
  title: Proptypes.string.isRequired,
  onPress: Proptypes.func.isRequired,
};

export default CustomButton;
