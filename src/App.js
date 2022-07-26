import { AccessoryDetail, Home, LaptopByCate, NotFound, ProductDetail, SearchProduct } from 'pages'
import PropTypes from 'prop-types'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import { headerSelector } from 'redux/selector/headerSeletor'
import storage from 'redux-persist/lib/storage';
const App = ({ history }) => {
	const header = useSelector(headerSelector)
	const routeLaptop = () => {
		return header?.map((item, index) => (
			<Route key={index} path={item?.url} element={<LaptopByCate title={item.categories[0]?.name} />} />
		))
	}
	useEffect(() => {
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
			<Route path="*" element={<NotFound />} />
		</Routes>
	)
}
App.propTypes = {
	history: PropTypes.object,
}
export default App
