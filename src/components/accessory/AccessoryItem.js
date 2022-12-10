import { images } from 'assets'
import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { getAccessoryDetailAction } from 'redux/actions/accessoryAction'
import { API_URL } from 'utils/constant'
import { formatNumber } from 'utils/function'
import './index.scss'
import slugify from 'react-slugify'

const AccessoryItem = (props) => {
	const dispatch = useDispatch()
	const slug = slugify(props?.accessory?.slug, {
		delimiter: '_',
	})

	return (
		<div>
			<Link
				to={`/accessory/${props?.accessory?.id}`}
				onClick={() => dispatch(getAccessoryDetailAction(props?.accessory?.id))}>
				<div className="accessory-card">
					{props?.accessory?.sale_out && (
						<div className="sold_out">
							<span>Liên hệ</span>
						</div>
					)}
					<img
						src={`${API_URL}` + props?.accessory?.images?.[0]?.url}
						onError={({ currentTarget }) => {
							currentTarget.onerror = null // prevents looping
							currentTarget.src = images.no_image
						}}
						width={'100%'}
						height={250}
						className="accessory-image"
						alt={props?.name}
					/>
					<p className="accessory-name">{props?.accessory?.name}</p>
					<p className="accessory-price">
						{props.accessory?.sale_out
							? 'Liên hệ'
							: `Giá: ${formatNumber(props?.accessory?.price_promotion)}₫`}
					</p>
				</div>
			</Link>
		</div>
	)
}

export default React.memo(AccessoryItem)
