import React, { Component } from 'react'
import Slider from 'react-slick'
import './styles.css'
class SimpleSlider extends Component {
	constructor(props) {
		super(props);
		const { isDetail } = props;
		this.isDetail = isDetail
	}
	render() {

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
					<div className="slider_item">
						<img
							src="https://images.fpt.shop/unsafe/filters:quality(5)/fptshop.com.vn/uploads/images/tin-tuc/143035/Originals/NF_1200x628_1644214085.png"
							alt="example"
							className={this.isDetail ? "image_slider-detail" : "image_slider"}
						/>
					</div>
					<div className="slider_item">
						<img
							src="https://cdn1.hoanghamobile.com/tin-tuc/wp-content/uploads/2022/01/271594880_4875218375849949_8554620656839742886_n.jpg"
							alt="example"
							className={this.isDetail ? "image_slider-detail" : "image_slider"}
						/>
					</div>
					<div className="slider_item">
						<img
							src="https://images.fpt.shop/unsafe/filters:quality(5)/fptshop.com.vn/uploads/images/tin-tuc/144787/Originals/NF_1200x628.png"
							alt="example"
							className={this.isDetail ? "image_slider-detail" : "image_slider"}
						/>
					</div>
				</Slider>
			</div>
		)
	}
}
export default SimpleSlider
