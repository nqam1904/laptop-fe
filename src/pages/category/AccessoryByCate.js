import { AccessoryItem, Slider } from 'components';
import { filterPice } from 'constants/data';
import Layout from 'layouts/Layout';
import _ from 'lodash';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAccessoryByPriceAction } from 'redux/actions/accessoryAction';
import { accessoryByPriceSelectory } from 'redux/selector/accessorySelector';
import { bannerSelector } from 'redux/selector/bannerSelector';
import "./styles.scss";
const AccessoryByCate = ({ title }) => {
   const dispatch = useDispatch()
   const accessory = useSelector(accessoryByPriceSelectory)

   const banners = useSelector(bannerSelector)
   useEffect(() => {
   }, [])
   const filter = (value) => {
      dispatch(getAccessoryByPriceAction({ name: title, value: value }))
   }
   const showProduct = () => {
      if (_.isEmpty(accessory)) {
         return (
            <div className='not_found-product'>
               <br />
               <h2>Không tìm thấy sản phẩm!</h2>
            </div>
         )
      } else {
         return accessory?.map((item, i) => <AccessoryItem key={i} accessory={item} />)
      }
   }
   return (
      <Layout>
         <Slider data={banners} />
         <div className={!_.isEmpty(accessory) ? "accessory_by-price" : "laptop_non-product"}>
            <h1 className="title_category">Phụ kiện</h1>
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
            <div className="products-container">{showProduct()}</div>
         </div>
      </Layout>
   )
}
export default React.memo(AccessoryByCate);
