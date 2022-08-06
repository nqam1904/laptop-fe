import swal from '@sweetalert/with-react'
import accessoryApi from 'api/accessoryApi'
import { images } from 'assets'
import { Breadcrumb } from 'components/'
import Layout from "layouts/Layout"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Tab, TabList, TabPanel, Tabs } from "react-tabs"
import { accessoryDetailSelector } from "redux/selector/accessorySelector"
import { footerSelector } from 'redux/selector/footerSelector'
import { API_URL } from 'utils/constant'
import { formatNumber } from "utils/function"
import './Accessory.scss'
const AccessoryDetail = () => {
   const [imagesOther, setImagesOhter] = useState('')
   const accessoryDetial = useSelector(accessoryDetailSelector)
   const footer = useSelector(footerSelector)
   const dispatch = useDispatch()
   let view = accessoryDetial?.view
   const updateViewAccessory = () => {
      accessoryApi.updateView({ id: accessoryDetial?.id, view: ++view })
   }
   useEffect(() => {
      updateViewAccessory()
      window.scrollTo({ top: 0, behavior: 'smooth' });
   }, [])

   useEffect(() => {
      setImagesOhter(accessoryDetial?.images?.[0]?.url);
   }, [accessoryDetial?.images?.[0]?.url])

   const showImageOther = () => {
      return accessoryDetial?.images.map((item, index) => (
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
         <Breadcrumb product={accessoryDetial?.name} category="Phụ kiện" />
         <div className='detail_container'>
            <div className="product-detail-container">
               <div className='product-detail-right'>
                  <div className='product_detail-left-image'>
                     <img
                        src={`${API_URL}` + imagesOther || accessoryDetial?.images?.url}
                        onError={({ currentTarget }) => {
                           currentTarget.onerror = null; // prevents looping
                           currentTarget.src = images.no_image;
                        }}
                        className="product-detail-image"
                     />
                     <div className="product_slider-image">
                        {showImageOther()}
                     </div>
                  </div>
               </div>
               <div className="product-detail-left">
                  <h1>{accessoryDetial?.name}</h1>
                  <p className='product-price '>{formatNumber(accessoryDetial?.price)}₫</p>
                  <hr />
                  <h3 className="product_info-title">Tình trạng:</h3>
                  <p className="product_info-sub">{accessoryDetial?.appearence || ''}</p>
                  <hr />
                  <div className="util_accessory">
                     <h3>Chính sách:</h3>
                     <p>{accessoryDetial?.insurance || ''}</p>
                     <br />
                     <span className="item-promtion_accessory">
                        {accessoryDetial?.promotion_content || ''}
                     </span>
                  </div>
                  <hr />
                  <div className='mcredit'>
                     <h3>Hỗ trợ trả góp MPOS (Thẻ tín dụng)</h3>
                  </div>
                  <div className="accessory_buttons">
                     <button type="button" className="buy-now" onClick={() => swal({
                        title: 'Thông báo!',
                        text: `Bạn vui lòng liên hệ ${footer?.[0]?.phone}`,
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
                     <p className="content_view">{accessoryDetial?.content || ''}</p>
                  </TabPanel>
               </Tabs>
            </div>
         </div>
      </Layout >
   )
}
export default AccessoryDetail