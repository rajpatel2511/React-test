import { put, takeEvery, all } from "redux-saga/effects";

import { GET_USERS_FAILED,GET_USERS_SUCCESS,GET_USERS_REQUEST } from "./actions/actionType";
import {API} from "../apiService"
export const delay = (ms) => new Promise((res) => setTimeout(res, ms));


export function* incrementAsync(action) {
  yield delay(2000);

  if (true) {
    yield put({ type: "ADD_SUCCESS", payload: 1 });
  } else {
    yield put({ type: "ADD_FAILURE", payload: "" });
  }
}


//new
export function* requestUsers(action){
  try{
    const response=yield API.getUsers();
    // console.log(response)
    const users=response.data;
    yield put ({type:GET_USERS_SUCCESS,payload:users});

  }catch(error){
    yield put ({type:GET_USERS_FAILED,payload:error});
  }
}
//...............
export function* watchIncrementAsync() {
  yield takeEvery("ADD_REQUEST", incrementAsync);
  yield takeEvery(GET_USERS_REQUEST, requestUsers);

}

export default function* rootSaga() {
  yield all([watchIncrementAsync()]);
}