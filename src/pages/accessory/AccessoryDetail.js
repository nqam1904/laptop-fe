import swal from '@sweetalert/with-react'
import accessoryApi from 'api/accessoryApi'
import { images } from 'assets'
import { Breadcrumb } from 'components/'
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
            onError={({ currentTarget }) => {
               currentTarget.onerror = null; // prevents looping
               currentTarget.src = images.no_image;
            }}
            className='multi__image'
            src={API_URL + item.url}
            alt={item?.name}
         />
      ))
   }
   return (
      <Layout>
         <Breadcrumb style={{ marginTop: '5rem' }} product={accessoryDetial?.[0]?.name} category="Phụ kiện" />
         <div className="accessory-detail-container">
            <div className='accessory-detail-left'>
               <div className='accessory_detail-left-image'>
                  <img
                     src={`${API_URL}` + imagesOther || accessoryDetial?.[0]?.images?.url}
                     onError={({ currentTarget }) => {
                        currentTarget.onerror = null; // prevents looping
                        currentTarget.src = images.no_image;
                     }}
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
               <div className="util_accessory">
                  <h3>Chính sách:</h3>
                  <p>{accessoryDetial?.[0]?.insurance || ''}</p>
                  <br />
                  <span className="item-promtion_accessory">
                     {accessoryDetial?.[0]?.promotion_content || 'Chưa có khuyến mãi.'}
                  </span>
               </div>
               <hr />
               <div className='mcredit'>
                  <h3>Hỗ trợ trả góp MPOS (Thẻ tín dụng)</h3>
               </div>
               <div className="accessory_buttons">
                  <button type="button" className="buy-now" onClick={() => swal({
                     title: 'Thông báo!',
                     text: 'Bạn vui lòng liên hệ 03399895154',
                     icon: 'info',
                  })}>
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
      </Layout>
   )
}
export default AccessoryDetail