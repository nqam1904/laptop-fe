import Layout from 'layouts/Layout';
import React, { useEffect } from 'react';
import "./styles.scss";
import { useSelector, useDispatch } from 'react-redux';
import { laptopByCateSelector } from 'redux/selector/laptopSelector';
import { filterPice } from 'constants/data';
import { Product } from 'components';
import { getLaptopByPriceAction } from 'redux/actions/laptopAction';

const LaptopByCate = ({ title }) => {
   const dispatch = useDispatch()
   const Laptop = useSelector(laptopByCateSelector)
   useEffect(() => {
   }, [])
   const filter = (value) => {
      console.log(value)
      dispatch(getLaptopByPriceAction({ name: title, value: value }))
   }
   const showProduct = () => {
      return Laptop?.map((item, i) => <Product key={i} product={item} />)
   }
   return (
      <Layout>
         <div className="laptop">
            <h2 className="title">{title}</h2>
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
