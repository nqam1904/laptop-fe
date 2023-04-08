import { getConfigWeb } from 'constants/common'
import {
	AccessoryByCate,
	AccessoryDetail,
	Home,
	LaptopByCate,
	NotFound,
	ProductDetail,
	SearchProduct,
} from 'pages'
import PropTypes from 'prop-types'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import storage from 'redux-persist/lib/storage'
import { getAccessoryAction } from 'redux/actions/accessoryAction'
import { getBannerAction } from 'redux/actions/bannerAction'
import { getFooterAction } from 'redux/actions/footerAction'
import { getHeaderAction } from 'redux/actions/headerAction'
import { getCategoryAction, getListLaptopAction } from 'redux/actions/laptopAction'
import { headerSelector } from 'redux/selector/headerSeletor'
import { appId, pageId } from 'utils/constant'
const App = ({ history }) => {
	const header = useSelector(headerSelector)
	const dispatch = useDispatch()

	const routeLaptop = () => {
		const listHeader = header?.map((item, index) => (
			<Route
				key={index}
				path={item?.url}
				element={<LaptopByCate title={item.categories[0]?.name} />}
			/>
		))
		return listHeader || []
	}
	const getAllData = () => {
		dispatch(getBannerAction())
		dispatch(getHeaderAction())
		dispatch(getListLaptopAction())
		dispatch(getFooterAction())
		dispatch(getAccessoryAction())
		dispatch(getCategoryAction())
	}
	useEffect(() => {
		getConfigWeb()
		getAllData()
		return () => {
			storage.removeItem('persist:root')
		}
	}, [])
	useEffect(() => {
		window.fbAsyncInit = function () {
			window.FB.init({
				appId: appId,
				cookie: true,
				xfbml: true,
				version: 'v12.0',
			})
		}
		;(function (d, s, id) {
			var js,
				fjs = d.getElementsByTagName(s)[0]
			if (d.getElementById(id)) return
			js = d.createElement(s)
			js.id = id
			js.src = 'https://connect.facebook.net/en_US/sdk.js'
			fjs.parentNode.insertBefore(js, fjs)
		})(document, 'script', 'facebook-jssdk')
	}, [])
	return (
		<Routes history={history}>
			<Route path="/" element={<Home />} />
			{routeLaptop()}
			<Route path="/product/:id" element={<ProductDetail />} />
			<Route path="/accessory/:id" element={<AccessoryDetail />} />
			<Route path="/search" element={<SearchProduct />} />
			<Route path="/accessory" element={<AccessoryByCate title="Accessory" />} />
			<Route path="*" element={<NotFound />} />
			<div className="fb-customerchat" attribution="setup_tool" page_id={pageId}></div>
		</Routes>
	)
}
App.propTypes = {
	history: PropTypes.object,
}
export default App
