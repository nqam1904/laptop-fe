import { Slider, FooterBanner } from 'components'

import Layout from 'layouts/Layout'
import Laptop from './Laptop'
import Dell from './Dell'
import Asus from './Asus'

import React, { useEffect } from 'react'
import Accessory from './Accessory'
import { useDispatch, useSelector } from 'react-redux'
import { bannerSelector } from 'redux/selector/bannerSelector'
import { getBannerAction } from '../redux/actions/bannerAction';
import { getHeaderAction } from 'redux/actions/headerAction'
import { getListLaptopAction } from 'redux/actions/laptopAction'

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
			<Dell />
			<Asus />
			<Accessory />
			<FooterBanner />
		</Layout>
	)
}
export default Home
