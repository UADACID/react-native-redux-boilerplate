import {
  REQUEST_SIGNIN,
  REQUEST_SIGNIN_FAILED,
  REQUEST_SIGNIN_SUCCESS
} from "../../redux/constans";

export const doSignIn = () => {
  return async dispatch => {
    console.log("mlebu rene");
    dispatch({ type: REQUEST_SIGNIN });

    // simulation fetch data from api
    const fakeApi = () =>
      new Promise((resolve, reject) => {
        setTimeout(() => {
          return resolve("nilai balikan");
        }, 3000);
      });

    try {
      const result = await fakeApi();
      console.log({ result });
      dispatch({ type: REQUEST_SIGNIN_SUCCESS });
    } catch (error) {
      dispatch({ type: REQUEST_SIGNIN_FAILED });
    }
  };
};
