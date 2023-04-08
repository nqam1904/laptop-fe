const API_URL = process.env.REACT_APP_URL
const dev = process.env.ENVIROMENT
const pageId = process.env.PAGE_ID_FACEBOOK
const appId = process.env.APP_ID_FACEBOOK
const screen = {
	mobile: 768,
	minTablet: 768,
	maxTablet: 1024,
	desktop: 1024,
}
const screenWidth = window.screen.width
const screenHeight = window.screen.height

export { API_URL, screen, dev, screenWidth, screenHeight, pageId, appId }
