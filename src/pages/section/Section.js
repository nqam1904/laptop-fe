import ProductApi from 'api/productApi'
import { Product } from 'components'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { laptopByCateSelector } from 'redux/selector/laptopSelector'
import { sectionSelector } from 'redux/selector/sectionSelector'
import { history } from 'redux/store'
import React from 'react'
import "./index.scss"

const Section = () => {
   const dispatch = useDispatch()
   const section = useSelector(sectionSelector)
   const nameCate = section.map(e => e?.category?.name)
   const [products, setProducts] = useState([])
   console.log(nameCate, 'nameCate')
   console.log(products, 'products')
   const titleSection = () => {
      return section.map((item) => (
         <h2 className="title_cate">{item?.category?.name}</h2>
      ))
   }
   const laptopByCate = async () => {
      const listPromise = await Promise.all(section.map(element => ProductApi.queryFilterCategory(element?.category?.name)))
      setProducts(listPromise)
   }
   useEffect(() => {
      laptopByCate()
   }, [])
   const showProduct = () => {
      const isProd = products.filter(i => i?.category?.name === nameCate)
      return products?.map((item, i) => (
         <>
            <Product key={i} product={item} />
            <div className="buttons">
               <button type="button" className="show_more" onClick={show_more}>
                  Xem thêm
               </button>
            </div>
         </>
      )
      )
   }
   const test = () => {
      const category = []
      return category.map(i =>
         <>{i.name} {(i.products || []).map(product => <>product</>)}</>
      )
   }
   const show_more = () => {
      history.push(`${nameCate}`)
   }

   return (
      <div className="laptop">
         {test()}
         {/* <div className="products-container">{showProduct()}</div> */}
      </div>
   )
}
export default Section
