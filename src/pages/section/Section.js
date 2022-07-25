import { Product } from 'components'
import { useDispatch, useSelector } from 'react-redux'
import { categorySelector, laptopSelector } from 'redux/selector/laptopSelector'
import { history } from 'redux/store'
import "./index.scss"
const Section = (props) => {
   const dispatch = useDispatch()
   const laptop = useSelector(laptopSelector)
   const category = useSelector(categorySelector)

   const showProduct = () => {
      const isProd = laptop.filter(i => i?.category?.section_show === true).filter(x => x?.category?.name === category?.[0]?.name).map(x => (
         <Product key={x.id} product={x} />
      ))
      return isProd
   }
   const showMore = () => {
   }

   return (
      <div className="laptop">
         <h2 className="title_cate">{category?.[0]?.name}</h2>
         <div className="products-container">{showProduct()}</div>
         <button type="button" className="section_btn" onClick={showMore}>
            Xem thêm
         </button>
      </div>
   )
}
export default Section
