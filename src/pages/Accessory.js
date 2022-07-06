import { Product } from 'components'
import { accessory } from '../constants/data'
const Accessory = () => {
	const showProduct = () => {
		return accessory?.map((item, i) => <Product key={i} product={item} />)
	}
	return (
		<div className="laptop">
			<h2 className="title">Phụ kiện</h2>
			<div className="products-container">{showProduct()}</div>
		</div>
	)
}
export default Accessory
