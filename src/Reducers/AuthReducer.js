import ActionTypes from '../Actions/ActionTypes';

const {
  LOGIN_REQUST,
  LOGIN_REQUEST_SUCCESS,
  LOGIN_REQUST_ERROR,
  RESET,
} = ActionTypes;

const initialState = {
  loading: false,
  isLoggedIn: false,
  loginError: '',
};

const authReducer = (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case LOGIN_REQUST:
      return {
        ...state,
        loading: true,
        isLoggedIn: false,
        loginError: '',
      };
    case LOGIN_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        isLoggedIn: true,
        loginError: '',
      };
    case LOGIN_REQUST_ERROR:
      return {
        ...state,
        loading: false,
        isLoggedIn: false,
        loginError: payload,
      };
    case RESET:
      return {
        ...state,
        loading: false,
        isLoggedIn: false,
        loginError: '',
      };
    default:
      return state;
  }
};

export default authReducer;
