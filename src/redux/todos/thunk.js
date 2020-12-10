import { todoFetchRequest, todoFetchSuccess, todoFetchError } from "./actions";
import { getTodos, createTodo } from "../../api";

export const fetchTodosThunk = () => async (dispatch) => {
  dispatch(todoFetchRequest());

  try {
    const todos = await getTodos();
    dispatch(todoFetchSuccess({ todos }));
  } catch (error) {
    dispatch(todoFetchError(error));
  }
};

export const fetchNewTodoThunk = (item) => async (dispatch) => {
  dispatch(todoFetchRequest());

  try {
    const todos = await createTodo(item);
    dispatch(todoFetchSuccess({ todos }));
  } catch (error) {
    dispatch(todoFetchError(error));
  }
};
