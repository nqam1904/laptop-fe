/* eslint-disable import/no-anonymous-default-export */
import { ListLaptopHomeApi } from 'api/listLaptopHome'
import { call, put, takeLatest } from 'redux-saga/effects'
import { getListLaptopHomeSuccess, GET_LIST_LAPTOP_HOME } from 'redux/actions/homeAction'

function* listLaptopHomeSaga() {
	try {
		const response = yield call(ListLaptopHomeApi.getListLaptop)
		yield put(getListLaptopHomeSuccess(response))
	} catch (e) {
		console.log(e)
	}
}

export default function* () {
	yield takeLatest(GET_LIST_LAPTOP_HOME, listLaptopHomeSaga)
}
