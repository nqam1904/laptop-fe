import Layout from 'layouts/Layout';
import React, { useEffect } from 'react';
import "./styles.scss";
import { useSelector, useDispatch } from 'react-redux';
import { laptopByCateSelector } from 'redux/selector/laptopSelector';
import { filterPice } from 'constants/data';
import { Product, Slider } from 'components';
import { getLaptopByPriceAction } from 'redux/actions/laptopAction';
import _ from 'lodash'
import { bannerSelector } from 'redux/selector/bannerSelector';
import { screenHeight, screenWidth } from 'utils/constant';
const LaptopByCate = ({ title }) => {
   const dispatch = useDispatch()
   const laptopData = useSelector(laptopByCateSelector)
   const banners = useSelector(bannerSelector)
   useEffect(() => {
      window.scrollTo(screenWidth / 2,
         screenHeight / 2, { behavior: 'smooth' });
   }, [])
   const filter = (value) => {
      dispatch(getLaptopByPriceAction({ name: title, value: value }))
   }
   const showProduct = () => {
      if (_.isEmpty(laptopData)) {
         return (
            <div className='not_found-product'>
               <br />
               <h2>Không tìm thấy sản phẩm!</h2>
            </div>
         )
      } else {
         return laptopData?.map((item, i) => <Product key={i} product={item} />)
      }
   }
   return (
      <Layout>
         <Slider data={banners} />
         <div className={!_.isEmpty(laptopData) ? "laptop" : "laptop_non-product"}>
            <h1 className="title_category">{title}</h1>
            <div className="filter_price">
               <div className="block_price">
                  {filterPice.map((item, i) => (
                     <div className='block_filter' key={i}>
                        <p className="price_filter" onClick={() => filter(item.value)}>
                           {item.title}
                        </p>
                     </div>
                  ))}
               </div>
            </div>
            <div className={!_.isEmpty(laptopData) ? "products-category" : "products-category-non"}>{showProduct()}</div>
         </div>
      </Layout>
   )
}
export default React.memo(LaptopByCate);
