import React from 'react'
import { useSelector } from 'react-redux'
// import { storageProductSelector } from 'redux/selector/laptopSelector'
import _ from 'lodash'
import { Product } from 'components';
import './index.scss'
const ViewMore = () => {
   // const storageProduct = useSelector(storageProductSelector)
   return (
      <div className='wapper'>
         <h2>Bạn vừa mới xem</h2>
         <div className="maylike-products-wrapper">
            <div className="marquee">
               <div className="maylike-products-container track">
                  {/* {storageProduct?.map((item) => (
                     <Product key={item?.id} product={item} storage={true} />
                  ))} */}
               </div>
            </div>
         </div>
      </div>
   )
}

export default React.memo(ViewMore)