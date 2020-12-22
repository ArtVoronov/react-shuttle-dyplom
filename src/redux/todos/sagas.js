import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import {
  todoRemove,
  todoFetch,
  todoFetchSuccess,
  todoRemoveSuccess,
  todoFetchRequest,
  todoFetchError,
  todoAddRequest,
  todoAddSuccess,
  todoAddError,
  todoAdd,
  todoEditRequest,
  todoEditError,
  todoEdit,
  todoEditSuccess,
} from "./actions";
import { createTodo, deleteTodo, editTodo, getTodos } from "../../api";

// fetchTodosHandler||fetchTodosWorker
function* fetchTodosHandler() {
  yield put(todoFetchRequest());

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

function* addTodosHandler({ payload: { todoItem } }) {
  yield put(todoAddRequest());

  try {
    const id = yield call(createTodo, todoItem);
    yield put(todoAddSuccess({ todoItem: { ...todoItem, id } }));
  } catch (error) {
    yield put(todoAddError(error));
  }
}

function* editTodosHandler({ payload: { todoItem } }) {
  yield put(todoEditRequest());

  try {
    yield call(editTodo(todoItem));
    yield put(todoEditSuccess({ todoItem }));
  } catch (error) {
    yield put(todoEditError(error));
  }
}

export function* todosSaga() {
  yield takeLatest(todoFetch, fetchTodosHandler);
  yield takeEvery(todoRemove, deleteTodosHandler);
  yield takeLatest(todoAdd, addTodosHandler);
  yield takeLatest(todoEdit, editTodosHandler);
}
