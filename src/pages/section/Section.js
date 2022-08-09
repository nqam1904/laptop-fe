import { Product } from 'components'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { getLaptopByCateAction } from 'redux/actions/laptopAction'
import "./index.scss"

const Section = (props) => {
   const { data } = props || []
   const dispatch = useDispatch()
   const showProduct = () => {
      return data?.map((item, index) => {
         const dataFilter = item?.dataFilter?.length > 4 ? item?.dataFilter?.slice(0, 4) : item?.dataFilter
         return (
            <>
               <h2 className="title_cate" key={index}>{item.nameSec}</h2>
               <div className='section_container-product'>
                  {dataFilter?.map(i => (
                     <Product isHeader key={i?.id} product={i} />
                  ))}
               </div>
               <Link to={`/${item.nameSec}`} onClick={() => dispatch(getLaptopByCateAction(item.nameSec))} className="btn_link">
                  <button type="button" className="section_btn">
                     Xem thêm
                  </button>
               </Link>
            </>
         )
      })
   }


   return (
      <div className="laptop">
         <div className="section_container">{showProduct()}</div>
      </div>
   )
}
export default Section
