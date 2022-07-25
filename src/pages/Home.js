import { Slider } from 'components'
import Layout from 'layouts/Layout'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getBannerAction } from 'redux/actions/bannerAction'
import { getFooterAction } from 'redux/actions/footerAction'
import { getHeaderAction } from 'redux/actions/headerAction'
import { getCategoryAction, getListLaptopAction } from 'redux/actions/laptopAction'
import { getSectionAction } from 'redux/actions/sectionAction'
import { bannerSelector } from 'redux/selector/bannerSelector'
import { categorySelector, laptopSelector } from 'redux/selector/laptopSelector'
import { getAccessoryAction } from '../redux/actions/accessoryAction'
import Accessory from './accessory/Accessory'
import Laptop from './laptop/Laptop'
import Section from './section/Section'

const Home = () => {
	const dispatch = useDispatch()
	const banners = useSelector(bannerSelector)
	const laptop = useSelector(laptopSelector)
	const category = useSelector(categorySelector)
	useEffect(() => {
		dispatch(getBannerAction())
		dispatch(getHeaderAction())
		dispatch(getListLaptopAction())
		dispatch(getFooterAction())
		dispatch(getSectionAction())
		dispatch(getAccessoryAction())
		dispatch(getCategoryAction())
	}, []);
	return (
		<Layout>
			<Slider data={banners} />
			<Laptop />
			<Section />
			<Accessory />
			{/* <FooterBanner /> */}
		</Layout>
	)
}
export default Home
