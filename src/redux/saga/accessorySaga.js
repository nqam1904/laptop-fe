import accessoryApi from "api/accessoryApi";
import { call, put, takeLatest } from "redux-saga/effects";
import { getAccessorySuccess, GET_ACCESSORY } from "redux/actions/accessoryAction";


function* accessorySaga() {
   try {
      const response = yield call(accessoryApi.getAccessory)
      yield put(getAccessorySuccess(response))
   }
   catch (e) {
      console.log(e)
   }
}

export default function* () {
   yield takeLatest(GET_ACCESSORY, accessorySaga)
}