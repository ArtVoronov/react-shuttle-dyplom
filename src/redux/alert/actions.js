import { createActions } from "redux-actions";

const identity = (data) => data;

export const { alert } = createActions({
  ALERT: identity,
});
