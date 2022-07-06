import { combineReducers } from '@reduxjs/toolkit'
import { connectRouter } from 'connected-react-router'

import { laptopReducer } from './laptopReducer'
const rootReducer = (history) =>
	combineReducers({
		laptop: laptopReducer,
		router: connectRouter(history),
	})
export default rootReducer
