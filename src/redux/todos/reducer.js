import { handleActions } from "redux-actions";
import {
  todoAdd,
  todoRemove,
  todoFetchSuccess,
  todoRemoveSuccess,
  todoFetchError,
  todoFetchRequest,
} from "./actions";

const initialState = {
  todos: [],
};

export const todoReducer = handleActions(
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
    [todoFetchRequest]: (state) => ({
      ...state,
      error: null,
      loading: true,
    }),
    [todoFetchSuccess]: (state, { payload: { todos } }) => ({
      ...state,
      loading: false,
      todos,
    }),
    [todoFetchError]: (state, { payload }) => ({
      ...state,
      loading: false,
      error: payload,
      todos: [],
    }),
    [todoRemoveSuccess]: (state, { payload: { todos } }) => ({
      ...state,
      loading: false,
      todos,
    }),
  },
  initialState
);
