import Layout from 'layouts/Layout';
import React, { useEffect } from 'react';
import "./styles.scss";
import { useSelector, useDispatch } from 'react-redux';
import { laptopByCateSelector } from 'redux/selector/laptopSelector';
import { filterPice } from 'constants/data';
import { Product } from 'components';
import { getLaptopByPriceAction } from 'redux/actions/laptopAction';
import _ from 'lodash'
const LaptopByCate = ({ title }) => {
   const dispatch = useDispatch()
   const laptopData = useSelector(laptopByCateSelector)
   useEffect(() => {
   }, [])
   const filter = (value) => {
      dispatch(getLaptopByPriceAction({ name: title, value: value }))
   }
   const showProduct = () => {
      if (_.isEmpty(laptopData)) {
         return (
            <div className='not_found-product'>
               <h1>Không tìm thấy sản phẩm!</h1>
            </div>
         )
      } else {

         return laptopData?.map((item, i) => <Product key={i} product={item} />)
      }
   }
   return (
      <Layout>
         <div className={!_.isEmpty(laptopData) ? "laptop" : "laptop_non-product"}>
            <h2 className="title_category">{title}</h2>
            <div className="filter_price">
               <div className="block_price">
                  {filterPice.map((item, i) => (
                     <div key={i}>
                        <p className="price_filter" onClick={() => filter(item.value)}>
                           {item.title}
                        </p>
                     </div>
                  ))}
               </div>
            </div>
            <div className="products-container">{showProduct()}</div>
         </div>
      </Layout>
   )
}
export default React.memo(LaptopByCate);
