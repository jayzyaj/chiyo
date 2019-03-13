import React, { Component } from 'react';

// redux imports
import { createStore, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";
import createSagaMiddleware from 'redux-saga';
import logger from "redux-logger";

import * as reducers from "./reducers";
import rootSaga from './sagas';

import NavigationService from "./config/routes/NavigationService";
import AppContainer from "./config/routes/Router";

const sagaMiddleware = createSagaMiddleware();
const createStoreWithMiddleware = applyMiddleware(sagaMiddleware, logger)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);

sagaMiddleware.run(rootSaga);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer
          ref={navigatorRef => NavigationService.setTopLevelNavigator(navigatorRef)}
        />
      </Provider>
    );
  }
}

export default App;
