import { applyMiddleware, createStore, compose } from "redux";
import logger from 'redux-logger'
import thunk from 'redux-thunk';

import combinerReducers from "./reducers";

const middlewares = [thunk];

if (process.env.NODE_ENV === `development`) {
  const { logger } = require(`redux-logger`);

  middlewares.push(logger);
}

const store = compose(applyMiddleware(...middlewares))(createStore)(combinerReducers);

export default store;
