import HeaderApi from "api/headerApi";
import { call, put, takeLatest } from "redux-saga/effects";
import { getHeaderSuccess, GET_HEADER } from "redux/actions/headerAction";


function* headerSaga() {
   try {
      const response = yield call(HeaderApi.getHeader)
      yield put(getHeaderSuccess(response))
   }
   catch (e) {
      console.log(e)
   }
}

export default function* () {
   yield takeLatest(GET_HEADER, headerSaga)
}