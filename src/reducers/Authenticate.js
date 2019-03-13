import * as types from "../config/constants/action-types/Authenticate";

const initialState = {
  isAuth: false,
  requestingAuth: false,
  clearingAuth: false,
  authSession: null,
  authError: "",
  requestingRestore: true,
  logoutError: "",
};

export default function authenticate(state = initialState, action = {}) {
  switch (action.type) {
    case types.LOGIN_REQUEST:
      return {
        ...state,
        requestingAuth: true,
        authError: "",
      };
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        isAuth: true,
        authSession: action.data.session,
        requestingRestore: false,
        requestingAuth: false,
      };
    case types.LOGIN_FAILED:
      return {
        ...state,
        requestingAuth: false,
        authError: action.data.error,
      };
    case types.LOGOUT_REQUEST:
      return {
        ...state,
        clearingAuth: true,
        authError: "",
      };
    case types.LOGOUT_SUCCESS:
      return {
        ...state,
        isAuth: false,
        clearingAuth: false,
        authSession: null,
        authError: "",
      };
    case types.LOGOUT_FAILED:
      return {
        ...state,
        clearingAuth: false,
        authError: action.data.error,
      };
    case types.RESTORE_REQUEST:
      return {
        ...state,
        requestingRestore: true,
      };
    case types.RESTORE_FAILED:
      return {
        ...state,
        requestingRestore: false,
      };
    default:
      return state;
  }
}
