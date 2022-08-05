import { AccessoryItem } from 'components';
import { useSelector } from 'react-redux';
import { accessorySelector } from 'redux/selector/accessorySelector';
import "./Accessory.scss";

const Accessory = () => {
	const accessory = useSelector(accessorySelector)
	const showProduct = () => {
		const isShowAccessory = accessory.filter((is) => is.show === true)
		const accessoryShow = isShowAccessory.length > 4 ? isShowAccessory.slice(0, 4) : isShowAccessory
		return accessoryShow?.map((item, i) => <AccessoryItem key={i} accessory={item} />)
	}
	return (
		<div className="laptop">
			<h2 className="title">Phụ kiện</h2>
			<div className="products-container">{showProduct()}</div>
		</div>
	)
}
export default Accessory
