import { createAction } from ".";
import { tmdbApiUser } from "../../api/apiUser";
import { actionUsers } from "./type";

export const fetchRequestToken =
  (values, handleRedirect) => async (dispatch) => {
    try {
      dispatch(createAction(actionUsers.FETCH_RQ_TOKEN_REQUEST, {}));
      const { data } = await tmdbApiUser.getRequestToken(values);
      dispatch(createAction(actionUsers.FETCH_RQ_TOKEN_SUCCESS, data));

      handleRedirect();
      // console.log("request_token", data);
    } catch (err) {
      dispatch(createAction(actionUsers.FETCH_RQ_TOKEN_FAILURE, err));
    }
  };

export const generateSessionId = (request_token) => async (dispatch) => {
  try {
    dispatch(createAction(actionUsers.SIGN_IN_REQUEST, {}));
    const { data } = await tmdbApiUser.sessionID(request_token);
    dispatch(createAction(actionUsers.SIGN_IN_SUCCESS, data));
    console.log("session_id", data);
    // handleRedirect();
  } catch (err) {
    dispatch(createAction(actionUsers.SIGN_IN_FAILURE, err));
  }
};
