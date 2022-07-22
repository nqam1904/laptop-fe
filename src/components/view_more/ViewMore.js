import React from 'react'
import './index.scss'
const ViewMore = () => {
   return (
      <div className="maylike-products-wrapper">
         <h2>Bạn có thể tham khảo</h2>
         <div className="marquee">
            <div className="maylike-products-container track">
               {/* {product.map((item) => (
							<Product key={item.id} product={item} />
						))} */}
            </div>
         </div>
      </div>
   )
}

export default React.memo(ViewMore)