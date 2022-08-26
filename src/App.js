import { getConfigWeb } from 'constants/common'
import { AccessoryByCate, AccessoryDetail, Home, LaptopByCate, NotFound, ProductDetail, SearchProduct } from 'pages'
import PropTypes from 'prop-types'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route, Routes, useLocation } from 'react-router-dom'
import storage from 'redux-persist/lib/storage'
import { getBannerAction } from 'redux/actions/bannerAction'
import { getFooterAction } from 'redux/actions/footerAction'
import { getHeaderAction } from 'redux/actions/headerAction'
import { getCategoryAction, getDetailLaptopAction, getListLaptopAction } from 'redux/actions/laptopAction'
import { headerSelector } from 'redux/selector/headerSeletor'
import { getAccessoryAction, getAccessoryDetailAction } from 'redux/actions/accessoryAction'
const App = ({ history }) => {
	const header = useSelector(headerSelector)
	const dispatch = useDispatch()
	const location = useLocation()

	const routeLaptop = () => {
		const listHeader = header?.map((item, index) => (
			<Route key={index} path={item?.url} element={<LaptopByCate title={item.categories[0]?.name} />} />
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
	// console.log(JSON.parse(window.localStorage.getItem('persist:root')), 'aasdasd')
	const checkLocationPath = (location) => {
		if (location.pathname.includes('/product/')) {
			const laptop = location.pathname.replace('/product/', '').replace('laptop', '').split('_').join(' ').trim()
			dispatch(getDetailLaptopAction(laptop))
		} else if (location.pathname.includes('/accessory/')) {
			const accessory = location.pathname.replace('/accessory/', '').split('_').join(' ').trim()
			dispatch(getAccessoryDetailAction(accessory))
		} else {
			return <Route path="*" element={<NotFound />} />
		}
	}
	useEffect(() => {
		getConfigWeb()
		getAllData()
		checkLocationPath(location)
		return () => {
			storage.removeItem('persist:root')
		}
	}, [])
	return (
		<Routes history={history}>
			<Route path="/" element={<Home />} />
			{routeLaptop()}
			<Route path="/product/:slug" element={<ProductDetail />} />
			<Route path="/accessory/:slug" element={<AccessoryDetail />} />
			<Route path="/search" element={<SearchProduct />} />
			<Route path="/accessory" element={<AccessoryByCate title="Accessory" />} />
			<Route path="*" element={<NotFound />} />
		</Routes>
	)
}
App.propTypes = {
	history: PropTypes.object,
}
export default App
