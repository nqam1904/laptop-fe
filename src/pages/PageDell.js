import { Product, Slider } from 'components'
import Layout from 'layouts/Layout'
import React from 'react'
import { filterPice, product } from '../constants/data'
const PageDell = () => {
	const showProduct = () => {
		const isProd = product.filter((x) => x.category === 'Dell')
		return isProd?.map((item, i) => <Product key={i} product={item} />)
	}
	const filter = () => {
		alert('Demo')
	}
	return (
		<Layout>
			<Slider />
			<div className="laptop">
				<h2 className="title">Dell</h2>
				<div className="filter_price">
					<div className="block_price">
						{filterPice.map((item, i) => (
							<p className="price_filter" onClick={filter}>
								{item.title}
							</p>
						))}
					</div>
				</div>
				<div className="products-container">{showProduct()}</div>
			</div>
		</Layout>
	)
}
export default PageDell
