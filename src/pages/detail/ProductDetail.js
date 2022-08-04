import swal from '@sweetalert/with-react'
import ProductApi from 'api/productApi'
import { images } from 'assets'
import { Breadcrumb, TableTechnique } from 'components'
import Layout from 'layouts/Layout'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'
import { getProdcutViewAction } from 'redux/actions/laptopAction'
import { footerSelector } from 'redux/selector/footerSelector'
import { detailLaptopSelector } from 'redux/selector/laptopSelector'
import { API_URL } from 'utils/constant'
import { formatNumber } from 'utils/function'
import './ProducDetail.scss'

const ProductDetail = () => {
	const [imagesOther, setImagesOhter] = useState('')
	const detailLaptop = useSelector(detailLaptopSelector)
	const footer = useSelector(footerSelector)
	const dispatch = useDispatch()

	useEffect(() => {
		updateView()
		dispatch(getProdcutViewAction(detailLaptop))
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}, []);

	useEffect(() => {
		setImagesOhter(detailLaptop?.images?.[0]?.url);
	}, [detailLaptop?.images?.[0]?.url])
	const updateView = () => {
		let view = detailLaptop?.view
		ProductApi.updateViewLaptop({ id: detailLaptop?.id, view: ++view })
	}
	const showImageOther = () => {
		return detailLaptop?.images?.map((item, i) => (
			<img
				key={i}
				src={`${API_URL}` + item?.url}
				alt={item?.name}
				className="product-small_images"
				onError={({ currentTarget }) => {
					currentTarget.onerror = null; // prevents looping
					currentTarget.src = images.no_image;
				}}
				onClick={() => setImagesOhter(item?.url)}
			/>
		))
	}
	return (
		<Layout>
			<Breadcrumb style={{ marginTop: '5rem' }} product={detailLaptop?.name} category={detailLaptop?.category?.name} />
			<div className="product-detail-container">
				<div className='product-detail-left'>
					<div className='product_detail-left-image'>
						<img
							src={`${API_URL}` + imagesOther}
							className="product-detail-image"
							onError={({ currentTarget }) => {
								currentTarget.onerror = null; // prevents looping
								currentTarget.src = images.no_image;
							}}
						/>
						<div className="product_slider-image">{showImageOther()}</div>
					</div>

				</div>
				<div className="product-detail-right">
					<h1>{detailLaptop?.name}</h1>
					<div className='promotion_price-product'>
						<span className={detailLaptop?.price_promotion > 0 ? 'product-promotion' : 'price'}>{formatNumber(detailLaptop?.price)}₫</span>
						{detailLaptop?.price_promotion > 0 && <p className="price">{formatNumber(detailLaptop?.price_promotion)}₫</p>}
					</div>
					<hr />
					<div className='product-detail_info'>
						<h2>Cấu hình:</h2>
						<br />
						{/* option map array  */}
						<div className='product-detail_option'>
							<div className="configuration">
								<span className='title-option'>CPU:</span>
								<label className='item-option'>
									<span>{detailLaptop?.cpu}</span>
								</label>
							</div>
						</div>
						<div className='product-detail_option'>
							<div className="configuration">
								<span className='title-option'>RAM:</span>
								<label className='item-option'>
									<span>{detailLaptop?.ram}</span>
								</label>
							</div>
						</div>
						<div className='product-detail_option'>
							<div className="configuration">
								<span className='title-option'>Ổ cứng:</span>
								<label className='item-option'>
									<span>{detailLaptop?.disk}</span>
								</label>
							</div>
						</div>
						<div className='product-detail_option'>
							<div className="configuration">
								<span className='title-option'>Màn hình:</span>
								<label className='item-option'>
									<span>{detailLaptop?.display}</span>
								</label>
							</div>
						</div>
						<div className='product-detail_option'>
							<div className="configuration">
								<span className='title-option'>VGA:</span>
								<label className='item-option'>
									<span>{detailLaptop?.vga}</span>
								</label>
							</div>
						</div>
						{/* option map array  */}
						<br />
					</div>
					<div className='appearence'>
						<span className='appearence_info-title'>Tình trạng:</span>
						{/* <h3 className='appearence_info-title'>Tình trạng:</h3> */}
						<p className='appearence_info-sub'>{detailLaptop?.appearence || ''}</p>
					</div>
					<hr />
					<div className="util-product">
						<h3>Chính sách:</h3>
						<p> {detailLaptop?.insurance_laptop || ''}</p>
						<br />
						<span className="item-promtion_product">
							{detailLaptop?.promotion || ''}
						</span>
					</div>
					<div className='mcredit'>
						<h3>Hỗ trợ trả góp MPOS (Thẻ tín dụng)</h3>
					</div>
					<div className="product-button">
						<button type="button" className="buy-now" onClick={() => swal({
							title: 'Thông báo!',
							text: `Bạn vui lòng liên hệ ${footer?.[0]?.phone}`,
							icon: 'info',
						})}>
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
						<p className="content_view">{detailLaptop?.description || ''}</p>
					</TabPanel>
					<TabPanel style={{ paddingLeft: 20, marginTop: 20 }}>
						<h1 style={{ marginBottom: 20 }}>Thông tin kỹ thuật</h1>
						<TableTechnique configuration={detailLaptop} />
					</TabPanel>
				</Tabs>
			</div>
			{/* <ViewMore /> */}
		</Layout>
	)
}
export default ProductDetail
