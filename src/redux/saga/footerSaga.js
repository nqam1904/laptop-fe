import footerApi from "api/footerApi";
import { call, put, takeLatest } from "redux-saga/effects";
import { getFooterSuccess, GET_FOOTER } from "redux/actions/footerAction";


function* footerSaga() {
   try {
      const response = yield call(footerApi.getFooter)
      yield put(getFooterSuccess(response))
   }
   catch (e) {
      console.log(e)
   }
}

export default function* () {
   yield takeLatest(GET_FOOTER, footerSaga)
}