
import React, { Component } from 'react'
import Slider from 'react-slick'
import './styles.scss'
class SimpleSlider extends Component {
	constructor(props) {
		super(props);
		const { isDetail } = props;
		this.isDetail = isDetail

	}

	render() {
		const BASE_URL = "http://localhost:1337"
		const settings = {
			dots: true,
			infinite: true,
			speed: 1000,
			autoplay: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			responsive: [
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
						infinite: true,
						dots: true,
					},
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
						initialSlide: 1,
					},
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
					},
				},
			],
		}
		return (
			<div className={this.isDetail ? "slider_isDetal" : "slider"}>
				<Slider {...settings}>
					{this.props.data?.map((item, index) => (
						<div className="slider_item" key={index}>
							<img
								src={`${BASE_URL}` + item?.images[0]?.url}
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
