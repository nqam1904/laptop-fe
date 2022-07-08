import { Product, Slider } from 'components'
import Layout from 'layouts/Layout'
import React from 'react'
import { filterPice, product } from '../constants/data'
import "./PageAsus.scss"

const PageAsus = () => {
	const showProduct = () => {
		const isProd = product.filter((x) => x.category === 'Asus')
		const productShow = isProd.length > 4 ? isProd.slice(0, 4) : isProd
		return productShow?.map((item, i) => <Product key={i} product={item} />)
	}
	const filter = () => {
		alert('Demo')
	}
	return (
		<Layout>
			<Slider isDetail={true} />
			<div className="laptop">
				<h2 className="title">Asus</h2>
				<div className="filter_price">
					<div className="block_price">
						{filterPice.map((item, i) => (
							<div key={i}>
								<p className="price_filter" onClick={filter}>
									{item.title}
								</p>
							</div>
						))}
					</div>
				</div>
				<div className="products-container">{showProduct()}</div>
			</div>
		</Layout>
	)
}
export default PageAsus
