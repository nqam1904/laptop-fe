import swal from '@sweetalert/with-react'
import accessoryApi from 'api/accessoryApi'
import { ViewMore } from 'components/'
import { Modal } from "components/"
import Layout from "layouts/Layout"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { Tab, TabList, TabPanel, Tabs } from "react-tabs"
import { getAccessoryDetailAction } from "redux/actions/accessoryAction"
import { accessoryDetailSelector } from "redux/selector/accessorySelector"
import { API_URL } from 'utils/constant'
import { formatNumber } from "utils/function"
import './Accessory.scss'
const AccessoryDetail = () => {
   const [imagesOther, setImagesOhter] = useState('')
   const accessoryDetial = useSelector(accessoryDetailSelector)
   const dispatch = useDispatch()
   let { slug } = useParams()
   let view = accessoryDetial?.[0]?.view

   const getAccessoryDetail = () => {
      dispatch(getAccessoryDetailAction(slug))
   }

   const updateViewAccessory = () => {
      accessoryApi.updateView({ id: accessoryDetial?.[0]?.id, view: ++view })
   }

   useEffect(() => {
      getAccessoryDetail()
      updateViewAccessory()
      window.scrollTo({ top: 0, behavior: 'smooth' });
   }, [])

   useEffect(() => {
      setImagesOhter(accessoryDetial?.[0]?.images?.[0]?.url);
   }, [accessoryDetial?.[0]?.images?.[0]?.url])

   const showImageOther = () => {
      return accessoryDetial?.[0]?.images.map((item, index) => (
         <img
            onClick={() => setImagesOhter(item.url)}
            key={index}
            className='multi__image'
            src={API_URL + item.url}
            alt={item?.name}
         />
      ))
   }
   return (
      <Layout>
         <div className="accessory-detail-container">
            <div className='accessory-detail-left'>
               <div>
                  <img
                     src={`${API_URL}` + imagesOther || accessoryDetial?.[0]?.images?.url}
                     className="accessory-detail-image"
                  />
                  <div className="accessory_slider-image">
                     {showImageOther()}
                  </div>
               </div>
            </div>
            <div className="accessory-detail-right">
               <h1>{accessoryDetial?.[0]?.name}</h1>
               <p className='accessory_price'>{formatNumber(accessoryDetial?.[0]?.price)}₫</p>
               <hr />
               <h3 className="accessory_info-title">Tình trạng:</h3>
               <p className="accessory_info-sub">{accessoryDetial?.[0]?.appearence || ''}</p>
               <hr />
               <div className="util">
                  <h3>Chính sách:</h3>
                  <p> ✔ {accessoryDetial?.[0]?.insurance}</p>
               </div>
               <hr />
               <div className="promition-detail_accessory">
                  <h3 className="title-promotion_accessory">Quà tặng:</h3>
                  <div className="promiton-body_accessory">
                     <span className="item-promtion_accessory">
                        - Chưa có khuyến mãi.
                     </span>
                  </div>
               </div>
               <div className='mcredit'>
                  <h3>Hỗ trợ trả góp MPOS (Thẻ tín dụng)</h3>
               </div>
               <div className="accessory_buttons">
                  <button type="button" className="buy-now" onClick={() => swal(
                     <Modal />
                  )}>
                     Mua ngay
                  </button>
               </div>
            </div>
         </div>
         <div className="tabs_view">
            <Tabs>
               <TabList>
                  <Tab>Mô tả</Tab>
               </TabList>
               <TabPanel style={{ padding: 20 }}>
                  <p className="content_view">{accessoryDetial?.[0]?.content || ''}</p>
               </TabPanel>
            </Tabs>
         </div>
         <ViewMore />
      </Layout>
   )
}
export default AccessoryDetail