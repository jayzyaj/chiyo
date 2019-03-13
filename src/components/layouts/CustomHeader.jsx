import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import { Icon } from 'react-native-elements';
import PropTypes from 'prop-types';

import COLOR from "../../config/constants/themes/Colors";

const styles = StyleSheet.create({
  centerRow: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  container: {
    flexDirection: 'row',
    height: 55,
    justifyContent: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
  icon: {
    justifyContent: 'flex-start',
    marginTop: 2.8,
  },
  iconContainer: {
    alignSelf: 'center',
  },
  leftRow: {
    backgroundColor: 'transparent',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  logoutText: {
    color: COLOR.blue,
    fontSize: 18,
    fontWeight: '400',
  },
  rightRow: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  titleText: {
    color: 'black',
    fontSize: 18,
    fontWeight: '400',
  },
});

// eslint-disable-next-line object-curly-newline
const CustomHeader = ({ title, navigation, leftIcon, onPressRight, rightName }) => (
  <View style={{ backgroundColor: 'white' }}>
    <View style={styles.container}>
      <View style={styles.leftRow}>
        {/* <Icon
                    size={34}
                    type="ionicon"
                    name="ios-arrow-back"
                    underlayColor="transparent"
                    underlineColorAndroid="transparent"
                    hitSlop={{ top: 15, bottom: 15, left: 15, right: 15 }}
                    color={COLOR.blue}
                    iconStyle={styles.icon}
                    containerStyle={styles.iconContainer}
                    onPress={() => navigation.goBack(null)}
                    {...leftIcon}
                /> */}
      </View>
      <View style={styles.centerRow}>
        <Text style={styles.titleText} numberOfLines={1}>
          {title}
        </Text>
      </View>
      <TouchableOpacity
        style={styles.rightRow}
        backgroundColor="transparent"
        onPress={() => onPressRight()}
      >
        <Text style={styles.logoutText}>{rightName}</Text>
      </TouchableOpacity>
    </View>
  </View>
);

CustomHeader.propTypes = {
  title: PropTypes.string.isRequired,
  navigation: PropTypes.object.isRequired,
  leftIcon: PropTypes.object,
  rightName: PropTypes.string,
  onPressRight: PropTypes.func,
};

CustomHeader.defaultProps = {
  leftIcon: {},
  rightName: "",
  onPressRight: null,
};

export default CustomHeader;
