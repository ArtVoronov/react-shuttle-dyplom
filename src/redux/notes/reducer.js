import { handleActions } from "redux-actions";
import {
  notesFetchRequest,
  notesFetchSuccess,
  notesFetchError,
} from "./actions";

const initialState = { loading: false, error: null, notes: [] };

export const notesReducer = handleActions(
  {
    [notesFetchRequest]: (state) => ({
      ...state,
      error: null,
      loading: true,
    }),
    [notesFetchSuccess]: (state, { payload: { notes } }) => ({
      ...state,
      loading: false,
      notes,
    }),
    [notesFetchError]: (state, { payload }) => ({
      ...state,
      loading: false,
      error: payload,
      notes: [],
    }),
  },
  initialState
);
