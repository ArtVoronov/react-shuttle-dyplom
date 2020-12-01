import { handleActions } from "redux-actions";
import { alert } from "./actions";

const initialState = {
  alert: {
    show: false,
    message: "",
    type: "success",
  },
};

export const alertReducer = handleActions(
  {
    [alert]: (state, { payload: { type, message } }) => ({
      ...state,
      alert: {
        show: true,
        message,
        type,
      },
    }),
  },
  initialState
);
