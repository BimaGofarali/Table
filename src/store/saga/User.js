import axios from "axios";
import { LOGIN_BEGIN, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from "../action/type";
import { put, takeEvery, takeLatest } from "redux-saga/effects";

function* Login(action) {
  const { username, password, imei } = action;
  try {
    const res = yield axios.post(
      `https://yantek.padipresence.id/api/authentication/login`,
      { body: { Username:username, Password:password, Imei:imei} }
    );
    yield localStorage.setItem("token", res.data.token);
    yield put({
      type: LOGIN_SUCCESS,
      payload: res.data.token,
    });
    console.log(res.data.token);
  } catch (error) {
    yield put({
      type: LOGIN_FAIL,
      error: error,
    });
  }
}

function* Logout() {
  yield localStorage.removeItem("token");
  yield window.location.replace("/");
}

export function* watchLogin() {
  yield takeLatest(LOGIN_BEGIN, Login);
}

export function* watchLogout() {
  yield takeEvery(LOGOUT, Logout);
}
