/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from "react";
import { Provider } from "react-redux";

import RootNavigation from "./src/navigations/root";
import store from "./src/redux/store";

const App = () => (
  <Provider store={store}>
    <RootNavigation />
  </Provider>
);

export default App;
