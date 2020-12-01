import { handleActions } from "redux-actions";
import {
  todoAdd,
  todoRemove,
  todoFetchRequest,
  todoFetchSuccess,
  todoFetchError,
} from "./actions";

const api = "";

// const date = new Date().toISOString();

const initialState = {
  todos: [{ smth: 1 }],
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
    // [todoComplete]: (state, { payload: { id } }) => ({
    //   ...state,
    // }),
    // [todoFetchSuccess]: (state, { payload: { id } }) => ({
    //   ...state,
    // }),
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
  },
  initialState
);

// const fetchData = () => async (dispatch) => {
//   dispatch({ type: "FECTH_TODO_REQEST" });

//   try {
//     const response = await api.fetchSomething();
//     const list = response.data;
//     dispatch({ type: "FECTH_TODO_SUCCESS", payload: { list } });
//   } catch (error) {
//     dispatch({ type: "FECTH_TODO_ERROR", payload: { error } });
//   }
// };

//combine reducers
