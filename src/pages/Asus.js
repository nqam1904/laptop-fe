import { Product } from 'components'
import { history } from 'redux/store'
import { product } from '../constants/data'
const Asus = () => {
	const showProduct = (props) => {
		const isProd = product.filter((x) => x.category === 'Asus')
		const productShow = isProd.length > 4 ? isProd.slice(0, 4) : isProd
		return productShow?.map((item, i) => <Product key={i} product={item} />)
	}
	const show_more = () => {
		history.push('/asus')
		window.location.reload()
	}
	return (
		<div className="laptop">
			<h2 className="title">Asus</h2>
			<div className="products-container">{showProduct()}</div>
			<div className="buttons">
				<button type="button" className="show_more" onClick={show_more}>
					Xem thêm
				</button>
			</div>
		</div>
	)
}
export default Asus
