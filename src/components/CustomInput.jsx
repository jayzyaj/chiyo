import React from "react";
import Proptypes from "prop-types";
import { View, TextInput } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import COLOR from "../config/constants/themes/Colors";

// eslint-disable-next-line object-curly-newline
const CustomInput = ({ icon, value, placeholder, secureTextEntry, onChangeText }) => (
  <View
    style={{
      backgroundColor: COLOR.LIGHT_GRAY,
      alignItems: "center",
      height: 40,
      flexDirection: "row",
    }}
  >
    <View
      style={{
        height: 32,
        width: 32,
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 8,
        borderWidth: 1,
        borderRadius: 16,
        borderColor: COLOR.PANTOME,
      }}
    >
      <Icon name={icon} size={24} color={COLOR.PANTOME} />
    </View>
    <TextInput
      style={{
        color: COLOR.BLACK,
        height: 40,
        marginHorizontal: 8,
        flex: 1,
      }}
      placeholderTextColor={COLOR.GRAY}
      value={value}
      placeholder={placeholder || ""}
      secureTextEntry={secureTextEntry}
      underlineColorAndroid="transparent"
      onChangeText={v => onChangeText(v)}
    />
  </View>
);

CustomInput.propTypes = {
  icon: Proptypes.string.isRequired,
  placeholder: Proptypes.string.isRequired,
  value: Proptypes.string.isRequired,
  onChangeText: Proptypes.func.isRequired,
  secureTextEntry: Proptypes.bool,
};

CustomInput.defaultProps = {
  secureTextEntry: false,
};

export default CustomInput;
