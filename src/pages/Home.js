import { Slider } from 'components'
import Layout from 'layouts/Layout'
import Laptop from './laptop/Laptop'
import Section from './section/Section'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getHeaderAction } from 'redux/actions/headerAction'
import { getListLaptopAction } from 'redux/actions/laptopAction'
import { bannerSelector } from 'redux/selector/bannerSelector'
import { getBannerAction } from 'redux/actions/bannerAction'
import { getFooterAction } from 'redux/actions/footerAction'
import { getSectionAction } from 'redux/actions/sectionAction'

const Home = () => {
	const dispatch = useDispatch()
	const banners = useSelector(bannerSelector)
	useEffect(() => {
		dispatch(getBannerAction())
		dispatch(getHeaderAction())
		dispatch(getListLaptopAction())
		dispatch(getFooterAction())
		dispatch(getSectionAction())
	}, []);
	return (
		<Layout>
			<Slider data={banners} />
			<Laptop />
			<Section />
			{/* <Accessory /> */}
			{/* <FooterBanner /> */}
		</Layout>
	)
}
export default Home
