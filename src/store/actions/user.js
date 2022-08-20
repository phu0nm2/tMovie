import { createAction } from ".";
import { tmdbApiUser } from "../../api/apiUser";
import { actionUsers } from "./type";

export const signin = (values, handleRedirect) => async (dispatch) => {
  try {
    dispatch(createAction(actionUsers.SIGN_IN_REQUEST, {}));
    const { data } = await tmdbApiUser.signin(values);
    dispatch(createAction(actionUsers.SIGN_IN_SUCCESS, data));

    localStorage.setItem("token", data.request_token);

    handleRedirect();
    console.log("request_token", data);
  } catch (err) {
    console.log(err);
    dispatch(createAction(actionUsers.SIGN_IN_FAILURE, err));
  }
};

export const fetchRequestToken = (token) => async (dispatch) => {
  try {
    dispatch(createAction(actionUsers.FETCH_RQ_TOKEN_REQUEST, {}));
    const { data } = await tmdbApiUser.getRequestToken(token);
    dispatch(createAction(actionUsers.FETCH_RQ_TOKEN_SUCCESS, data));
    console.log(data);
  } catch (err) {
    console.log(err);
    dispatch(createAction(actionUsers.FETCH_RQ_TOKEN_FAILURE, err));
  }
};

export const signinWithGoogle =
  (values, handleRedirect) => async (dispatch) => {
    try {
      const data = values.profileObj;
      const token = values.tokenId;
      dispatch(createAction(actionUsers.SIGN_IN_WITH_GOOGLE, { data, token }));

      handleRedirect();
    } catch (error) {
      console.log(error);
    }
  };

// export const generateSessionId = (request_token) => async (dispatch) => {
//   try {
//     dispatch(createAction(actionUsers.SIGN_IN_REQUEST, {}));
//     const { data } = await tmdbApiUser.sessionID(request_token);
//     dispatch(createAction(actionUsers.SIGN_IN_SUCCESS, data));
//     console.log("session_id", data);
//     // handleRedirect();
//   } catch (err) {
//     dispatch(createAction(actionUsers.SIGN_IN_FAILURE, err));
//   }
// };
