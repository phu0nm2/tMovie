import { actionUsers } from "../actions/type";

const initialState = {
  currentUser: null,
  loading: false,
  error: null,
  isLogin: false,
};

const reducers = (state = initialState, { type, payload }) => {
  switch (type) {
    // setUSer
    case actionUsers.SET_USER:
      state.loading = false;
      state.currentUser = payload;
      return { ...state };

    // sign in
    case actionUsers.SIGN_IN_REQUEST:
      state.loading = true;
      return { ...state };
    case actionUsers.SIGN_IN_SUCCESS:
      state.currentUser = payload;
      state.isLogin = true;
      state.loading = false;
      state.error = null;
      return { ...state };
    case actionUsers.SIGN_IN_FAILURE:
      state.loading = false;
      state.error = payload;
      return { ...state };

    // sign up
    case actionUsers.SIGN_UP_REQUEST:
      state.loading = true;
      return { ...state };
    case actionUsers.SIGN_UP_SUCCESS:
      state.currentUser = payload;
      state.loading = false;
      state.error = null;
      return { ...state };

    case actionUsers.SIGN_UP_FAILURE:
      state.loading = false;
      state.error = payload;
      return { ...state };

    // sign in with google
    case actionUsers.SIGN_IN_WITH_GOOGLE:
      state.currentUser = payload;
      return { ...state };

    // log out
    case actionUsers.LOGOUT_REQUEST:
      state.loading = true;
      return { ...state };
    case actionUsers.LOGOUT_SUCCESS:
      state.currentUser = null;
      state.isLogin = false;
      state.loading = false;
      state.error = null;
      return { ...state };
    case actionUsers.LOGOUT_FAILURE:
      state.loading = false;
      state.error = payload;
      return { ...state };

    default:
      return state;
  }
};

export default reducers;
