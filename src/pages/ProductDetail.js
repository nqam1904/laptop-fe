import React, { useState } from 'react'
import { product } from 'constants/data'
import { Modal, Product, TableTechnique } from 'components'
import Layout from 'layouts/Layout'
import Popup from 'reactjs-popup'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'
import './ProducDetail.scss'

const ProductDetail = () => {
	const [index, setIndex] = useState(0)
	const showImageOther = () => {
		const featureProduct = product.filter((x) => x.id)
		const productShow = featureProduct.length > 3 ? featureProduct.slice(0, 3) : featureProduct
		return productShow?.map((item, i) => (
			<img
				key={i}
				src={item.image}
				alt={item.name}
				className={i === index ? 'small-image selected-image' : 'small-image'}
				onMouseEnter={() => setIndex(i)}
			/>
		))
	}
	return (
		<Layout>
			<div className="product-detail-container">
				<div className='product-detail-left'>
					<div className="image-container">
						<img
							src={
								'https://laptop88.vn/media/product/7246_lenovo_ideapad_gaming_3__1_.jpg'
							}
							className="product-detail-image"
						/>
					</div>
					<div className="small-images-container">{showImageOther()}</div>
				</div>
				<div className="product-detail-right">
					<h1>{product[0].name}</h1>
					<p className="price">{product[0].price}</p>
					<hr />
					<div className='product-detail_info'>
						<h2>Cấu hình:</h2>
						<br />
						{/* option map array  */}
						<div className='product-detail_option'>
							<div className="configuration">
								<span className='title-option'>CPU:</span>
								<label className='item-option'>
									<span>Core™ i7-11800H</span>
								</label>
							</div>
						</div>
						<div className='product-detail_option'>
							<div className="configuration">
								<span className='title-option'>RAM:</span>
								<label className='item-option'>
									<span>16 GB</span>
								</label>
							</div>
						</div>
						<div className='product-detail_option'>
							<div className="configuration">
								<span className='title-option'>Ổ cứng:</span>
								<label className='item-option'>
									<span>SSD M.2 1TB</span>
								</label>
							</div>
						</div>
						<div className='product-detail_option'>
							<div className="configuration">
								<span className='title-option'>Màn hình:</span>
								<label className='item-option'>
									<span>QHD</span>
								</label>
							</div>
						</div>
						<div className='product-detail_option'>
							<div className="configuration">
								<span className='title-option'>VGA:</span>
								<label className='item-option'>
									<span>NVIDIA® GeForce RTX™ 3070</span>
								</label>
							</div>
						</div>
						{/* option map array  */}
						<br />
					</div>
					<h3>Tình trạng:</h3>
					<p>Máy đẹp 99% có xước nhẹ mặt A vết nhỏ ko đáng khó thấy</p>
					<hr />
					<div className="ulti">
						<h3>Chính sách:</h3>
						<p> ✔ Bảo hành chính hãng 12 tháng.</p>
						<p> ✔ Hỗ trợ đổi mới trong 7 ngày.</p>
						<p> ✔ Windows bản quyền tích hợp.</p>
					</div>
					<div className="promition-detail_product">
						<h3 className="title-promotion_product">Quà tặng:</h3>
						<div className="promiton-body_product">
							<span className="item-promtion_product">🎁 Túi chống sốc</span>

							<span className="item-promtion_product">🎁 Thú bông Lôi Điểu MSI</span>

							<span className="item-promtion_product">
								🎁 Giảm ngay 200.000đ khi mua chuột Logitech G203 kèm Laptop Gaming
							</span>
						</div>
					</div>
					<div className='mcredit'>
						<h3>Hỗ trợ trả góp MPOS (Thẻ tín dụng)</h3>
					</div>
					<div className="buttons">
						<Popup
							modal
							trigger={
								<button type="button" className="buy-now">
									Mua ngay
								</button>
							}>
							{(close) => <Modal close={close} />}
						</Popup>
					</div>
				</div>
			</div>

			<Tabs>
				<TabList>
					<Tab>Mô tả</Tab>
					<Tab>Thông số</Tab>
				</TabList>
				<TabPanel style={{ padding: 20 }}>
					<p>{product[0].des}</p>
				</TabPanel>
				<TabPanel style={{ paddingLeft: 20, marginTop: 20 }}>
					<h1 style={{ marginBottom: 20 }}>Thông tin kỹ thuật</h1>
					<TableTechnique configuration={product[0].configuration} />
				</TabPanel>
			</Tabs>

			<div className="maylike-products-wrapper">
				<h2>Bạn có thể tham khảo</h2>
				<div className="marquee">
					<div className="maylike-products-container track">
						{product.map((item) => (
							<Product key={item.id} product={item} />
						))}
					</div>
				</div>
			</div>

		</Layout>
	)
}
export default ProductDetail
