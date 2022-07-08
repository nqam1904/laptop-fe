import { all } from 'redux-saga/effects'
import bannerSaga from './bannerSaga'
export function* rootSaga() {
	yield all([bannerSaga()])
}
