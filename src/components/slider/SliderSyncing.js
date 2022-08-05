import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
const SliderSyncing = (props) => {
   const [slider1, setSlider1] = useState(null)
   const [slider2, setSlider2] = useState(null)
   const slider1Ref = useRef()
   const slider2Ref = useRef()
   useEffect(() => {
      setSlider1(slider1Ref)
      setSlider2(slider2Ref)
   }, [])
   return (
      <div>
         <Slider
            asNavFor={slider2}
            ref={(slider1) => setSlider1(slider1)}>
            {props?.children}
         </Slider>
         <Slider
            asNavFor={slider1}
            ref={(slider2) => setSlider2(slider2)}
            slidesToShow={3}
            swipeToSlide={true}
            focusOnSelect={true}>
            {props?.children2}
         </Slider>
      </div>
   );
}
export default SliderSyncing;