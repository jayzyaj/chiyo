/* eslint-disable react/jsx-wrap-multilines */
import React, { Component } from 'react';
import {
  ScrollView,
  Switch,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Avatar, ListItem } from 'react-native-elements';
import PropTypes from 'prop-types';
import { connect } from "react-redux";

import BaseIcon from "../../components/BaseIcon";
import Chevron from "../../components/Chevron";
import InfoText from "../../components/InfoText";
import CustomHeader from "../../components/layouts/CustomHeader";
import ModalLoader from "../../components/ModalLoader";

import { LOGOUT_REQUEST } from "../../config/constants/action-types/Authenticate";

const styles = StyleSheet.create({
  scroll: {
    backgroundColor: 'white',
  },
  userRow: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingBottom: 8,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 6,
  },
  userImage: {
    marginRight: 12,
  },
  listItemContainer: {
    height: 55,
    borderWidth: 0.5,
    borderColor: '#ECECEC',
  },
});

class Settings extends Component {
  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    return {
      header: (
        <CustomHeader
          title="Settings"
          navigation={navigation}
          onPressRight={params.handleLogout}
          rightName="Log out"
          leftIcon={{
            type: 'ionicon',
            name: 'md-list',
            size: 26,
          }}
        />
      ),
    }
  }

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    state: PropTypes.object.isRequired,
    navigation: PropTypes.object.isRequired,
  }

  constructor(props) {
    super(props)
    this.state = {
      pushNotifications: true,
    };
  }

  componentDidMount() {
    const { navigation } = this.props;
    navigation.setParams({
      handleLogout: this.handleLogoutRequest,
    });
  }

  // onPressOptions = () => {
  //   this.props.navigation.navigate('options')
  // }

  onChangePushNotifications = () => {
    this.setState({
      // eslint-disable-next-line react/destructuring-assignment
      pushNotifications: !this.state.pushNotifications,
    });
  }

  handleLogoutRequest = () => {
    const { dispatch } = this.props;
    dispatch({ type: LOGOUT_REQUEST });
  }

  render() {
    const { state } = this.props;
    const { username, email } = state.authSession;
    const { pushNotifications } = this.state;
    return (
      <ScrollView style={styles.scroll}>
        <View style={styles.userRow}>
          <View style={styles.userImage}>
            <Avatar
              rounded
              size="large"
              source={{
                uri: `https://bootdey.com/img/Content/avatar/avatar6.png`,
              }}
            />
          </View>
          <View>
            <Text style={{ fontSize: 16 }}>{username}</Text>
            <Text
              style={{
                color: 'gray',
                fontSize: 16,
              }}
            >
              {email}
            </Text>
          </View>
        </View>
        <InfoText text="Account" />
        <View>
          <ListItem
            hideChevron
            title="Push Notifications"
            containerStyle={styles.listItemContainer}
            rightElement={
              // eslint-disable-next-line react/jsx-wrap-multilines
              <Switch
                onValueChange={this.onChangePushNotifications}
                value={pushNotifications}
              />
            }
            leftIcon={
              // eslint-disable-next-line react/jsx-wrap-multilines
              <BaseIcon
                containerStyle={{
                  backgroundColor: '#FFADF2',
                }}
                icon={{
                  type: 'material',
                  name: 'notifications',
                }}
              />
            }
          />
          <ListItem
            // chevron
            title="Currency"
            rightTitle="USD"
            rightTitleStyle={{ fontSize: 15 }}
            // onPress={() => this.onPressOptions()}
            containerStyle={styles.listItemContainer}
            leftIcon={
              // eslint-disable-next-line react/jsx-wrap-multilines
              <BaseIcon
                containerStyle={{ backgroundColor: '#FAD291' }}
                icon={{
                  type: 'font-awesome',
                  name: 'money',
                }}
              />
            }
            rightIcon={<Chevron />}
          />
          <ListItem
            title="Location"
            rightTitle="New York"
            rightTitleStyle={{ fontSize: 15 }}
            // onPress={() => this.onPressOptions()}
            containerStyle={styles.listItemContainer}
            leftIcon={
              // eslint-disable-next-line react/jsx-wrap-multilines
              <BaseIcon
                containerStyle={{ backgroundColor: '#57DCE7' }}
                icon={{
                  type: 'material',
                  name: 'place',
                }}
              />
            }
            rightIcon={<Chevron />}
          />
          <ListItem
            title="Language"
            rightTitle="English"
            rightTitleStyle={{ fontSize: 15 }}
            // onPress={() => this.onPressOptions()}
            containerStyle={styles.listItemContainer}
            leftIcon={
              // eslint-disable-next-line react/jsx-wrap-multilines
              <BaseIcon
                containerStyle={{ backgroundColor: '#FEA8A1' }}
                icon={{
                  type: 'material',
                  name: 'language',
                }}
              />
            }
            rightIcon={<Chevron />}
          />
        </View>
        <InfoText text="More" />
        <View>
          <ListItem
            title="About US"
            // onPress={() => this.onPressOptions()}
            containerStyle={styles.listItemContainer}
            leftIcon={
              // eslint-disable-next-line react/jsx-wrap-multilines
              <BaseIcon
                containerStyle={{ backgroundColor: '#A4C8F0' }}
                icon={{
                  type: 'ionicon',
                  name: 'md-information-circle',
                }}
              />
            }
            rightIcon={<Chevron />}
          />
          <ListItem
            title="Terms and Policies"
            // onPress={() => this.onPressOptions()}
            containerStyle={styles.listItemContainer}
            leftIcon={
              <BaseIcon
                containerStyle={{ backgroundColor: '#C6C7C6' }}
                icon={{
                  type: 'entypo',
                  name: 'light-bulb',
                }}
              />
            }
            rightIcon={<Chevron />}
          />
          <ListItem
            title="Share our App"
            // onPress={() => this.onPressOptions()}
            containerStyle={styles.listItemContainer}
            leftIcon={
              <BaseIcon
                containerStyle={{
                  backgroundColor: '#C47EFF',
                }}
                icon={{
                  type: 'entypo',
                  name: 'share',
                }}
              />
            }
            rightIcon={<Chevron />}
          />
          <ListItem
            title="Rate Us"
            // onPress={() => this.onPressOptions()}
            containerStyle={styles.listItemContainer}
            badge={{
              value: 5,
              textStyle: { color: 'white' },
              containerStyle: { backgroundColor: 'gray', marginTop: 0 },
            }}
            leftIcon={
              <BaseIcon
                containerStyle={{
                  backgroundColor: '#FECE44',
                }}
                icon={{
                  type: 'entypo',
                  name: 'star',
                }}
              />
            }
            rightIcon={<Chevron />}
          />
          <ListItem
            title="Send FeedBack"
            // onPress={() => this.onPressOptions()}
            containerStyle={styles.listItemContainer}
            leftIcon={
              <BaseIcon
                containerStyle={{
                  backgroundColor: '#00C001',
                }}
                icon={{
                  type: 'materialicon',
                  name: 'feedback',
                }}
              />
            }
            rightIcon={<Chevron />}
          />
        </View>
        <ModalLoader text="Signing you out..." loading={state.clearingAuth} />
      </ScrollView>
    )
  }
}

export default connect(state => ({ state: state.authenticate }))(Settings);