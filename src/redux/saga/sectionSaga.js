import SectionApi from "api/section";
import { call, put, takeLatest } from "redux-saga/effects";
import { getSectionSuccess, GET_SECTION } from "redux/actions/sectionAction";


function* sectionSaga() {
   try {
      const response = yield call(SectionApi.getSection)
      yield put(getSectionSuccess(response))
   }
   catch (e) {
      console.log(e)
   }
}

export default function* () {
   yield takeLatest(GET_SECTION, sectionSaga)
}