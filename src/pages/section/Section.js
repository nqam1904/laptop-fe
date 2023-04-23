import { Product } from 'components'
import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { getLaptopByCateAction } from 'redux/actions/laptopAction'
import './index.scss'

const Section = (props) => {
	const { data } = props || []
	const dispatch = useDispatch()
	const showProduct = () => {
		return data?.map((item, index) => {
			return (
				<div key={index}>
					<h2 className="title_cate">{item?.category?.name}</h2>
					<div className="section_container-product">
						<Product isHeader product={item.laptop} />
					</div>
					<Link
						to={`/${item?.category?.name}`}
						onClick={() => dispatch(getLaptopByCateAction(item?.category?.name))}
						className="btn_link">
						<button type="button" className="section_btn">
							Xem thêm
						</button>
					</Link>
				</div>
			)
		})
	}

	return (
		<div className="laptop">
			<div className="section_container">{showProduct()}</div>
		</div>
	)
}
export default React.memo(Section)
