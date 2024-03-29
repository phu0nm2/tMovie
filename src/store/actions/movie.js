import { actionTypes } from "./type";
import { createAction } from ".";
import { tmdbApi } from "../../api/tmdbApi";

export const fetchMoviePopular = (params) => async (dispatch) => {
  try {
    dispatch(createAction(actionTypes.FETCH_POPULAR_REQUEST, {}));
    const { data } = await tmdbApi.getMoviePopular(params);
    dispatch(createAction(actionTypes.FETCH_POPULAR_SUCCESS, data));
  } catch (err) {
    dispatch(createAction(actionTypes.FETCH_POPULAR_FAILURE, err));
  }
};

export const fetchMovieTopRated = (params) => async (dispatch) => {
  try {
    dispatch(createAction(actionTypes.FETCH_TOP_RATED_REQUEST, {}));
    const { data } = await tmdbApi.getMoviesTopRated(params);
    dispatch(createAction(actionTypes.FETCH_TOP_RATED_SUCCESS, data));
  } catch (err) {
    dispatch(createAction(actionTypes.FETCH_TOP_RATED_FAILURE, err));
  }
};

export const fetchMovieUpComing = (params) => async (dispatch) => {
  try {
    dispatch(createAction(actionTypes.FETCH_UPCOMING_REQUEST, {}));
    const { data } = await tmdbApi.getMoviesUpComing(params);
    dispatch(createAction(actionTypes.FETCH_UPCOMING_SUCCESS, data));
  } catch (err) {
    dispatch(createAction(actionTypes.FETCH_UPCOMING_FAILURE, err));
  }
};

export const fetchSearchMovie =
  (params, handleRedirect) => async (dispatch) => {
    try {
      dispatch(createAction(actionTypes.FETCH_SEARCH_REQUEST, {}));
      const { data } = await tmdbApi.search(params);
      dispatch(createAction(actionTypes.FETCH_SEARCH_SUCCESS, data.results));
      handleRedirect();
    } catch (err) {
      dispatch(createAction(actionTypes.FETCH_SEARCH_FAILURE, err));
    }
  };

export const fetchMovieDetailById = (id) => async (dispatch) => {
  try {
    dispatch(createAction(actionTypes.FETCH_DETAIL_REQUEST, {}));
    const { data } = await tmdbApi.detail(id);
    dispatch(createAction(actionTypes.FETCH_DETAIL_SUCCESS, data));
  } catch (err) {
    dispatch(createAction(actionTypes.FETCH_DETAIL_FAILURE, err));
  }
};

export const fetchMovieVideoById = (id) => async (dispatch) => {
  try {
    dispatch(createAction(actionTypes.FETCH_VIDEOS_REQUEST, {}));
    const { data } = await tmdbApi.getVideos(id);
    dispatch(createAction(actionTypes.FETCH_VIDEOS_SUCCESS, data.results));
  } catch (err) {
    dispatch(createAction(actionTypes.FETCH_VIDEOS_FAILURE, err));
  }
};
