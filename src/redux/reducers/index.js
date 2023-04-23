import { combineReducers } from '@reduxjs/toolkit'
import { connectRouter } from 'connected-react-router'
import { accessoryReducer } from './accessoryReducer'
import { bannerReducer } from './bannerReducer'
import { footerReducer } from './footerReducer'
import { headerReducer } from './headerReducer'
import { homeReducer } from './homeReducer'
import { laptopReducer } from './laptopReducer'
const rootReducer = (history) =>
	combineReducers({
		laptop: laptopReducer,
		banner: bannerReducer,
		header: headerReducer,
		footer: footerReducer,
		accessory: accessoryReducer,
		home: homeReducer,
		router: connectRouter(history),
	})
export default rootReducer
