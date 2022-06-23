import { actionTypes } from "./type";
import { createAction } from ".";
import { movieType, tmdbApi } from "../../api/tmdbApi";

export const fetchMovieList = (type) => async (dispatch) => {
  try {
    dispatch(createAction(actionTypes.FETCH_MOVIE_REQUEST, {}));
    const { data } = await tmdbApi.getMovieList(movieType[type]);
    dispatch(createAction(actionTypes.FETCH_MOVIE_SUCCESS, data.results));
  } catch (err) {
    dispatch(createAction(actionTypes.FETCH_MOVIE_FAILURE, err));
    console.log(err);
  }
};

export const fetchMovieSimilar = (id) => async (dispatch) => {
  try {
    dispatch(createAction(actionTypes.FETCH_SIMILAR_REQUEST, {}));
    const { data } = await tmdbApi.similar(id);
    dispatch(createAction(actionTypes.FETCH_SIMILAR_SUCCESS, data.results));
  } catch (err) {
    dispatch(createAction(actionTypes.FETCH_SIMILAR_FAILURE, err));
  }
};

export const fetchMovieDetailById = (id) => async (dispatch) => {
  try {
    dispatch(createAction(actionTypes.FETCH_DETAIL_REQUEST, {}));
    const { data } = await tmdbApi.detail(id);
    dispatch(createAction(actionTypes.FETCH_DETAIL_SUCCESS, data.results));
  } catch (err) {
    dispatch(createAction(actionTypes.FETCH_DETAIL_FAILURE, err));
  }
};
