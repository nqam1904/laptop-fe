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

const Home = () => {
	const dipatch = useDispatch()
	const banners = useSelector(bannerSelector)
	useEffect(() => {
		dipatch(getBannerAction())
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
