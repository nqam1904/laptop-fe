import Layout from "layouts/Layout"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getAccessoryDetailAction } from "redux/actions/accessoryAction"
import { accessoryDetailSelector } from "redux/selector/accessorySelector"
import swal from "sweetalert"
import { API_URL } from 'utils/constant'
import { formatNumber } from "utils/function"
import './Accessory.scss'
const AccessoryDetail = () => {
   const [imagesOther, setImagesOhter] = useState('')
   const accessoryDetial = useSelector(accessoryDetailSelector)
   const dispatch = useDispatch()
   let { slug } = useParams()
   const getAccessoryDetail = () => {
      dispatch(getAccessoryDetailAction(slug))
   }
   useEffect(() => {
      getAccessoryDetail()
      window.scrollTo({ top: 0, behavior: 'smooth' });
   }, []);
   useEffect(() => {
      setImagesOhter(accessoryDetial?.[0]?.images?.[0]?.url);
   }, [accessoryDetial?.[0]?.images?.[0]?.url])
   console.log(accessoryDetial, 'accessoryDetial')
   const showImageOther = () => {
      return accessoryDetial?.[0]?.images?.map((item, i) => (
         <img
            key={i}
            src={`${API_URL}` + item?.url}
            alt={item?.name}
            className={i === imagesOther ? 'small-image' : 'small-image'}
            onClick={() => setImagesOhter(item?.url)}
         />
      ))
   }
   return (
      <Layout>
         <div className="accessory-detail-container">
            <div className='accessory-detail-left'>
               <div className="image-container">
                  <img
                     src={`${API_URL}` + imagesOther || accessoryDetial?.[0]?.images?.url}
                     className="product-detail-image"
                  />
               </div>
               <div className="small-images-container">{showImageOther()}</div>
            </div>
            <div className="accessory-detail-right">
               <h1>{accessoryDetial?.[0]?.name}</h1>
               <span className={'price'}>{formatNumber(accessoryDetial?.[0]?.price)}₫</span>
               <hr />

               <h3>Tình trạng:</h3>
               <p>{accessoryDetial?.[0]?.appearence || ''}</p>
               <hr />
               <div className="ulti">
                  <h3>Chính sách:</h3>
                  <p> ✔ {accessoryDetial?.[0]?.insurance_laptop}</p>
               </div>
               <div className='mcredit'>
                  <h3>Hỗ trợ trả góp MPOS (Thẻ tín dụng)</h3>
               </div>
               <div className="buttons">
                  <button type="button" className="buy-now" onClick={() => swal(
                     <div>
                        <h1>Thông báo</h1>
                        <p>
                           Tính đang phát triển!
                        </p>
                     </div>
                  )}>
                     Mua ngay
                  </button>
               </div>
            </div>
         </div>


      </Layout>
   )
}
export default AccessoryDetail