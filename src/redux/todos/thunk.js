import { todoFetchRequest, todoFetchSuccess, todoFetchError } from "./actions";
import {
  getTodos,
  // createTodo
} from "../../api";

export const fetchTodos = () => async (dispatch) => {
  dispatch(todoFetchRequest());

  try {
    const todos = await getTodos();
    dispatch(todoFetchSuccess({ todos }));
  } catch (error) {
    dispatch(todoFetchError(error));
  }
};
