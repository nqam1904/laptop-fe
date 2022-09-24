import { getConfigWeb } from 'constants/common'
import { AccessoryByCate, AccessoryDetail, Home, LaptopByCate, NotFound, ProductDetail, SearchProduct } from 'pages'
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
const App = ({ history }) => {
	const header = useSelector(headerSelector)
	const dispatch = useDispatch()

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
	useEffect(() => {
		getConfigWeb()
		getAllData()
		return () => {
			storage.removeItem('persist:root')
		}
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
		</Routes>
	)
}
App.propTypes = {
	history: PropTypes.object,
}
export default App
