import { Product, Slider } from 'components';
import { filterPice } from 'constants/data';
import Layout from 'layouts/Layout';
import _ from 'lodash';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getLaptopByPriceAction } from 'redux/actions/laptopAction';
import { bannerSelector } from 'redux/selector/bannerSelector';
import { laptopByCateSelector } from 'redux/selector/laptopSelector';
import "./styles.scss";
const LaptopByCate = ({ title }) => {
   const dispatch = useDispatch()
   const laptopData = useSelector(laptopByCateSelector)
   const banners = useSelector(bannerSelector)
   const [active, setActive] = useState();
   useEffect(() => {
      setActive(0)
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
   const onActive = (id) => {
      setActive(id)
   }
   return (
      <Layout>
         <Slider data={banners} />
         <div className={!_.isEmpty(laptopData) ? "laptop" : "laptop_non-product"}>
            <h1 className="title_category">{title}</h1>
            <div className="filter_price_active">
               <div className="block_price">
                  {filterPice.map((item, i) => {
                     return (
                        <div className={item?.id === active ? 'block_filter_active' : 'block_filter'} key={i} onClick={() => onActive(item?.id)}>
                           <p className="price_filter" onClick={() => filter(item.value)}>
                              {item.title}
                           </p>
                        </div>
                     )
                  })}
               </div>
            </div>
            <div className={!_.isEmpty(laptopData) ? "products-category" : "products-category-non"}>{showProduct()}</div>
         </div>
      </Layout>
   )
}
export default React.memo(LaptopByCate);
