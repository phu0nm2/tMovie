import { actionTvTypes } from "./type";
import { createAction } from ".";
import { tvType, tmdbApi } from "../../api/tmdbApi";

export const fetchTvList = (type) => async (dispatch) => {
  try {
    dispatch(createAction(actionTvTypes.FETCH_TV_REQUEST, {}));
    const { data } = await tmdbApi.getTvList(tvType[type]);
    dispatch(createAction(actionTvTypes.FETCH_TV_SUCCESS, data.results));
  } catch (err) {
    dispatch(createAction(actionTvTypes.FETCH_TV_FAILURE, err));
    console.log(err);
  }
};
