import { applyMiddleware, createStore, compose } from "redux";
import promise from "redux-promise-middleware";
import thunk from "redux-thunk";

import combinerReducers from "./combineReducers";

const middlewares = [thunk, promise];

if (process.env.NODE_ENV === "development") {
  const { logger } = require("redux-logger");

  middlewares.push(logger);
}

const store = compose(applyMiddleware(...middlewares))(createStore)(
  combinerReducers
);

export default store;
