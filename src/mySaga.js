import {put, takeEvery} from 'redux-saga/effects'
import {counterActions} from "./counterReducer.js";


export function* counter(){
    yield put(counterActions.increment(1));
}

export function * mySaga(){
    yield takeEvery('ADD', counter)
}