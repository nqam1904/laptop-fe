
import { images } from 'assets'
import { Component } from 'react'
import { FaRegArrowAltCircleLeft, FaRegArrowAltCircleRight } from 'react-icons/fa'
import Slider from 'react-slick'
import { API_URL } from 'utils/constant'
import './styles.scss'
class SimpleSlider extends Component {
	constructor(props) {
		super(props);
	}

	PreviousBtn = () => {
		return (
			<FaRegArrowAltCircleLeft color='white' />
		);
	};

	NextBtn = () => {
		return (
			<FaRegArrowAltCircleRight color='white' />
		)
	};
	render() {
		const settings = {
			dots: true,
			infinite: true,
			speed: 500,
			autoplay: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			initialSlide: 2,
			prevArrow: this.PreviousBtn(),
			nextArrow: this.NextBtn()
		}
		return (
			<div className="slider">
				<Slider {...settings}>
					{this.props.data?.map((item, index) => (
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
}
export default SimpleSlider
