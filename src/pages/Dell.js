import { Product } from 'components'
import React from 'react'
import { history } from 'redux/store'
import { product } from '../constants/data'
import "./Dell.scss"

const Dell = () => {
	const showProduct = () => {
		const isProd = product.filter((x) => x.category === 'Dell')
		const productShow = isProd.length > 4 ? isProd.slice(0, 4) : isProd
		return productShow?.map((item, i) => <Product key={i} product={item} />)
	}
	const show_more = () => {
		history.push('/dell')
		window.location.reload()
	}
	return (
		<div className="laptop">
			<h2 className="title">Dell</h2>
			<div className="products-container">{showProduct()}</div>
			<div className="buttons">
				<button type="button" className="show_more" onClick={show_more}>
					Xem thêm
				</button>
			</div>
		</div>
	)
}
export default Dell
