import { MessengerChat, Slider } from 'components'
import Layout from 'layouts/Layout'
import { useSelector } from 'react-redux'
import { bannerSelector } from 'redux/selector/bannerSelector'
import { listLaptopHomeSelector } from 'redux/selector/homeSelector'
import Accessory from './accessory/Accessory'
import Laptop from './laptop/Laptop'
import Section from './section/Section'

const Home = () => {
	const banners = useSelector(bannerSelector)

	const laptopCategory = useSelector(listLaptopHomeSelector)

	return (
		<Layout>
			<Slider data={banners} />
			{/* best seller */}
			<Laptop />
			{/* best seller category */}
			<Section data={laptopCategory} />
			{/* best seller category */}
			<Accessory />
			<MessengerChat />
		</Layout>
	)
}
export default Home
