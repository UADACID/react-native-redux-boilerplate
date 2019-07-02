import { createStore } from "redux";

import combinerReducers from "./reducers";

const store = createStore(combinerReducers);
export default store;
