import { createActions } from "redux-actions";
import { identity } from "../utils";

export const {
  todoAdd,
  todoAddRequest,
  todoAddSuccess,
  todoAddError,

  todoEdit,
  todoEditRequest,
  todoEditSuccess,
  todoEditError,

  todoRemove,
  todoRemoveRequest,
  todoRemoveSuccess,
  todoRemoveError,

  todoFetch,
  todoFetchRequest,
  todoFetchSuccess,
  todoFetchError,
} = createActions({
  TODO_ADD: identity,
  TODO_ADD_REQUEST: identity,
  TODO_ADD_SUCCESS: identity,
  TODO_ADD_ERROR: identity,

  TODO_EDIT: identity,
  TODO_EDIT_REQUEST: identity,
  TODO_EDIT_SUCCESS: identity,
  TODO_EDIT_ERROR: identity,

  TODO_REMOVE: identity,
  TODO_REMOVE_REQUEST: identity,
  TODO_REMOVE_SUCCESS: identity,
  TODO_REMOVE_ERROR: identity,

  TODO_FETCH: identity,
  TODO_FETCH_REQUEST: identity,
  TODO_FETCH_SUCCESS: identity,
  TODO_FETCH_ERROR: identity,
});

// export const TODO_ADD = createAction("TODO_ADD", payload: (data) => data);
// export const TODO_ADD = { type: "TODO_ADD" };
