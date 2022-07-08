import { combineReducers } from '@reduxjs/toolkit'
import { connectRouter } from 'connected-react-router'
import { bannerReducer } from './bannerReducer'
import { headerReducer } from './headerReducer'

import { laptopReducer } from './laptopReducer'
const rootReducer = (history) =>
	combineReducers({
		laptop: laptopReducer,
		banner: bannerReducer,
		header: headerReducer,
		router: connectRouter(history),
	})
export default rootReducer
