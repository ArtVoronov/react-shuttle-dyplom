import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import {
  todoRemove,
  todoFetch,
  todoFetchSuccess,
  todoRemoveSuccess,
  todoFetchRequest,
  todoFetchError,
} from "./actions";
import { deleteTodo, getTodos } from "../../api";

// fetchTodosHandler||fetchTodosWorker
function* fetchTodosHandler() {
  yield put(todoFetch());

  try {
    const todos = yield call(getTodos);
    yield put(todoFetchSuccess({ todos }));
  } catch (error) {
    yield put(todoFetchError(error));
  }
}

function* deleteTodosHandler({ payload: { id } }) {
  yield put(todoFetchRequest());

  try {
    yield call(deleteTodo(id));
    yield put(todoRemoveSuccess({ id }));
  } catch (error) {
    yield put(todoFetchError(error));
  }
}

export function* todosSaga() {
  yield takeLatest(todoFetch, fetchTodosHandler);
  yield takeEvery(todoRemove, deleteTodosHandler);
}
