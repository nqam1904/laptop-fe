import Slider from 'react-slick';
import { useState, useEffect } from 'react';
let slidesToShow = 5;
import './styles.scss'

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

const carouselProperties = {
   prevArrow: PreviousBtn(),
   nextArrow: NextBtn(),
   slidesToShow: slidesToShow,
   slidesToScroll: 2,
   infinite: false,
   responsive: [
      {
         breakpoint: 426,
         settings: {
            slidesToShow: 1,
            centerMode: false,
         },
      },
      {
         breakpoint: 769,
         settings: {
            slidesToShow: 3,
            centerMode: false,
         },
      },
      {
         breakpoint: 1025,
         settings: {
            slidesToShow: 4,
            centerMode: false,
            slidesToScroll: 2,
         },
      },
   ],
};

const sliderItem = () => {
   const [width, setWidth] = useState(window.innerWidth);
   const updateWidth = () => {
      setWidth(window.innerWidth);
   };

   useEffect(() => {
      window.addEventListener('resize', updateWidth);
      return () => window.removeEventListener('resize', updateWidth);
   }, []);

   if (width <= 426) {
      slidesToShow = 1;
   } else if (width > 426 && width <= 769) {
      slidesToShow = 3;
   } else if (width > 769 && width <= 1025) {
      slidesToShow = 4;
   } else {
      slidesToShow = 5;
   }

   return (
      <div style={{ margin: '30px' }} className='carousel'>
         <h1>Basic carousel</h1>
         <Slider {...carouselProperties}>
            {multiData.map((item) => (
               <Card item={item} />
            ))}
         </Slider>
      </div>
   );
};

const Card = ({ item }) => {
   return (
      <div style={{ textAlign: 'center' }}>
         <img
            className='multi__image'
            src={item}
            alt=''
            style={{
               width: '100%',
               height: '170px',
               objectFit: 'contain',
               marginBottom: '10px',
            }}
         />
         <p style={{ fontSize: '14px', padding: '5px 0' }}>TOP TRNDING TVs</p>
         <p style={{ fontSize: '16px', padding: '5px 0', color: 'green' }}>
            From ₹ 7,000
         </p>
         <p style={{ fontSize: '14px', padding: '5px 0', color: 'gray' }}>
            Up To ₹ 5,000 Off on HDFC
         </p>
      </div>
   );
};

export default sliderItem;
