import { all } from 'redux-saga/effects'
import bannerSaga from './bannerSaga'
import headerSaga from './headerSaga'
export function* rootSaga() {
	yield all([bannerSaga(), headerSaga()])
}
