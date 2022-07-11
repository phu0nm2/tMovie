import { actionUsers } from "../actions/type";

const initialState = {
  currentUser: null,
  loading: false,
  error: null,
};

const reducers = (state = initialState, { type, payload }) => {
  switch (type) {
    // request token
    case actionUsers.FETCH_RQ_TOKEN_REQUEST:
      state.loading = true;
      return { ...state };
    case actionUsers.FETCH_RQ_TOKEN_SUCCESS:
      state.loading = false;
      state.error = null;
      state.currentUser = payload;
      return { ...state };
    case actionUsers.FETCH_RQ_TOKEN_FAILURE:
      state.loading = false;
      state.error = payload;
      return { ...state };

    // sign in
    case actionUsers.SIGN_IN_REQUEST:
      state.loading = true;
      return { ...state };
    case actionUsers.SIGN_IN_SUCCESS:
      state.loading = false;
      state.error = null;
      state.currentUser = payload;
      return { ...state };
    case actionUsers.SIGN_IN_FAILURE:
      state.loading = false;
      state.error = payload;
      return { ...state };
    default:
      return state;
  }
};

export default reducers;
