
import { FaRegArrowAltCircleLeft, FaRegArrowAltCircleRight } from 'react-icons/fa'
import Slider from 'react-slick'
import { API_URL } from 'utils/constant'
import './styles.scss'
import _ from 'lodash'
const SimpleSlider = (props) => {
	const PreviousBtn = ({ currentSlide, slideCount, ...props }) => {
		return (
			<FaRegArrowAltCircleLeft color='white' {...props}
				className={
					"slick-prev slick-arrow" +
					(currentSlide === 0 ? " slick-disabled" : "")
				}
				aria-hidden="true"
				aria-disabled={currentSlide === 0 ? true : false}
				type="button" />
		);
	};

	const NextBtn = ({ currentSlide, slideCount, ...props }) => {
		return (
			<FaRegArrowAltCircleRight color='white'
				{...props}
				aria-hidden="true"
				aria-disabled={currentSlide === 0 ? true : false}
				type="button" />
		)
	};

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		autoplay: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		initialSlide: 2,
		prevArrow: <PreviousBtn />,
		nextArrow: <NextBtn />
	}

	return (
		<div className="slider">
			<Slider {...settings}>
				{!_.isEmpty(props?.data) && props?.data?.map((item, index) => (
					<div className="slider_item" key={index}>
						<img
							src={`${API_URL}` + item?.images[0]?.url}
							alt={item?.images[0]?.name}
							className={"image_slider"}
						/>
					</div>
				))}
			</Slider>
		</div>
	)
}

export default SimpleSlider
