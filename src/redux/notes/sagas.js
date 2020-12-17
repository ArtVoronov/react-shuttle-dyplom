import { call, put, takeLatest } from "redux-saga/effects";
import { getNotes } from "../../api";
import {
  notesFetch,
  notesFetchError,
  notesFetchRequest,
  notesFetchSuccess,
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

export function* notesSaga() {
  yield takeLatest(notesFetch, fetchNotesHandler);
}
