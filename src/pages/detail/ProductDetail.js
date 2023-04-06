import swal from '@sweetalert/with-react'
import ProductApi from 'api/productApi'
import { images } from 'assets'
import {
	Chart as ChartJS,
	Filler,
	Legend,
	LineElement,
	PointElement,
	RadialLinearScale,
	Tooltip,
} from 'chart.js'
import { Breadcrumb, SliderSyncing, TableTechnique } from 'components'
import Layout from 'layouts/Layout'
import _ from 'lodash'
import Markdown from 'markdown-to-jsx'
import { useEffect } from 'react'
import { Radar } from 'react-chartjs-2'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'
import { getDetailLaptopAction } from 'redux/actions/laptopAction'
import { footerSelector } from 'redux/selector/footerSelector'
import { detailLaptopSelector } from 'redux/selector/laptopSelector'
import { formatChar, formatNumber, formatSizeDisplay } from 'utils/function'
import './ProducDetail.scss'
const ProductDetail = () => {
	const detailLaptop = useSelector(detailLaptopSelector)
	const {
		coding = 0,
		design = 0,
		video = 0,
		office = 0,
		gaming = 0,
		graphic = 0,
	} = detailLaptop || {}
	const footer = useSelector(footerSelector)
	const location = useLocation()
	const laptopSlug = location.pathname.replace('/product/', '')
	const dispatch = useDispatch()
	ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend)
	const display =
		formatSizeDisplay(detailLaptop?.size_display) +
			'' +
			formatChar(detailLaptop?.pixel_display) +
			' ' +
			formatChar(detailLaptop?.panel_display) +
			' ' +
			formatChar(detailLaptop?.hz_display) +
			' ' +
			detailLaptop?.display || '_'

	const getDetailLaptop = () => {
		dispatch(getDetailLaptopAction(laptopSlug))
	}
	useEffect(() => {
		getDetailLaptop()
		// dispatch(getProdcutViewAction(detailLaptop))
		updateView()
	}, [])
	const options = {
		responsive: true,
		maintainAspectRatio: true, // Set to false to set width and height manually
		width: 100, // Manually set width
		height: 100, // Manually set height,
		scale: {
			ticks: {
				beginAtZero: true,
				fontWeight: 'bold', // Set the font weight to bold
			},
		},
	}
	const dataChart = {
		labels: ['Học tập, văn phòng', 'Lập trình', 'Gaming', 'Designing', '3D Design', 'Video'],
		datasets: [
			{
				label: 'Cấu hình và đặc điểm',
				data: [office, coding, gaming, design, graphic, video],
				fill: true,
				backgroundColor: 'rgba(255, 99, 132, 0.2)',
				borderColor: 'rgb(255, 99, 132)',
				pointBackgroundColor: 'rgb(255, 99, 132)',
				pointBorderColor: '#fff',
				pointHoverBackgroundColor: '#fff',
				pointHoverBorderColor: 'rgb(255, 99, 132)',
				borderWidth: 1,
			},
		],
	}
	const updateView = () => {
		let view = detailLaptop?.view
		ProductApi.updateViewLaptop({ id: detailLaptop?.id, view: ++view })
	}
	const vga = !_.isEmpty(detailLaptop?.watt)
		? formatChar(detailLaptop?.vga_lap) + ' ' + `(${formatChar(detailLaptop?.watt).trim()})`
		: formatChar(detailLaptop?.vga_lap) || '_'

	const disk = !_.isEmpty(detailLaptop?.hdd_lap)
		? formatChar(detailLaptop?.ssd_lap) + ' + ' + formatChar(detailLaptop?.hdd_lap)
		: formatChar(detailLaptop?.ssd_lap)

	return (
		<Layout>
			<div className="detail_container">
				<Breadcrumb product={detailLaptop?.name} category={detailLaptop?.category?.name} />
				<div className="product-detail-container">
					<div className="product-detail-left">
						<div className="product_detail-left-image">
							<SliderSyncing
								images={detailLaptop?.images}
								thumbnail={detailLaptop?.images}
								classNameImage="product-detail-image"
								classNameThumbnail="product-small_images"
								noImage={images.no_image}
							/>
						</div>
					</div>
					<div className="product-detail-right">
						<h1>{detailLaptop?.name}</h1>
						{detailLaptop.sale_out ? (
							<div className="product-sold">Liên hệ</div>
						) : (
							<div className="promotion_price-product">
								<span
									className={
										detailLaptop?.price_promotion > 0 ? 'product-promotion' : 'price'
									}>
									{formatNumber(detailLaptop?.price)}₫
								</span>
								{detailLaptop?.price_promotion > 0 && (
									<p className="price">{formatNumber(detailLaptop?.price_promotion)}₫</p>
								)}
							</div>
						)}

						<hr />
						<div className="product-detail_info">
							{/* option map array  */}
							<div className="product-detail_option">
								<div className="configuration">
									<span className="title-option">CPU:</span>
									<label className="item-option">
										<span>{formatChar(detailLaptop?.cpu_lap) || ''}</span>
									</label>
								</div>
							</div>
							<div className="product-detail_option">
								<div className="configuration">
									<span className="title-option">RAM:</span>
									<label className="item-option">
										<span>{formatChar(detailLaptop?.ram_lap) || ''}</span>
									</label>
								</div>
							</div>
							<div className="product-detail_option">
								<div className="configuration">
									<span className="title-option">Ổ cứng:</span>
									<label className="item-option">
										<span>{disk}</span>
									</label>
								</div>
							</div>
							<div className="product-detail_option">
								<div className="configuration">
									<span className="title-option">Màn hình:</span>
									<label className="item-option">
										<span>{display}</span>
									</label>
								</div>
							</div>
							<div className="product-detail_option">
								<div className="configuration">
									<span className="title-option">VGA:</span>
									<label className="item-option">
										<span>{vga}</span>
									</label>
								</div>
							</div>
							{/* option map array  */}
							<br />
						</div>
						<div className="appearence">
							<span className="appearence_info-title">Tình trạng:</span>
							{/* <h3 className='appearence_info-title'>Tình trạng:</h3> */}
							<p className="appearence_info-sub">{detailLaptop?.appearence || ''}</p>
						</div>
						<hr />
						<div className="util-product">
							<h3>Chính sách:</h3>
							<p> {detailLaptop?.insurance_laptop || ''}</p>
							<br />
							<span className="item-promtion_product">{detailLaptop?.promotion || ''}</span>
						</div>
						<div className="mcredit">
							<h3>Hỗ trợ trả góp MPOS (Thẻ tín dụng)</h3>
						</div>
						<div className="product-button">
							<button
								type="button"
								className="buy-now"
								onClick={() =>
									swal({
										title: 'Thông báo!',
										text: `Bạn vui lòng liên hệ ${footer?.[0]?.phone}`,
										icon: 'info',
									})
								}>
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
							<Markdown className="content_view">{detailLaptop?.description || ''}</Markdown>
						</TabPanel>
						<TabPanel style={{ paddingLeft: 20, marginTop: 20 }}>
							<div className="chart">
								<Radar data={dataChart} options={options} />
							</div>
							<TableTechnique configuration={detailLaptop} />
						</TabPanel>
					</Tabs>
				</div>
			</div>
		</Layout>
	)
}
export default ProductDetail
