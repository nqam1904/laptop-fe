import categoryAPi from "api/categoryApi";
import ProductApi from "api/productApi";
import { Loading } from "components/";
import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { getCategorySuccess, getDetailLaptopSuccess, getLaptopByCateSuccess, getLaptopByPriceSuccess, getListLaptopSuccess, getProdcutViewSuccess, GET_CATEGORY, GET_DETAIL_LAPTOP, GET_LAPTOP_BY_CATE, GET_LAPTOP_BY_PRICE, GET_LIST_LAPTOP, GET_PRODUCT_VIEW, searchProductSuccess, SEARCH_PRODUCT } from "redux/actions/laptopAction";


function* laptopSaga() {
   try {
      const response = yield call(ProductApi.getProductList)
      yield put(getListLaptopSuccess(response))
   }
   catch (e) {
      console.log(e)
   }
}
function* searchLaptopSaga(action) {
   try {
      Loading.show()
      const response = yield call(ProductApi.searchProduct, action.payload)
      yield put(searchProductSuccess(response))
   }
   catch (e) {
      console.log(e)
   } finally {
      Loading.hide()
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
   try {
      Loading.show()
      const response = yield call(ProductApi.queryDetailLaptop, action.payload)
      yield put(getDetailLaptopSuccess(response))
   }
   catch (e) {
      Loading.hide()
      console.log(e)
   } finally {
      Loading.hide()
   }
}
function* storageProductSaga(action) {
   try {
      yield put(getProdcutViewSuccess(action.payload))
   }
   catch (e) {
      console.log(e)
   }
}
function* getCategorySaga() {
   try {
      const response = yield call(categoryAPi.getCategory)
      yield put(getCategorySuccess(response))
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
   yield takeLatest(GET_PRODUCT_VIEW, storageProductSaga)
   yield takeLatest(SEARCH_PRODUCT, searchLaptopSaga)
   yield takeLatest(GET_CATEGORY, getCategorySaga)

}