import { createActions } from "redux-actions";

const identity = (data) => data;

export const {
  todoAdd,
  todoRemove,
  todoFetchSuccess,
  todoFetchRequest,
  todoFetchError,
} = createActions({
  TODO_ADD: identity,
  TODO_REMOVE: identity,
  TODO_FETCH_SUCCESS: identity,
  TODO_FETCH_REQUEST: identity,
  TODO_FETCH_ERROR: identity,
});

// export const TODO_ADD = createAction("TODO_ADD", payload: (data) => data);
// export const TODO_ADD = { type: "TODO_ADD" };
