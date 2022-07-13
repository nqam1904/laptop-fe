import { all } from 'redux-saga/effects'
import bannerSaga from './bannerSaga'
import headerSaga from './headerSaga'
import laptopSaga from './laptopSaga'
export function* rootSaga() {
	yield all([bannerSaga(), headerSaga(), laptopSaga()])
}
