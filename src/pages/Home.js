import { Slider } from 'components'
import Layout from 'layouts/Layout'
import { useSelector } from 'react-redux'
import { bannerSelector } from 'redux/selector/bannerSelector'
import { categorySelector, laptopSelector } from 'redux/selector/laptopSelector'
import Accessory from './accessory/Accessory'
import Laptop from './laptop/Laptop'
import Section from './section/Section'

const Home = () => {
	const banners = useSelector(bannerSelector)
	const laptop = useSelector(laptopSelector)
	const category = useSelector(categorySelector)
	

	const dataSection = category?.filter(i => i.show === true)?.map((item) => {
		const dataFilter = laptop.filter(itemLaptop => itemLaptop?.category?.name === item?.name)
		return {
			dataFilter,
			nameSec: item?.name
		}
	})
	return (
		<Layout>
			<Slider data={banners} />
			<Laptop />
			<Section data={dataSection} />
			<Accessory />
		</Layout>
	)
}
export default Home
