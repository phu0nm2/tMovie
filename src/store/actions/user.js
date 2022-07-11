import { createAction } from ".";
import { tmdbApiUser } from "../../api/apiUser";
import { actionUsers } from "./type";

export const fetchRequestToken = (params) => async (dispatch) => {
  try {
    dispatch(createAction(actionUsers.FETCH_RQ_TOKEN_REQUEST, {}));
    const { data } = await tmdbApiUser.getRequestToken(params);
    dispatch(createAction(actionUsers.FETCH_RQ_TOKEN_SUCCESS, data));
    if (data.success === "true") {
      // dispatch(createAction(actionUsers.SIGN_IN_REQUEST));
      localStorage.setItem("token", data.request_token);
    }
    // handleRedirect();
    console.log("request_token", data);
  } catch (err) {
    dispatch(createAction(actionUsers.FETCH_RQ_TOKEN_FAILURE, err));
  }
};

export const signin = (values, handleRedirect) => async (dispatch) => {
  try {
    dispatch(createAction(actionUsers.SIGN_IN_REQUEST, {}));
    const { data } = await tmdbApiUser.signin(values);
    dispatch(createAction(actionUsers.SIGN_IN_SUCCESS, data));
    // if (data.success === "true") {
    //   localStorage.setItem("token", data);
    // }

    handleRedirect();
  } catch (err) {
    dispatch(createAction(actionUsers.SIGN_IN_FAILURE, err));
  }
};
