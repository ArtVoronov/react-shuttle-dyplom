import { handleActions } from "redux-actions";
import {
  notesFetchRequest,
  notesFetchSuccess,
  notesFetchError,
  notesCompliteRequest,
  notesCompliteSuccess,
  notesCompliteError,
  notesUncompliteRequest,
  notesUncompliteSuccess,
  notesUncompliteError,
} from "./actions";

const initialState = {
  loading: false,
  error: null,
  notes: [],
  isComplited: false,
};

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

    [notesCompliteRequest]: (state) => ({
      ...state,
      error: null,
      loading: true,
    }),
    [notesCompliteSuccess]: (state, { payload: { notes } }) => ({
      ...state,
      loading: false,
      notes,
    }),
    [notesCompliteError]: (state, { payload }) => ({
      ...state,
      loading: false,
      error: payload,
      notes: state.notes,
    }),

    [notesUncompliteRequest]: (state) => ({
      ...state,
      error: null,
      loading: true,
    }),
    [notesUncompliteSuccess]: (state, { payload: { notes } }) => ({
      ...state,
      loading: false,
      notes,
    }),
    [notesUncompliteError]: (state, { payload }) => ({
      ...state,
      loading: false,
      error: payload,
      notes: state.notes,
    }),
  },
  initialState
);
