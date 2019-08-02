import { createStackNavigator, createAppContainer } from "react-navigation";

// screens as module
import SignIn from "../features/signIn/container";

const RootStack = createStackNavigator({
  FirstScreen: SignIn
});

export default createAppContainer(RootStack);
