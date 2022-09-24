import accessoryApi from "api/accessoryApi";
import { call, put, takeLatest } from "redux-saga/effects";
import { getAccessoryByPriceSuccess, GET_ACCESSORY_BY_PRICE, getAccessoryDetailSuccess, getAccessorySuccess, GET_ACCESSORY, GET_ACCESSORY_DETAIL } from "redux/actions/accessoryAction";


function* accessorySaga() {
   try {
      const response = yield call(accessoryApi.getAccessory)
      yield put(getAccessorySuccess(response))
   }
   catch (e) {
      console.log(e)
   }
}
function* detailAccessorySaga(action) {
   try {
      const response = yield call(accessoryApi.getDetailAccessoryById, action.payload)
      yield put(getAccessoryDetailSuccess(response[0] || response))
   }
   catch (e) {
      console.log(e)
   }
}
function* accessoryByPriceSaga(action) {
   try {
      const response = yield call(accessoryApi.queryFilterCategoryPrice, action.payload)
      yield put(getAccessoryByPriceSuccess(response))

   }
   catch (e) {
      console.log(e)
   }
}
export default function* () {
   yield takeLatest(GET_ACCESSORY, accessorySaga)
   yield takeLatest(GET_ACCESSORY_DETAIL, detailAccessorySaga)
   yield takeLatest(GET_ACCESSORY_BY_PRICE, accessoryByPriceSaga)

}