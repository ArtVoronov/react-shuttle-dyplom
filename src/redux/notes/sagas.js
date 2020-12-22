import { call, put, takeLatest } from "redux-saga/effects";
import { compliteNote, getNotes, uncompliteNote } from "../../api";
import {
  notesComplite,
  notesCompliteError,
  notesCompliteRequest,
  notesCompliteSuccess,
  notesFetch,
  notesFetchError,
  notesFetchRequest,
  notesFetchSuccess,
  notesUncomplite,
  notesUncompliteError,
  notesUncompliteRequest,
  notesUncompliteSuccess,
} from "./actions";

function* fetchNotesHandler({ payload: { id } }) {
  yield put(notesFetchRequest());
  try {
    const notes = yield call(getNotes, id);
    yield put(notesFetchSuccess({ notes }));
  } catch (error) {
    yield put(notesFetchError(error));
  }
}

function* compliteNotesHandler({ payload: { id } }) {
  yield put(notesCompliteRequest());
  try {
    const notes = yield call(compliteNote, id);
    yield put(notesCompliteSuccess({ notes }));
  } catch (error) {
    yield put(notesCompliteError(error));
  }
}

function* uncompliteNotesHandler({ payload: { id } }) {
  yield put(notesUncompliteRequest());
  try {
    const notes = yield call(uncompliteNote, id);
    yield put(notesUncompliteSuccess({ notes }));
  } catch (error) {
    yield put(notesUncompliteError(error));
  }
}

export function* notesSaga() {
  yield takeLatest(notesFetch, fetchNotesHandler);
  yield takeLatest(notesComplite, compliteNotesHandler);
  yield takeLatest(notesUncomplite, uncompliteNotesHandler);
}
