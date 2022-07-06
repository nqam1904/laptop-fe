import { Slider, FooterBanner } from 'components'

import Layout from 'layouts/Layout'
import Laptop from './Laptop'
import Dell from './Dell'
import Asus from './Asus'

import React from 'react'
import Accessory from './Accessory'

const Home = () => {
	return (
		<Layout>
			<Slider />
			<Laptop />
			<Dell />
			<Asus />
			<Accessory />
			<FooterBanner />
		</Layout>
	)
}
export default Home
