import { actionTypes } from "./type";
import { createAction } from ".";
import { movieType, tmdbApi } from "../../api/tmdbApi";

export const fetchMoviePopular = (params) => async (dispatch) => {
  try {
    dispatch(createAction(actionTypes.FETCH_POPULAR_REQUEST, {}));
    const { data } = await tmdbApi.getMoviePopular(params);
    dispatch(createAction(actionTypes.FETCH_POPULAR_SUCCESS, data));
    // console.log("data", data);
  } catch (err) {
    dispatch(createAction(actionTypes.FETCH_POPULAR_FAILURE, err));
  }
};

export const fetchMovieTopRated = (params) => async (dispatch) => {
  try {
    dispatch(createAction(actionTypes.FETCH_TOP_RATED_REQUEST, {}));
    const { data } = await tmdbApi.getMoviesTopRated(params);
    dispatch(createAction(actionTypes.FETCH_TOP_RATED_SUCCESS, data));
    // console.log("data", data);
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

export const fetchMovieSimilar = (category, id) => async (dispatch) => {
  try {
    dispatch(createAction(actionTypes.FETCH_SIMILAR_REQUEST, {}));
    const { data } = await tmdbApi.similar(category, id);
    dispatch(createAction(actionTypes.FETCH_SIMILAR_SUCCESS, data.results));
  } catch (err) {
    dispatch(createAction(actionTypes.FETCH_SIMILAR_FAILURE, err));
  }
};

export const fetchSearchMovie = (type, params) => async (dispatch) => {
  try {
    dispatch(createAction(actionTypes.FETCH_SEARCH_REQUEST, {}));
    const { data } = await tmdbApi.search(movieType[type], params);
    dispatch(createAction(actionTypes.FETCH_SEARCH_SUCCESS, data.results));
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
