import { AsyncStorage } from "react-native";
import {
  call,
  put,
  takeLatest,
  delay,
} from 'redux-saga/effects';

import DATA_SESSION from "../config/constants/Sessions";

import NavigationService from '../config/routes/NavigationService';

import * as authActionTypes from "../config/constants/action-types/Authenticate";

function* loginUser(action) {
  yield delay(500);
  try {
    if (action.payload.email.trim() === "test123@nomail.com" && action.payload.password === "123456") {
      const session = { token: "abc1234", email: action.payload.email, username: "test123" }; // Create a fake token for authentication
      yield call(AsyncStorage.setItem, DATA_SESSION, JSON.stringify(session)); // Stringinfy the session data and store it
      yield put({ type: authActionTypes.LOGIN_SUCCESS, data: { session } });
      // yield put(NavigationActions.navigate({ routeName: '' }));
      NavigationService.navigate('Main');
    } else {
      yield put({ type: authActionTypes.LOGIN_FAILED, data: { error: "Incorrect email or password" } });
    }
  } catch (error) {
    console.log('Oops:', error);
    yield put({ type: authActionTypes.LOGIN_FAILED, data: { error: "Something went wrong" } });
  }
}

function* logoutUser() {
  try {
    yield delay(1500);
    yield AsyncStorage.removeItem(DATA_SESSION); // Remove the session data and unauthenticate the user
    NavigationService.navigate('Login');
    yield put({ type: authActionTypes.LOGOUT_SUCCESS });
    // yield put(NavigationActions.navigate({ routeName: 'UnauthenticatedScreens' }));
  } catch (error) {
    console.log('Oops:', error);
    yield put({ type: authActionTypes.LOGOUT_FAILED, data: { error: "Something went wrong" } });
  }
}

function* restoreSession() {
  try {
    const session = yield call(AsyncStorage.getItem, DATA_SESSION); // Get the data session in the current device
    const data = JSON.parse(session);
    if (session != null) {
      yield put({ type: authActionTypes.LOGIN_SUCCESS, data: { session: data } });
    } else {
      yield put({ type: authActionTypes.RESTORE_FAILED });
    }
  } catch (error) {
    console.log('Oops:', error);
    yield put({ type: authActionTypes.RESTORE_FAILED });
  }
}

const authSaga = [
  takeLatest(authActionTypes.LOGIN_REQUEST, loginUser),
  takeLatest(authActionTypes.LOGOUT_REQUEST, logoutUser),
  takeLatest(authActionTypes.RESTORE_REQUEST, restoreSession),
];

export default authSaga;
