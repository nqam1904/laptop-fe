import ProductApi from "api/productApi";
import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { getDetailLaptopSuccess, getLaptopByCateSuccess, getLaptopByPriceSuccess, getListLaptopSuccess, GET_LAPTOP_BY_PRICE, GET_DETAIL_LAPTOP, GET_LAPTOP_BY_CATE, GET_LIST_LAPTOP } from "redux/actions/laptopAction";


function* laptopSaga() {
   try {
      const response = yield call(ProductApi.getProductList)
      yield put(getListLaptopSuccess(response))
   }
   catch (e) {
      console.log(e)
   }
}
function* laptopByCateSaga(action) {
   try {
      const response = yield call(ProductApi.queryFilterCategory, action.payload)
      yield put(getLaptopByCateSuccess(response))

   }
   catch (e) {
      console.log(e)
   }
}
function* laptopByPriceSaga(action) {
   try {
      const response = yield call(ProductApi.queryFilterCategoryPrice, action.payload)
      yield put(getLaptopByPriceSuccess(response))

   }
   catch (e) {
      console.log(e)
   }
}
function* laptopDetailSaga(action) {
   console.log(action.payload)
   try {
      const response = yield call(ProductApi.queryDetailLaptop, action.payload)
      yield put(getDetailLaptopSuccess(response))
   }
   catch (e) {
      console.log(e)
   }
}
export default function* () {
   yield takeEvery(GET_LAPTOP_BY_CATE, laptopByCateSaga)
   yield takeLatest(GET_LIST_LAPTOP, laptopSaga)
   yield takeLatest(GET_LAPTOP_BY_PRICE, laptopByPriceSaga)
   yield takeLatest(GET_DETAIL_LAPTOP, laptopDetailSaga)
}