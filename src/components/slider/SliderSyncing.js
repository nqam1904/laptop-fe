import React, { useEffect, useRef, useState } from "react";
import { FaRegArrowAltCircleLeft, FaRegArrowAltCircleRight } from "react-icons/fa";
import Slider from "react-slick";
import { API_URL } from "utils/constant";
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
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: <></>,
      nextArrow: <></>
   };
   const settings2 = {
      prevArrow: <PreviousBtn />,
      nextArrow: <NextBtn />
   }
   return (
      <div className="slider_container">
         <div className="slider_1">
            <Slider
               {...settings}
               asNavFor={slider2}
               ref={(slider1) => setSlider1(slider1)}>
               {props?.images?.map((item, i) => (
                  <img
                     key={i}
                     src={`${API_URL}` + item?.url}
                     alt={item?.name}
                     className={props?.classNameImage}
                     onError={({ currentTarget }) => {
                        currentTarget.onerror = null; // prevents looping
                        currentTarget.src = props?.noImage
                     }}
                  />
               ))}
            </Slider>
         </div>
         <div className="slider_2">
            <Slider
               {...settings2}
               asNavFor={slider1}
               ref={(slider2) => setSlider2(slider2)}
               slidesToShow={3}
               swipeToSlide={true}
               focusOnSelect={true}>
               {props?.thumbnail?.map((item, i) => (
                  <img
                     key={i}
                     src={`${API_URL}` + item?.url}
                     alt={item?.name}
                     className=""
                     onError={({ currentTarget }) => {
                        currentTarget.onerror = null; // prevents looping
                        currentTarget.src = props?.noImage

                     }}
                  />
               ))}
            </Slider>
         </div>
      </div>
   );
}
export default SliderSyncing;