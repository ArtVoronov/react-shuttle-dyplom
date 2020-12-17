import { combineReducers } from "redux";
import { notesReducer } from "./notes/reducer";
// import { alertReducer } from "./alert/reducer";
import { todoReducer } from "./todos/reducer";

export const rootReducer = combineReducers({
  todos: todoReducer,
  notes: notesReducer,
  // alert: alertReducer,
});
