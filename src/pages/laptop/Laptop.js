import { Product } from 'components'
import { useSelector } from 'react-redux'
import { laptopSelector } from 'redux/selector/laptopSelector'
import './Laptop.scss'

const Laptop = () => {
	const listLaptop = useSelector(laptopSelector)
	const data = () => {
		const isShowLaptopBest = listLaptop.filter((is) => is.show === true)
		const productShow = isShowLaptopBest.length > 8 ? listLaptop.slice(0, 8) : listLaptop
		const showLaptop = productShow.map((item, index) => <Product key={index} product={item} />)
		return showLaptop
	}
	return (
		<div className="laptop">
			<h2 className="title">Laptop bán chạy nhất</h2>
			<div className="products-container">{data()}</div>
		</div>
	)
}
export default Laptop
