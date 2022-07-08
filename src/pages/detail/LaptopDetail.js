import { Product } from 'components'
import Layout from 'layouts/Layout'
import { useEffect } from 'react'
// import { filterPice, product } from '../constants/data'
import "./styles.scss"

const LaptopDetail = ({ title }) => {
   // const showProduct = () => {
   //    const isProd = product.filter((x) => x.category === 'Asus')
   //    const productShow = isProd.length > 4 ? isProd.slice(0, 4) : isProd
   //    return productShow?.map((item, i) => <Product key={i} product={item} />)
   // }
   useEffect(() => {
      console.log('here')
   }, [])
   const filter = () => {

   }
   return (
      <Layout>
         <div className="laptop">
            <h2 className="title">{title}</h2>
            <div className="filter_price">
               <div className="block_price">
                  {/* {filterPice.map((item, i) => (
                     <div key={i}>
                        <p className="price_filter" onClick={filter}>
                           {item.title}
                        </p>
                     </div>
                  ))} */}
               </div>
            </div>
            {/* <div className="products-container">{showProduct()}</div> */}
         </div>
      </Layout>
   )
}
export default LaptopDetail
