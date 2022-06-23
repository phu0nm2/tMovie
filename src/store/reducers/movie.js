import { actionTypes } from "../actions/type";

const initialState = {
  movieList: [],
  loading: false,
  error: null,
  detail: [],
};

const reducers = (state = initialState, { type, payload }) => {
  switch (type) {
    // state movieList
    case actionTypes.FETCH_MOVIE_REQUEST: {
      state.loading = true;
      return { ...state };
    }
    case actionTypes.FETCH_MOVIE_SUCCESS: {
      state.loading = false;
      state.error = null;
      state.movieList = payload.slice(0, 8);
      return { ...state };
    }
    case actionTypes.FETCH_MOVIE_FAILURE: {
      state.loading = false;
      state.error = payload;
      return { ...state };
    }

    case actionTypes.FETCH_SIMILAR_REQUEST: {
      state.loading = true;
      return { ...state };
    }
    case actionTypes.FETCH_SIMILAR_SUCCESS: {
      state.loading = false;
      state.error = null;
      state.movieList = payload;
      return { ...state };
    }
    case actionTypes.FETCH_SIMILAR_FAILURE: {
      state.loading = false;
      state.error = payload;
      return { ...state };
    }

    // detail
    case actionTypes.FETCH_DETAIL_REQUEST: {
      state.loading = true;
      return { ...state };
    }
    case actionTypes.FETCH_DETAIL_SUCCESS: {
      state.loading = false;
      state.error = null;
      state.detail = payload;
      return { ...state };
    }
    case actionTypes.FETCH_DETAIL_FAILURE: {
      state.loading = false;
      state.error = payload;
      return { ...state };
    }

    //

    default:
      return state;
  }
};

export default reducers;
