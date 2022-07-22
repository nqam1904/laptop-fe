import { AccessoryItem } from 'components';
import { useSelector } from 'react-redux';
import { accessorySelector } from 'redux/selector/accessorySelector';
import "./Accessory.scss";

const Accessory = () => {
	const accessory = useSelector(accessorySelector)
	const showProduct = () => {
		return accessory?.map((item, i) => <AccessoryItem key={i} product={item} />)
	}
	return (
		<div className="laptop">
			<h2 className="title">Phụ kiện</h2>
			<div className="products-container">{showProduct()}</div>
		</div>
	)
}
export default Accessory
