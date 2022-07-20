
import React, { Component } from 'react'
import Slider from 'react-slick'
import { API_URL } from 'utils/constant'
import LeftArrow from "assets/left-arrow.svg"
import RightArrow from "assets/right-arrow.svg"
import './styles.scss'
import { images } from 'assets'
class SimpleSlider extends Component {
	constructor(props) {
		super(props);
		let { className, onClick, isDetail } = props;
		// this.className = className,
		// 	this.onClick = onClick,
		// 	this.isDetail = isDetail

	}
	SlickArrowLeft = () => (
		<img src={LeftArrow} alt="prevArrow" {...this.props} />
	);

	SlickArrowRight = () => (
		<img src={RightArrow} alt="nextArrow" {...this.props} />
	);
	PreviousBtn = () => {
		return (
			<div className={this.className} onClick={this.onClick}>
				<img src={images.ic_arrow_left}  width={25} height={25} />
			</div>
		);
	};

	NextBtn = () => {
		return (
			<div className={this.className} onClick={this.onClick}>
				<img src={images.ic_arrow_right} width={25} height={25} />
			</div>
		);
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
			nextArrow: this.NextBtn(),
		}
		return (
			<div className="slider">
				<Slider {...settings}>
					{this.props.data?.map((item, index) => (
						<div className="slider_item" key={index}>
							<img
								src={`${API_URL}` + item?.images[0]?.url}
								alt={item?.images[0]?.name}
								className={this.isDetail ? "image_slider-detail" : "image_slider"}
							/>
						</div>
					))}
				</Slider>
			</div>
		)
	}
}
export default SimpleSlider
