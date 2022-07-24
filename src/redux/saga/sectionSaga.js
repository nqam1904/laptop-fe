import ProductApi from "api/productApi";
import SectionApi from "api/section";
import { all, call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { getSectionSuccess, GET_SECTION } from "redux/actions/sectionAction";


function* sectionSaga() {
   try {
      const response = yield call(SectionApi.getSection)
      yield put(getSectionSuccess(response))
      // const listSection = yield all([response.map(elment => call(ProductApi.queryFilterCategory, elment?.category?.name))])
      // console.log(listSection, 'listSection')
   }

   catch (e) {
      console.log(e)
   }
}

export default function* () {
   yield takeLatest(GET_SECTION, sectionSaga)
}