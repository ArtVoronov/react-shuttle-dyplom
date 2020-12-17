import { handleActions } from "redux-actions";
import {
  todoAddError,
  todoAddRequest,
  todoAddSuccess,
  todoFetchError,
  todoFetchRequest,
  todoFetchSuccess,
  todoRemoveError,
  todoRemoveRequest,
  todoRemoveSuccess,
} from "./actions";

const initialState = {
  loading: false,
  error: null,
  todos: [],
};

export const todoReducer = handleActions(
  {
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
      todos: state.todos,
    }),

    [todoAddRequest]: (state) => {
      return {
        ...state,
        error: null,
        loading: true,
      };
    },
    [todoAddSuccess]: (state, { payload: { todoItem } }) => {
      let todo = todoItem.title ? [...state.todos, todoItem] : [...state.todos];
      return {
        ...state,
        error: null,
        loading: false,
        todos: todo,
      };
    },
    [todoAddError]: (state, { payload }) => ({
      ...state,
      loading: false,
      error: payload,
    }),

    [todoRemoveRequest]: (state) => ({
      ...state,
      loading: true,
      error: null,
    }),

    [todoRemoveSuccess]: (state, { payload: { id } }) => {
      let todo = state.todos.filter((item) => item.id !== id);
      return { ...state, loading: false, todos: todo };
    },
    [todoRemoveError]: (state, { payload }) => ({
      ...state,
      loading: false,
      error: payload,
      todos: state.todos,
    }),
  },
  initialState
);
