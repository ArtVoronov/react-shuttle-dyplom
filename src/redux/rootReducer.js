import { combineReducers } from "redux";
import { alertReducer } from "./alert/reducer";
import { todoReducer } from "./todos/reducer";

export const rootReducer = combineReducers({
  todos: todoReducer,
  alert: alertReducer,
});
