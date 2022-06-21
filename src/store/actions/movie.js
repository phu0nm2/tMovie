import { actionTypes } from "./type";
import { createAction } from ".";
// import axiosClient from "../../api/axiosClient";
// import { API_KEY } from "../../api/apiKey";
import { tmdbApi } from "../../api/tmdbApi";

export const fetchMovieList = () => async (dispatch) => {
  try {
    dispatch(createAction(actionTypes.FETCH_MOVIE_REQUEST, {}));
    const { data } = await tmdbApi.getMovieList();
    dispatch(createAction(actionTypes.FETCH_MOVIE_SUCCESS, data.results));
  } catch (err) {
    dispatch(createAction(actionTypes.FETCH_MOVIE_FAILURE, err));
    console.log(err);
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
