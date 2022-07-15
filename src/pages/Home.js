import { Slider } from 'components'

import Layout from 'layouts/Layout'
import Laptop from './laptop/Laptop'

import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getHeaderAction } from 'redux/actions/headerAction'
import { getListLaptopAction } from 'redux/actions/laptopAction'
import { bannerSelector } from 'redux/selector/bannerSelector'
import { getBannerAction } from '../redux/actions/bannerAction'

const Home = () => {
	const dispatch = useDispatch()
	const banners = useSelector(bannerSelector)
	useEffect(() => {
		dispatch(getBannerAction())
		dispatch(getHeaderAction())
		dispatch(getListLaptopAction())
	}, []);
	return (
		<Layout>
			<Slider data={banners} />
			<Laptop />
			{/* <Dell />
			<Asus />
			<Accessory />
			<FooterBanner /> */}
		</Layout>
	)
}
export default Home
