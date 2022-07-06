import { Home, NotFound, PageAsus, PageDell, ProductDetail } from 'pages'
import PropTypes from 'prop-types'
import { Route, Routes } from 'react-router-dom'
const App = ({ history }) => {
	return (
		<Routes history={history}>
			<Route path="/" element={<Home />} />
			<Route path="/asus" element={<PageAsus />} />
			<Route path="/dell" element={<PageDell />} />
			<Route path="/product/:slug" element={<ProductDetail />} />
			<Route path="*" element={<NotFound />} />
		</Routes>
	)
}
App.propTypes = {
	history: PropTypes.object,
}
export default App
