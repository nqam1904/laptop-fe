import ProductApi from 'api/productApi'
import { Product } from 'components'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { laptopByCateSelector } from 'redux/selector/laptopSelector'
import { sectionSelector } from 'redux/selector/sectionSelector'
import { history } from 'redux/store'
import "./index.scss"

const Section = () => {
   const dispatch = useDispatch()
   const section = useSelector(sectionSelector)
   const nameCate = section.forEach(e => {
      console.log(e.category?.name, 'name')
   })
   const laptop = useSelector(laptopByCateSelector)
   const titleSection = () => {
      return section.map((item) => (
         <h2 className="title_cate">{item?.category?.name}</h2>
      ))
   }
   const laptopByCate = async () => {
      let array = []
      console.log(array, 'array')

      const a = await section.forEach(element => { ProductApi.queryFilterCategory(element?.category?.name) });
      console.log(a, 'a')
      array.push(...a)
      console.log(array, 'new array')
   }

   const showProduct = () => {
      console.log(laptop, 'nameCate')
      const isProd = laptop.filter((x) => x.category.name === nameCate)
      const productShow = isProd.length > 4 ? isProd.slice(0, 4) : isProd
      return productShow?.map((item, i) => (
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
   const show_more = () => {
      history.push(`${nameCate}`)
   }
   useEffect(() => {
      laptopByCate()
   }, [])
   return (
      <div className="laptop">
         {titleSection()}
         <div className="products-container">{showProduct()}</div>
      </div>
   )
}
export default Section
