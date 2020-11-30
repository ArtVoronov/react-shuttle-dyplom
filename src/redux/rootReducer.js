import { handleActions } from "redux-actions";
import { todoAdd, todoRemove } from "./actions";

const date = new Date().toISOString();

const initialState = {
  todos: [
    {
      id: "aldksj123",
      date: date,
      title: "Initial todo item",
    },
  ],
};

const rootReducer = handleActions(
  {
    [todoAdd]: (state, { payload: { todoItem } }) => {
      let todo = todoItem.title ? [...state.todos, todoItem] : [...state.todos];
      return {
        ...state,
        todos: todo,
      };
    },
    [todoRemove]: (state, { payload: { id } }) =>
      state.todos.filter((item) => item.id !== id),
  },
  initialState
);

export default rootReducer;
