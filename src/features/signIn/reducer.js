import {
  REQUEST_SIGNIN,
  REQUEST_SIGNIN_FAILED,
  REQUEST_SIGNIN_SUCCESS
} from "../../redux/constans";

const signIn = (state = [], action) => {
  switch (action.key) {
    case REQUEST_SIGNIN:
      return {
        ...state
      };
    case REQUEST_SIGNIN_FAILED:
      return {
        ...state
      };
    case REQUEST_SIGNIN_SUCCESS:
      return {
        ...state
      };
    default:
      return {
        ...state
      };
  }
};

export default signIn;
