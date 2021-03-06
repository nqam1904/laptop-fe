import { all } from 'redux-saga/effects'
import accessorySaga from './accessorySaga'
import bannerSaga from './bannerSaga'
import footerSaga from './footerSaga'
import headerSaga from './headerSaga'
import laptopSaga from './laptopSaga'
import sectionSaga from './sectionSaga'
export function* rootSaga() {
	yield all([bannerSaga(), headerSaga(), laptopSaga(), footerSaga(), sectionSaga(), accessorySaga()])
}
