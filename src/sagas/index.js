import {
  fork,
  take,
  put,
  call,
  delay,
  takeLatest,
  select,
  takeEvery
} from "redux-saga/effects";
import * as types from "../constants/task";
import { getList, addTask, updateTask, deleteTask } from "../apis/task";
import { STATUS_CODE, STATUSES } from "../constants/index";
import * as actTask from "../actions/task";
import { showLoading, hideLoading } from "../actions/ui";
import { hideModal } from "../actions/modal";

function* fetchListTaskAction() {
  while (true) {
    const action = yield take(types.FETCH_TASK);
    const { params } = action.payload;

    yield put(showLoading());
    const res = yield call(getList, params);
    const { status, data } = res;
    if (status === STATUS_CODE.SUCCESS) {
      yield put(actTask.fetchListTaskSuccess(data));
    } else {
      yield put(actTask.fetchListTaskFail(data));
    }
    yield delay(1000);
    yield put(hideLoading());
  }
}

function* filterTaskSaga({ payload }) {
  yield delay(500);
  const { keyword } = payload;

  yield put(actTask.fetchListTask({ q: keyword }));
}

function* addTaskSaga({ payload }) {
  const { title, description } = payload;
  yield put(showLoading());
  const resp = yield call(addTask, {
    title,
    description,
    status: STATUSES[0].value
  });
  const { data, status } = resp;
  if (status === STATUS_CODE.CREATED) {
    yield put(actTask.addTaskSuccess(data));
    yield put(hideModal());
  } else {
    yield put(actTask.addTaskFail(data));
  }
  yield delay(1000);
  yield put(hideLoading());
}

function* updateTaskSaga({ payload }) {
  const { title, description, status } = payload;
  const taskEditing = yield select(state => state.task.taskEditing);

  yield put(showLoading());

  const resp = yield call(
    updateTask,
    { title, description, status },
    taskEditing.id
  );
  const { data, status: statusCode } = resp;
  if (statusCode === STATUS_CODE.SUCCESS) {
    yield put(actTask.updateTaskSuccess(data));
    yield put(hideModal());
  } else {
    yield put(actTask.updateTaskFail(data));
  }
  yield delay(1000);
  yield put(hideLoading());
}

function* deleteTaskSaga({ payload }) {
  const { id } = payload;
  yield put(showLoading());

  const resp = yield call(deleteTask, id);
  const { data, status: statusCode } = resp;
  if (statusCode === STATUS_CODE.SUCCESS) {
    yield put(actTask.deleteTaskSuccess(id));
    yield put(hideModal());
  } else {
    yield put(actTask.deleteTaskFail(data));
  }
  yield delay(1000);
  yield put(hideLoading());
}

function* rootSaga() {
  yield fork(fetchListTaskAction);
  yield takeLatest(types.FILTER_TASK, filterTaskSaga);
  yield takeEvery(types.ADD_TASK, addTaskSaga);
  yield takeLatest(types.UPDATE_TASK, updateTaskSaga);
  yield takeLatest(types.DELETE_TASK, deleteTaskSaga);
}

export default rootSaga;
