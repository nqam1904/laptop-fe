import Layout from 'layouts/Layout'
import React from 'react'
import _ from 'lodash'
import './index.scss'
import { Input } from 'components/'
import { useSelector } from 'react-redux'
import { searchProductSelector } from 'redux/selector/laptopSelector'
import { Product } from 'components/'

const SearchProduct = () => {
   const searchProduct = useSelector(searchProductSelector)
   const showProduct = () => {
      const showLaptop = searchProduct.map((item, index) => (
         <Product key={index} product={item} />
      ))
      return showLaptop
   }
   return (
      <Layout>
         <div className="search_page">
            <Input />
            {!_.isEmpty(searchProduct) && (
               <div className='search_result'>
                  <h2 className="title_search">{searchProduct.length} kết quả tìm kiếm</h2>
                  <br />
                  <div className="search_product-result">{showProduct()}</div>
               </div>
            )}

         </div>
      </Layout>
   )
}

export default SearchProduct