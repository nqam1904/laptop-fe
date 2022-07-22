import swal from '@sweetalert/with-react'
import { Modal, TableTechnique } from 'components'
import ReactMarkdown from 'https://esm.sh/react-markdown@7'
import Layout from 'layouts/Layout'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'
import { detailLaptopSelector } from 'redux/selector/laptopSelector'
import { API_URL } from 'utils/constant'
import { formatNumber } from 'utils/function'
import './ProducDetail.scss'
import ProductApi from 'api/productApi'
import { getDetailLaptopAction } from 'redux/actions/laptopAction'
import { useParams } from "react-router-dom";

const ProductDetail = () => {
	const [imagesOther, setImagesOhter] = useState('')
	const detailLaptop = useSelector(detailLaptopSelector)
	const dispatch = useDispatch()
	let { slug } = useParams()
	const getProductDetails = () => {
		dispatch(getDetailLaptopAction(slug))
	}
	useEffect(() => {
		getProductDetails()
		updateView()
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}, []);

	useEffect(() => {
		setImagesOhter(detailLaptop?.[0]?.images?.[0]?.url);
	}, [detailLaptop?.[0]?.images?.[0]?.url])
	const updateView = () => {
		let view = detailLaptop?.[0]?.view
		ProductApi.updateViewLaptop({ id: detailLaptop?.[0]?.id, view: ++view })
	}

	const showImageOther = () => {
		return detailLaptop?.[0]?.images?.map((item, i) => (
			<img
				key={i}
				src={`${API_URL}` + item?.url}
				alt={item?.name}
				className="product-small_images"
				onClick={() => setImagesOhter(item?.url)}
			/>
		))
	}
	return (
		<Layout>
			<div className="product-detail-container">
				<div className='product-detail-left'>
					<div>
						<img
							src={`${API_URL}` + imagesOther}
							className="product-detail-image"
						/>
						<div className="product_slider-image">{showImageOther()}</div>
					</div>

				</div>
				<div className="product-detail-right">
					<h1>{detailLaptop?.[0]?.name}</h1>
					<p className={detailLaptop?.[0]?.price_promotion > 0 ? 'product-promotion' : 'price'}>{formatNumber(detailLaptop?.[0]?.price_promotion > 0 ? detailLaptop?.[0]?.price_promotion : detailLaptop?.[0]?.price)}₫</p>
					{detailLaptop?.[0]?.price_promotion > 0 && <p className="price">{formatNumber(detailLaptop?.[0]?.price_promotion)}₫</p>}
					<hr />
					<div className='product-detail_info'>
						<h2>Cấu hình:</h2>
						<br />
						{/* option map array  */}
						<div className='product-detail_option'>
							<div className="configuration">
								<span className='title-option'>CPU:</span>
								<label className='item-option'>
									<span>{detailLaptop?.[0]?.cpu}</span>
								</label>
							</div>
						</div>
						<div className='product-detail_option'>
							<div className="configuration">
								<span className='title-option'>RAM:</span>
								<label className='item-option'>
									<span>{detailLaptop?.[0]?.ram}</span>
								</label>
							</div>
						</div>
						<div className='product-detail_option'>
							<div className="configuration">
								<span className='title-option'>Ổ cứng:</span>
								<label className='item-option'>
									<span>{detailLaptop?.[0]?.disk}</span>
								</label>
							</div>
						</div>
						<div className='product-detail_option'>
							<div className="configuration">
								<span className='title-option'>Màn hình:</span>
								<label className='item-option'>
									<span>{detailLaptop?.[0]?.display}</span>
								</label>
							</div>
						</div>
						<div className='product-detail_option'>
							<div className="configuration">
								<span className='title-option'>VGA:</span>
								<label className='item-option'>
									<span>{detailLaptop?.[0]?.vga}</span>
								</label>
							</div>
						</div>
						{/* option map array  */}
						<br />
					</div>
					<h3>Tình trạng:</h3>
					<p>{detailLaptop?.[0]?.appearence || ''}</p>
					<hr />
					<div className="util-product">
						<h3>Chính sách:</h3>
						<p> ✔ {detailLaptop?.[0]?.insurance_laptop || ''}</p>
					</div>
					<div className="product-detail_promotion">
						<h3 className="title-promotion_product">Quà tặng:</h3>
						<div className="promiton-body_product">
							<span className="item-promtion_product">
								- Chưa có khuyến mãi.
							</span>
						</div>
					</div>
					<div className='mcredit'>
						<h3>Hỗ trợ trả góp MPOS (Thẻ tín dụng)</h3>
					</div>
					<div className="product-button">
						<button type="button" className="buy-now" onClick={() => swal(
							<Modal />
						)}>
							Mua ngay
						</button>
					</div>
				</div>
			</div>
			<div className="tabs_view">
				<Tabs>
					<TabList>
						<Tab>Mô tả</Tab>
						<Tab>Thông số</Tab>
					</TabList>
					<TabPanel style={{ padding: 20 }}>
						<p className="content_view">{detailLaptop?.[0]?.description || ''}</p>
					</TabPanel>
					<TabPanel style={{ paddingLeft: 20, marginTop: 20 }}>
						<h1 style={{ marginBottom: 20 }}>Thông tin kỹ thuật</h1>
						<TableTechnique configuration={detailLaptop} />
					</TabPanel>
				</Tabs>
			</div>
			{/* <ViewMore/> */}
		</Layout>
	)
}
export default ProductDetail
