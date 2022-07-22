import accessoryApi from "api/accessoryApi";
import { call, put, takeLatest } from "redux-saga/effects";
import { getAccessoryDetailSuccess, getAccessorySuccess, GET_ACCESSORY, GET_ACCESSORY_DETAIL } from "redux/actions/accessoryAction";


function* accessorySaga() {
   try {
      const response = yield call(accessoryApi.getAccessory)
      yield put(getAccessorySuccess(response))
   }
   catch (e) {
      console.log(e)
   }
}
function* detailAccessorySaga() {
   try {
      const response = yield call(accessoryApi.getDetailAccessory)
      yield put(getAccessoryDetailSuccess(response))
   }
   catch (e) {
      console.log(e)
   }
}
export default function* () {
   yield takeLatest(GET_ACCESSORY, accessorySaga)
   yield takeLatest(GET_ACCESSORY_DETAIL, detailAccessorySaga)

}