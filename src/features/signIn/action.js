import {
  REQUEST_SIGNIN,
  REQUEST_SIGNIN_FAILED,
  REQUEST_SIGNIN_SUCCESS
} from "../../redux/constans";

export const doSignIn = ({ username, password }) => {
  return dispatch => {
    dispatch({ type: REQUEST_SIGNIN });
    dispatch({ type: REQUEST_SIGNIN_FAILED });
    dispatch({ type: REQUEST_SIGNIN_SUCCESS });
  };
};
