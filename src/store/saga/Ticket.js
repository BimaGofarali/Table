import axios from "axios";
import {GET_TIKET_BEGIN, GET_TIKET_SUCCESS, GET_TIKET_FAIL} from "../action/type"
import { put, takeEvery } from "@redux-saga/core/effects";

function* getTicket() {
    const Token = localStorage.getItem('user');
    try {
        const res = yield axios.get(`https://yantek.padipresence.id/api/ticket/support?offset=0&limit=10`, { headers: { Authorization: ` ${Token}` } });
        yield put({
            type: GET_TIKET_SUCCESS,
            payload: res.data.data.reverse(),
        });
    } catch (error) {
        yield put({
            type: GET_TIKET_FAIL,
            error: error,
        })
    }
};


export function* watchGetTicket() {
    yield takeEvery(GET_TIKET_BEGIN, getTicket);
}