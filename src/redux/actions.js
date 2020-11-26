import { createActions } from "redux-actions";

const identity = (data) => data;

export const { TODO_ADD, TODO_REMOVE } = createActions({
  TODO_ADD: identity,
  TODO_REMOVE: identity,
});

// export const TODO_ADD = createAction("TODO_ADD", payload: (data) => data);
// export const TODO_ADD = { type: "TODO_ADD" };
