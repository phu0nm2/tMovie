import { createAction } from ".";
// import { tmdbApiUser } from "../../api/apiUser";
import { actionUsers } from "./type";
import { auth } from "../../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";

export const signin =
  ({ email, password }, handleRedirect) =>
  (dispatch) => {
    dispatch(createAction(actionUsers.SIGN_IN_REQUEST, {}));
    signInWithEmailAndPassword(auth, email, password)
      .then((user) => {
        dispatch(createAction(actionUsers.SIGN_IN_SUCCESS, user));

        handleRedirect();
      })
      .catch((err) => console.log(err));
  };

export const signup =
  ({ email, password, displayName }, handleRedirect) =>
  async (dispatch) => {
    try {
      dispatch(createAction(actionUsers.SIGN_UP_REQUEST, {}));
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      updateProfile(user, { displayName });
      dispatch(createAction(actionUsers.SIGN_UP_SUCCESS, { user }));

      handleRedirect();
    } catch (err) {
      dispatch(createAction(actionUsers.SIGN_UP_FAILURE, err));
    }
  };

export const signinWithGoogle =
  (values, handleRedirect) => async (dispatch) => {
    try {
      dispatch(createAction(actionUsers.SIGN_IN_WITH_GOOGLE_REQUEST, {}));

      dispatch(
        createAction(actionUsers.SIGN_IN_WITH_GOOGLE_SUCCESS, { values })
      );

      handleRedirect();
    } catch (error) {
      dispatch(createAction(actionUsers.SIGN_IN_WITH_GOOGLE_FAILURE, error));
    }
  };

export const logOut = () => async (dispatch) => {
  try {
    dispatch(createAction(actionUsers.LOGOUT_REQUEST, {}));
    await signOut(auth);
    dispatch(createAction(actionUsers.LOGOUT_SUCCESS));
  } catch (err) {
    console.log(err);
    dispatch(createAction(actionUsers.LOGOUT_FAILURE, {}));
  }
};

export const setUser = (user) => async (dispatch) => {
  dispatch(createAction(actionUsers.SET_USER, user));
};
