import ProductApi from 'api/productApi'
import { Product } from 'components'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { laptopByCateSelector } from 'redux/selector/laptopSelector'
import { sectionSelector } from 'redux/selector/sectionSelector'
import { history } from 'redux/store'
import React from 'react'
import "./index.scss"
import _ from 'lodash'
const Section = () => {
   const dispatch = useDispatch()
   const section = useSelector(sectionSelector)
   const nameCate = section.map(e => e?.category?.name)
   const [products, setProducts] = useState([])
   const titleSection = () => {
      return section.map((item) => (
         <h2 className="title_cate">{item?.category?.name}</h2>
      ))
   }
   const laptopByCate = async () => {
      let listSection = []
      const listPromise = await Promise.all(section.map(element => ProductApi.queryFilterCategory(element?.category?.name)))
      await listPromise.forEach(x => listSection.push(...x))
      setProducts(listSection)
   }
   useEffect(() => {
      laptopByCate()
   }, [])
   const showProduct = () => {
      console.log(products?.filter(category => category?.category?.name === nameCate?.forEach(x => x)), 'asdas')
      console.log(products.filter(category => category?.category?.name === nameCate?.forEach(x => x)))
      return products.filter(category => category?.category?.name === nameCate?.forEach(x => x))
         .map((product, index) => {
            console.log(product)
         }
         )

   }
   const show_more = () => {
      history.push(`${nameCate}`)
   }

   return (
      <div className="laptop">
         {/* {titleSection()} */}
         <div className="products-container">{showProduct()}</div>
      </div>
   )
}
export default Section
