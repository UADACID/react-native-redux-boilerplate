import { applyMiddleware, createStore } from "redux";
import logger from 'redux-logger'

import combinerReducers from "./reducers";

const store = createStore(combinerReducers, applyMiddleware(logger));
export default store;
