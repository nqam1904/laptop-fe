import { all } from 'redux-saga/effects'
import accessorySaga from './accessorySaga'
import bannerSaga from './bannerSaga'
import footerSaga from './footerSaga'
import headerSaga from './headerSaga'
import homeSaga from './homeSaga'
import laptopSaga from './laptopSaga'
export function* rootSaga() {
	yield all([bannerSaga(), headerSaga(), laptopSaga(), footerSaga(), accessorySaga(), homeSaga()])
}
