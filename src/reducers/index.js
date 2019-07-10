import { combineReducers } from "redux";

export default combineReducers({
  todos: (state = [], action) => {
    switch (action.key) {
      case 'addTodo':
        return {
          ...state
        }
      default:
        return {
          ...state
        }
    }
  }
});
