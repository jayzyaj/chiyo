import {
  createSwitchNavigator,
  createAppContainer,
  // createBottomTabNavigator,
  // createStackNavigator
} from 'react-navigation';

import Splash from "../../screens/Splash";

const AppSwitchNavigator = createSwitchNavigator(
  { // Screens
    Splash: { screen: Splash },
    // Login: { screen: LoginScreen },
    // Main: { screen: AppTabNavigator }
  }, { // Default options
    initialRouteName: 'Splash',
  },
);

const AppContainer = createAppContainer(AppSwitchNavigator);

export default AppContainer;
