import ProductApi from "api/productApi";
import { call, put, takeLatest } from "redux-saga/effects";
import { getListLaptopSuccess, GET_LIST_LAPTOP } from "redux/actions/laptopAction";


function* laptopSaga() {
   try {
      const response = yield call(ProductApi.getProductList)
      yield put(getListLaptopSuccess(response))
   }
   catch (e) {
      console.log(e)
   }
}

export default function* () {
   yield takeLatest(GET_LIST_LAPTOP, laptopSaga)
}