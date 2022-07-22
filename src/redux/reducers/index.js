import { combineReducers } from '@reduxjs/toolkit'
import { connectRouter } from 'connected-react-router'
import { accessoryReducer } from './accessoryReducer'
import { bannerReducer } from './bannerReducer'
import { footerReducer } from './footerReducer'
import { headerReducer } from './headerReducer'
import { laptopReducer } from './laptopReducer'
import { sectionReducer } from './sectionReducer'
const rootReducer = (history) =>
	combineReducers({
		laptop: laptopReducer,
		banner: bannerReducer,
		header: headerReducer,
		footer: footerReducer,
		section: sectionReducer,
		accessory: accessoryReducer,
		router: connectRouter(history),
	})
export default rootReducer
