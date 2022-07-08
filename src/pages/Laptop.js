import { Product } from 'components'
import React from 'react'
import { product } from '../constants/data'
import { useParams } from 'react-router-dom';
import "./Laptop.scss"

const Laptop = () => {

   const getParams = useParams()
   console.log(getParams, 'getParams')
   return (
      <div className='laptop'>
         <h2 className='title'>Laptop bán chạy nhất</h2>
         <div className="products-container">
            {product?.map((product) => (
               <Product key={product.id} product={product} />
            ))}
         </div>
      </div>
   )
}
export default Laptop