import React, { Component } from "react";
import NavigationService from "../config/routes/NavigationService";

import AppContainer from "../config/routes/Router";

class AppTopLevelContainer extends Component {
  render() {
    return (
      <AppContainer
        ref={navigatorRef => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }}
      />
    );
  }
}

export default AppTopLevelContainer;
