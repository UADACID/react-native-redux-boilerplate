import { createStackNavigator, createAppContainer } from "react-navigation";

import Example from "./screens/example";

let RootStack = createStackNavigator({
  Counter: Example,
  StaticCounter: Example
});

let Navigation = createAppContainer(RootStack);

export default Navigation;
