/* eslint-disable react/prop-types */
import React from 'react'
import {
  createSwitchNavigator,
  createAppContainer,
  createBottomTabNavigator,
  createStackNavigator,
} from 'react-navigation';

import Icon from "react-native-vector-icons/Ionicons";
import COLOR from "../constants/themes/Colors";

import Splash from "../../screens/Splash";
import Login from "../../screens/Login";

// Tabs
import Home from "../../screens/tabs/Home";
import Settings from "../../screens/tabs/Settings";

const ICON_SIZE = 20;

const LoginScreen = createStackNavigator(
  { // Screens
    Login: { screen: Login },
  },
);

const HomeScreen = createStackNavigator(
  { // Screens
    Home: {
      screen: Home,
    },
  }, { // Default options
  },
);

const SettingsScreen = createStackNavigator(
  { // Screens
    Settings: {
      screen: Settings,
    },
  }, { // Default options
  },
);

const AppTabNavigator = createBottomTabNavigator(
  { // Screens
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-home" color={tintColor} size={ICON_SIZE} />
        ),
      },
    },
    Settings: {
      screen: SettingsScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-more" color={tintColor} size={ICON_SIZE} />
        ),
      },
    },
  }, { // Default options
    initialRouteName: 'Home',
    tabBarOptions: {
      showLabel: false,
      activeTintColor: COLOR.PURPLE,
    },
  },
);

const AppSwitchNavigator = createSwitchNavigator(
  { // Screens
    Splash: { screen: Splash },
    Login: { screen: LoginScreen },
    Main: { screen: AppTabNavigator },
  }, { // Default options
    initialRouteName: 'Splash',
  },
);

const AppContainer = createAppContainer(AppSwitchNavigator);

export default AppContainer;
