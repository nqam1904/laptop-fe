import ProductApi from 'api/productApi'
import { Product } from 'components'
import { useEffect, useState } from 'react'
import './Laptop.scss'

const Laptop = () => {
	const [data, setData] = useState([])
	const getBestLaptop = async () => {
		const res = await ProductApi.getBestProduct()
		if (res.laptops.length > 0) {
			setData(res.laptops)
		} else {
			setData([])
		}
	}
	useEffect(() => {
		getBestLaptop()
	}, [])
	const showList = () => {
		const showLaptop = data.map((item, index) => <Product key={index} product={item} />)
		return showLaptop
	}
	return (
		<div className="laptop">
			<h2 className="title">Laptop bán chạy nhất</h2>
			<div className="products-container">{showList()}</div>
		</div>
	)
}
export default Laptop
