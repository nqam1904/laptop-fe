import swal from '@sweetalert/with-react'
import { Modal, TableTechnique, ViewMore } from 'components'
import Layout from 'layouts/Layout'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'
import { detailLaptopSelector } from 'redux/selector/laptopSelector'
import { API_URL } from 'utils/constant'
import { formatNumber } from 'utils/function'
import './ProducDetail.scss'
import ProductApi from 'api/productApi'
import { getDetailLaptopAction, getProdcutViewAction } from 'redux/actions/laptopAction'
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
		dispatch(getProdcutViewAction(detailLaptop))
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
					<div className='promotion_price-product'>
						<p className={detailLaptop?.[0]?.price_promotion > 0 ? 'product-promotion' : 'price'}>{formatNumber(detailLaptop?.[0]?.price_promotion > 0 ? detailLaptop?.[0]?.price_promotion : detailLaptop?.[0]?.price)}???</p>
						{detailLaptop?.[0]?.price_promotion > 0 && <p className="price">{formatNumber(detailLaptop?.[0]?.price_promotion)}???</p>}
					</div>
					<hr />
					<div className='product-detail_info'>
						<h2>C???u h??nh:</h2>
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
								<span className='title-option'>??? c???ng:</span>
								<label className='item-option'>
									<span>{detailLaptop?.[0]?.disk}</span>
								</label>
							</div>
						</div>
						<div className='product-detail_option'>
							<div className="configuration">
								<span className='title-option'>M??n h??nh:</span>
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
					<hr />
					<div className='appearence'>
						<h3 className='appearence_info-title'>T??nh tr???ng:</h3>
						<p className='appearence_info-sub'>{detailLaptop?.[0]?.appearence || ''}</p>
					</div>
					<hr />
					<div className="util-product">
						<h3>Ch??nh s??ch:</h3>
						<p> ??? {detailLaptop?.[0]?.insurance_laptop || ''}</p>
					</div>
					<div className="product-detail_promotion">
						<h3 className="title-promotion_product">Qu?? t???ng:</h3>
						<div className="promiton-body_product">
							<span className="item-promtion_product">
								- Ch??a c?? khuy???n m??i.
							</span>
						</div>
					</div>
					<div className='mcredit'>
						<h3>H??? tr??? tr??? g??p MPOS (Th??? t??n d???ng)</h3>
					</div>
					<div className="product-button">
						<button type="button" className="buy-now" onClick={() => swal({
							title: 'Th??ng b??o!',
							text: 'B???n vui l??ng li??n h??? 03399895154',
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
						<Tab>M?? t???</Tab>
						<Tab>Th??ng s???</Tab>
					</TabList>
					<TabPanel style={{ padding: 20 }}>
						<p className="content_view">{detailLaptop?.[0]?.description || ''}</p>
					</TabPanel>
					<TabPanel style={{ paddingLeft: 20, marginTop: 20 }}>
						<h1 style={{ marginBottom: 20 }}>Th??ng tin k??? thu???t</h1>
						<TableTechnique configuration={detailLaptop} />
					</TabPanel>
				</Tabs>
			</div>
			<ViewMore />
		</Layout>
	)
}
export default ProductDetail
