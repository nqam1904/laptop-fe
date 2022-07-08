import bannerApi from "api/bannerApi";
import { call, put, takeLatest } from "redux-saga/effects";
import { getBannerSuccess, GET_BANNER } from "redux/actions/bannerAction";


function* bannerSaga() {
   try {
      const response = yield call(bannerApi.getBannerApi)
      yield put(getBannerSuccess(response))
   }
   catch (e) {
      console.log(e)
   }
}

export default function* () {
   yield takeLatest(GET_BANNER, bannerSaga)
}