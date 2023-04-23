import { useEffect, useRef, useState } from 'react'
import { FaRegArrowAltCircleLeft, FaRegArrowAltCircleRight } from 'react-icons/fa'
import Slider from 'react-slick'
import { API_URL } from 'utils/constant'
import { Container, ProductCarouselArrow } from './styles'
import './styles2.scss'

const SliderSyncing = (props) => {
	const [slider1, setSlider1] = useState(null)
	const [slider2, setSlider2] = useState(null)
	const slider1Ref = useRef()
	const slider2Ref = useRef()

	useEffect(() => {
		setSlider1(slider1Ref)
		setSlider2(slider2Ref)
	}, [])
	const PreviousBtn = ({ currentSlide, slideCount, ...props }) => {
		return (
			<ProductCarouselArrow>
				<div className="icon_arrow-left">
					<FaRegArrowAltCircleLeft
						color="white"
						{...props}
						className={
							'slick-prev slick-arrow' + (currentSlide === 0 ? ' slick-disabled' : '')
						}
						aria-hidden="true"
						aria-disabled={currentSlide === 0 ? true : false}
						type="button"
					/>
				</div>
			</ProductCarouselArrow>
		)
	}

	const NextBtn = ({ currentSlide, slideCount, ...props }) => {
		return (
			<ProductCarouselArrow>
				<FaRegArrowAltCircleRight
					color="white"
					{...props}
					aria-hidden="true"
					aria-disabled={currentSlide === 0 ? true : false}
					type="button"
				/>
			</ProductCarouselArrow>
		)
	}
	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: <></>,
		nextArrow: <></>,
	}
	const settings2 = {
		prevArrow: <PreviousBtn />,
		nextArrow: <NextBtn />,
	}
	return (
		<Container>
			<div className="slider_main">
				<Slider
					{...settings}
					asNavFor={slider2}
					arrows={false}
					ref={(slider1) => setSlider1(slider1)}>
					{props?.images?.map((item, i) => (
						<div className="slider_main-item">
							<img
								key={i}
								src={`${API_URL}` + item?.url}
								alt={item?.name}
								width="100%"
								height="100%"
								className="slider_main-image"
								onError={({ currentTarget }) => {
									currentTarget.onerror = null // prevents looping
									currentTarget.src = props?.noImage
								}}
							/>
						</div>
					))}
				</Slider>
			</div>
			<div className="slider_child">
				<Slider
					{...settings2}
					asNavFor={slider1}
					ref={(slider2) => setSlider2(slider2)}
					slidesToShow={props?.thumbnail?.length > 2 ? 3 : 2}
					slidesToScroll={1}
					infinite={true}
					swipeToSlide={true}
					focusOnSelect={true}>
					{props?.thumbnail?.map((item, i) => (
						<div className="slider_child-item">
							<img
								key={i}
								src={`${API_URL}` + item?.url}
								alt={item?.name}
								width="100%"
								height="100%"
								className="slider_child-image-child"
								onError={({ currentTarget }) => {
									currentTarget.onerror = null // prevents looping
									currentTarget.src = props?.noImage
								}}
							/>
						</div>
					))}
				</Slider>
			</div>
		</Container>
	)
}
export default SliderSyncing
