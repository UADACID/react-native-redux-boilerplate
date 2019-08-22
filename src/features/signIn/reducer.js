import {
  REQUEST_SIGNIN,
  REQUEST_SIGNIN_FAILED,
  REQUEST_SIGNIN_SUCCESS
} from "../../redux/constans";

const initialState = {
  onRequest: false,
  onRequestSuccess: false,
  onRequestFailed: false
};

const signIn = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_SIGNIN:
      return {
        ...initialState,
        onRequest: true
      };
    case REQUEST_SIGNIN_FAILED:
      return {
        ...state,
        onRequest: false,
        onRequestFailed: true,
        onRequestSuccess: false
      };
    case REQUEST_SIGNIN_SUCCESS:
      return {
        ...state,
        onRequest: false,
        onRequestFailed: false,
        onRequestSuccess: true
      };
    default:
      return state;
  }
};

export default signIn;
