import { actionTypes } from "../actions/type";

const initialState = {
  moviePopular: [],
  movieTopRated: [],
  movieUpcoming: [],
  loading: false,
  error: null,
  detail: null,
  searchMovies: null,
};

const reducers = (state = initialState, { type, payload }) => {
  switch (type) {
    // state movieList
    case actionTypes.FETCH_POPULAR_REQUEST: {
      state.loading = true;
      return { ...state };
    }
    case actionTypes.FETCH_POPULAR_SUCCESS: {
      state.loading = false;
      state.error = null;
      state.moviePopular = payload;
      return { ...state };
    }
    case actionTypes.FETCH_POPULAR_FAILURE: {
      state.loading = false;
      state.error = payload;
      return { ...state };
    }

    //top rated
    case actionTypes.FETCH_TOP_RATED_REQUEST: {
      state.loading = true;
      return { ...state };
    }
    case actionTypes.FETCH_TOP_RATED_SUCCESS: {
      state.loading = false;
      state.error = null;
      state.movieTopRated = payload;
      return { ...state };
    }
    case actionTypes.FETCH_TOP_RATED_FAILURE: {
      state.loading = false;
      state.error = payload;
      return { ...state };
    }

    //up coming
    case actionTypes.FETCH_UPCOMING_REQUEST: {
      state.loading = true;
      return { ...state };
    }
    case actionTypes.FETCH_UPCOMING_SUCCESS: {
      state.loading = false;
      state.error = null;
      state.movieUpcoming = payload;
      return { ...state };
    }
    case actionTypes.FETCH_UPCOMING_FAILURE: {
      state.loading = false;
      state.error = payload;
      return { ...state };
    }

    //similar
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

    // search
    case actionTypes.FETCH_SEARCH_REQUEST: {
      state.loading = true;
      return { ...state };
    }
    case actionTypes.FETCH_SEARCH_SUCCESS: {
      state.loading = false;
      state.error = null;
      state.searchMovies = payload;
      return { ...state };
    }
    case actionTypes.FETCH_SEARCH_FAILURE: {
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
